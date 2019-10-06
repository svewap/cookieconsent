"use strict"

import Base from "./Base"
import {
  statusDismiss,
  statusAllow
} from "../constants"
import {
  addCustomStylesheet,
  hash,
  interpolateString,
  isMobile,
  isPlainObject,
  throttle,
  traverseDOMPath,
} from "../utils"

export default class Popup extends Base {
  constructor( options, cookieConstent ) {
    super( options )
    this.cookieConstent = cookieConstent

    this.customStyles = {}
    this.hasTransition = !!(function() {
      const el = document.createElement('div')
      const trans = {
        t: 'transitionend',
        OT: 'oTransitionEnd',
        msT: 'MSTransitionEnd',
        MozT: 'transitionend',
        WebkitT: 'webkitTransitionEnd'
      }
  
      for (let prefix in trans) {
        if (
          trans.hasOwnProperty(prefix) &&
          typeof el.style[prefix + 'ransition'] !== 'undefined'
        ) {
          return trans[prefix]
        }
      }
      return ''
    })()


    // the full markup either contains the wrapper or it does not (for multiple instances)
    let cookiePopup = this.options.window
      .replace('{{classes}}', this.getPopupClasses().join(' '))
      .replace('{{children}}', this.getPopupInnerMarkup())


    // if user passes html, use it instead
    const customHTML = this.options.overrideHTML
    if (typeof customHTML == 'string' && customHTML.length ) {
      cookiePopup = customHTML
    }

    // if static, we need to grow the element from 0 height so it doesn't jump the page
    // content. we wrap an element around it which will mask the hidden content
    
    if (this.options.static) {
      // `grower` is a wrapper div with a hidden overflow whose height is animated
      const wrapper = this.appendMarkup(`<div class="cc-grower">${cookiePopup}</div>`)

      wrapper.style.display = '' // set it to visible (because appendMarkup hides it)
      this.element = wrapper.firstChild // get the `element` reference from the wrapper
      this.element.style.display = 'none'
      this.element.classList.add('cc-invisible')
    } else {
      this.element = this.appendMarkup(cookiePopup)
    }

    this.applyAutoDismiss()
    this.applyRevokeButton()
  }

  open() {
    if (!this.element) return

    if (!this.isOpen()) {
      if (this.hasTransition) {
        this.fadeIn()
      } else {
        this.element.style.display = ''
      }

      if (this.options.revokable) {
        this.toggleRevokeButton()
      }
      this.emit( 'popupOpened' )
    }

    return this
  }

  close( showRevoke ) {
    if (!this.element) return
    
    if (this.isOpen()) {
      if (this.hasTransition) {
        this.fadeOut()
      } else {
        this.element.style.display = 'none'
      }

      if (showRevoke && this.options.revokable) {
        this.toggleRevokeButton(true)
      }
      this.emit( 'popupClosed' )
    }

    return this
  }

  fadeIn() {
    const el = this.element

    if (!this.hasTransition || !el) return

    // This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
    // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
    // has a chance to run, then we run it ourselves
    if (this.afterTransition) {
      this.afterFadeOut(el)
    }

    if (el.classList.contains('cc-invisible')) {
      el.style.display = ''

      if (this.options.static) {
        this.element.parentNode.style.maxHeight = this.element.clientHeight + 'px'
      }

      const fadeInTimeout = 20 // (ms) DO NOT MAKE THIS VALUE SMALLER. See below

      // Although most browsers can handle values less than 20ms, it should remain above this value.
      // This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
      // If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
      // the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
      // its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway
      this.openingTimeout = setTimeout(
        () => this.afterFadeIn(el),
        fadeInTimeout
      )
    }
  }

  /**
   * This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
   * There is a good reason why it's called in a timeout. Read 'fadeIn'
   */
  afterFadeIn( element ) {
    this.openingTimeout = null
    element.classList.remove('cc-invisible')
  }
  
  fadeOut() {
    if (!this.hasTransition || !this.element) return

    if (this.openingTimeout) {
      clearTimeout(this.openingTimeout)
      this.afterFadeIn(this.element)
    }

    if (!this.element.classList.contains('cc-invisible')) {
      if (this.options.static) {
        this.element.parentNode.style.maxHeight = ''
      }

      this.afterTransition = () => this.afterFadeOut(this.element)
      this.element.addEventListener(this.transitionEnd, this.afterTransition)

      this.element.classList.add('cc-invisible')
    }
  }
  
  afterFadeOut(el) {
    el.style.display = 'none' // after close and before open, the display should be none
    el.removeEventListener(this.transitionEnd, this.afterTransition)
    this.afterTransition = null
  }

  isOpen() {
    return (
      this.element &&
      this.element.style.display === '' &&
      (this.hasTransition ? !this.element.classList.contains('cc-invisible') : true)
    )
  }

  toggleRevokeButton(show) {
    if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none'
  }


  // top, bottom, left, right
  getPositionClasses() {
    return this.options.position.split( '-' ).map( pos => 'cc-'+pos)
  }

  getPopupClasses() {
    const opts = this.options
    let positionStyle =
      opts.position === 'top' || opts.position === 'bottom'
        ? 'banner'
        : 'floating'

    if (isMobile() && opts.mobileForceFloat) {
      positionStyle = 'floating'
    }

    const classes = [
      'cc-' + positionStyle, // floating or banner
      'cc-type-' + opts.type, // add the compliance type
      'cc-theme-' + opts.theme, // add the theme
    ]

    if (opts.static) {
      classes.push('cc-static')
    }

    classes.push.apply(classes, this.getPositionClasses())

    // we only add extra styles if `palette` has been set to a valid value
    this.attachCustomPalette(this.options.palette)

    // if we override the palette, add the class that enables this
    if (this.customStyleSelector) {
      classes.push(this.customStyleSelector)
    }

    return classes
  }

  getRevokeButtonClasses() {
    const opts = this.options

    const classes = []
    classes.push('cc-'+this.options.revokePosition)
    if (this.options.animateRevokable) {
      classes.push('cc-animate')
    }
    if (this.customStyleSelector) {
      classes.push(this.customStyleSelector)
    }
    if (this.options.theme) {
      classes.push('cc-theme-'+this.options.theme)
    }

    return classes
  }

  getPopupInnerMarkup() {
    const interpolated = {}
    const opts = this.options

    // removes link if showLink is false
    if (!opts.showLink) {
      opts.elements.link = '' 
      opts.elements.messagelink = opts.elements.message
    }

    let categories = Object.keys(this.options.categories).map(name => {
      const settings = opts.categories[name]
      if (settings.disabled !== undefined && settings.disabled) return
      const checked = settings.preselected || settings.status === statusAllow ? ' checked=checked' : ''
      const disabled = settings.mandatory ? ' disabled' : ''
      return [opts.elements.category.replace('{{label}}', settings.label)
          .replace('{{category}}', name)
          .replace('{{checked}}', checked)
          .replace('{{disabled}}', disabled)
          .replace('{{tooltip}}', settings.tooltip)]
    }).join('');

    opts.elements.categories = opts.elements.categories.replace('{{categories}}', categories)

    opts.elements.saveBtn = opts.elements.saveBtn.replace('{{label}}', opts.content.save)
    opts.elements.selectAllBtn = opts.elements.selectAllBtn.replace('{{label}}', opts.content.selectAll)


    Object.keys(opts.elements).forEach( prop => {
      interpolated[prop] = interpolateString(
        opts.elements[prop],
        name => {
          const str = opts.content[name]
          return name && typeof str == 'string' && str.length ? str : ''
        }
      )
    })

    // checks if the type is valid and defaults to info if it's not
    let complianceType = opts.compliance[opts.type]
    if (!complianceType) {
      complianceType = opts.compliance.info
    }

    // build the compliance types from the already interpolated `elements`
    interpolated.compliance = interpolateString( complianceType, name => interpolated[name] )

    // checks if the layout is valid and defaults to basic if it's not
    let layout = opts.layouts[opts.layout]
    if (!layout) {
      layout = opts.layouts.basic
    }
    
    return interpolateString(layout, match =>interpolated[match] )
  }

  appendMarkup(markup) {
    const opts = this.options
    const div = document.createElement('div')
    const cont =
      opts.container && opts.container.nodeType === 1
        ? opts.container
        : document.body

    div.innerHTML = markup

    const el = div.children[0]

    el.style.display = 'none'

    if (el.classList.contains('cc-window') && this.hasTransition) {
      el.classList.add('cc-invisible')
    }

    el.addEventListener('click', event => this.handleButtonClick( event ) )
    el.querySelectorAll( '.cc-btn [type="checkbox"]' ).forEach( checkbox => {
      checkbox.addEventListener( 'change', () => {
        this.userCategories[ checkbox.name ] = checkbox.checked ? 'ALLOW' : 'DENY'
      })
      checkbox.addEventListener( 'click', event => (event.stopPropagation()) )
    })
    el.querySelectorAll('.cc-info').forEach( showInfo => {
      showInfo.addEventListener('mousedown', function ( event ) {
        if ( this === document.activeElement  ) {
          this.blur()
          event.preventDefault()
        }
      })
    })

    if (opts.autoAttach) {
      try {
        if (!cont.firstChild) {
          cont.appendChild(el)
        } else {
          cont.insertBefore(el, cont.firstChild);
        }
      } catch ( error ) {
        throw new Error( 'No container to attach too. Make sure the DOM has loaded. Is your script loaded just before the `</body>` tag?' )
      }
    }

    return el
  }

  handleButtonClick(event) {
    // returns the parent element with the specified class, or the original element - null if not found
    const btn = traverseDOMPath(event.target, 'cc-btn') || event.target
    const opts = this.options;

    if (btn.dataset.action !== undefined) {
      if (btn.dataset.action === 'checkAllAndSave') {
        this.checkAll()
      }
      if (btn.dataset.action === 'save' || btn.dataset.action === 'checkAllAndSave') {
        this.cookieConstent.save()
        this.close(true)
        return
      }
      if (btn.dataset.action === 'close') {
        this.cookieConstent.setStatuses(statusDismiss)
        this.close(true)
        return
      }
      if (btn.dataset.action === 'revoke') {
        this.cookieConstent.revokeChoice()
      }
    }

  }

  /**
   * check all visible categories
   */
  checkAll() {
    this.element.querySelectorAll('.cc-categories input[type=checkbox]').forEach((checkbox,key) => {
      checkbox.checked = true
    });
  }

  getCheckBoxValues() {
    let values = [];
    this.element.querySelectorAll('.cc-categories input[type=checkbox]').forEach((checkbox,key) => {
      values[checkbox.attributes['name'].value] = checkbox.checked !== false
    })
    return values
  }


  attachCustomPalette(palette) {
    const hashStr = hash(JSON.stringify(palette))
    const selector = 'cc-color-override-' + hashStr
    const isValid = isPlainObject(palette)

    this.customStyleSelector = isValid ? selector : null

    if (isValid) {
      addCustomStylesheet(hashStr, palette, '.' + selector)
    }
    return isValid
  }


  getEventPath( event ) {
    const path = event.composedPath ? event.composedPath() : (function ( arr, element ) {
      while ( element ) {
        arr.push( element )
        element = element.parentNode
      }
      return arr
    })([],event.target )
    if ( !path ) {
      console.warn( "'.path' & '.composedPath' failed to generate an event path." )
      return
    }
    return path
  }

  applyAutoDismiss() {
    const {
      enabled,
      dismissOnTimeout  : delay,
      dismissOnScroll   :scrollRange,
      dismissOnLinkClick,
      dismissOnWindowClick,
      dismissOnKeyPress
    } = this.options

    if ( enabled ) {
      if (typeof delay == 'number' && delay >= 0) {
        this.dismissTimeout = setTimeout( ()=> {
          this.setStatuses(statusDismiss)
          this.close(true)
        }, Math.floor(delay))
      } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
        this.onWindowScroll = () => {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            this.setStatuses(statusDismiss)
            this.close(true)

            window.removeEventListener('scroll', this.onWindowScroll, { passive: true })
            this.onWindowScroll = null
          }
        }
        window.addEventListener('scroll', this.onWindowScroll, { passive: true })
      } else if (dismissOnWindowClick) {
        this.onWindowClick = evt => {
          if ( !getEventPath( evt ).some( element =>
                  this.options.ignoreClicksFrom.some( ignoredClick =>
                    element.classList && element.classList.contains( ignoredClick )
                  )
                )
          ) {
            this.setStatuses(statusDismiss)
            this.close(true)
            
            window.removeEventListener('click', this.onWindowClick)
            window.removeEventListener('touchend', this.onWindowClick)
            this.onWindowClick = null
          }
        }

        window.addEventListener('click', this.onWindowClick)
        window.addEventListener('touchend', this.onWindowClick)
      } else if (dismissOnLinkClick) {
        this.onLinkClick = evt => {
          if ( getEventPath( evt ).some( elem => typeof elem.tagName !== 'undefined' && elem.tagName === 'A' ) ) {
            this.setStatuses( statusDismiss )
            this.close( true )
            window.removeEventListener('click', this.onLinkClick)
            this.onLinkClick = null
          }
        }
        window.addEventListener('click', this.onLinkClick)
      } else if ( dismissOnKeyPress ) {
          this.onKeyPress = event => {
            const { keyCode } = event
            if ( keyCode === 13 ) {
              this.setStatuses( statusAllow )
              this.close( true )
            } else if ( keyCode === 27) {
              this.setStatuses( statusDismiss )
              this.close( true )
            }
          }
          window.addEventListener( 'onkeypress', this.onKeyPress )
      }
    }
  }

  applyRevokeButton() {
    // revokable is true if advanced compliance is selected
    if (this.options.type !== 'info') this.options.revokable = true
    // animateRevokable false for mobile devices
    if (isMobile()) this.options.animateRevokable = false

    if (this.options.revokable) {
      const classes = this.getRevokeButtonClasses()

      const revokeBtn = this.options.revokeBtn
        .replace('{{classes}}', classes.join(' '))
        .replace('{{policy}}', this.options.content.policy)

      this.revokeBtn = this.appendMarkup(revokeBtn)

      const btn = this.revokeBtn
      if (this.options.animateRevokable) {
        const onMouseMove = throttle(function(evt) {
          let active = false
          const minY = 20
          const maxY = window.innerHeight - 20

          if ( ( btn.classList.contains( 'cc-top' ) && evt.clientY < minY ) ||
                ( btn.classList.contains( 'cc-bottom' ) && evt.clientY > maxY ) ) {
            active = true
          }

          if (active && !btn.classList.contains( 'cc-active' ) ) {
              btn.classList.add( 'cc-active' )
          } else if ( !active && btn.classList.contains( 'cc-active' ) ) {
              btn.classList.remove( 'cc-active' )
          }
        }, 200)

        this.onMouseMove = onMouseMove
        window.addEventListener('mousemove', onMouseMove)
      }
    }
  }
  destroy(){
    console.warn( 'Destroying...')
    if ( this.element ){
      this.element.remove()
    }
    if ( this.revokeBtn ){
      this.revokeBtn.remove()
    }
    if ( this.onWindowScroll ){
      window.removeEventListener('scroll', this.onWindowScroll )
    }
    if ( this.onWindowClick ) {
      window.removeEventListener('click', this.onWindowClick )
      window.removeEventListener('touchend', this.onWindowClick)
    }
    if ( this.onLinkClick ) {
      window.removeEventListener('click', this.onLinkClick)
    }
    if ( this.onKeyPress ) {
      window.addEventListener( 'onkeypress', this.onKeyPress )
    }
  }
}
