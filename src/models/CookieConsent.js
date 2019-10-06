"use strict";

import Base from "./Base"
import Legal from "./Legal"
import Location from "./Location"
import Popup from "./Popup"

import {statusAllow, statusDismiss, statuses} from "../constants"
import {getCookie, isValidStatus, setCookie} from "../utils"
import defaultOptions from "../options/default"

// This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

export default class CookieConsent extends Base {
  constructor( options = {} ){
    super( defaultOptions, options );

    let answers = this.getFilteredStatusValuesFromCookies();
    Object.keys(answers).map(category => {
      this.options.categories[category].status = answers[category]
    });


    // apply blacklist / whitelist
    if (this.options.blacklistPage.includes(location.pathname)) {
      this.options.enabled = false
    }
    if (this.options.whitelistPage.includes(location.pathname)) {
      this.options.enabled = true
    }

    // if they have already answered
    if (answers.length > 0) {
      this.options.enabled = false;
      setTimeout( () => this.emit( 'initialized', answers ) )
    } else if ( this.options.legal && this.options.legal.countryCode ) {
      this.initializationComplete( { code: this.options.legal.countryCode } )
    } else if ( this.options.location ) {
      new Location( this.options.location ).locate( this.initializationComplete.bind( this ), this.initializationError.bind( this ) )
    } else {
      this.initializationComplete({})
    }
  }
  initializationComplete( result ){
    if (result.code) {
      this.options = new Legal(this.options.legal).applyLaw( this.options, result.code )
    }
    this.popup = new Popup( this.options, this );
    setTimeout( () => this.emit('initialized', this.popup ), 0 );

    if (this.options.autoOpen && this.options.enabled) {
      this.autoOpen()
    }
  }
  initializationError( error ) {
    setTimeout( () => this.emit( 'error', error, new Popup( this.options, this ) ), 0 )
  }
  getCountryLaws( countryCode ){
    return new Legal(this.options.legal).get( countryCode )
  }
  isOpen() {
    return this.popup.isOpen()
  }
  close(){
    return this.popup.close()
  }
  open(){
    return this.popup.open()
  }
  toggleRevokeButton( bool ) {
    return this.popup.toggleRevokeButton( bool )
  }
  destroy(){
    return this.popup.destroy()
  }


  revokeChoice(preventOpen) {
    this.options.enabled = true;
    this.clearCookieValues();

    this.emit('revokeChoice');

    if (!preventOpen) {
      this.autoOpen()
    }
  }


  /**
   * save current status values
   */
  save() {
    this.emit('save');
    this.setStatuses()
  }

  /**
   *
   * @param categoryName
   * @param status
   */
  setCategoryCookieValue( categoryName, status ) {
    const { name, expiryDays, domain, path, secure } = this.options.cookie;
    if (isValidStatus(status)) {
      const cookieName = name+'_'+categoryName;
      const chosenBefore = statuses.indexOf( getCookie(cookieName) ) >= 0;
      setCookie(cookieName, status, expiryDays, domain, path, secure);
      this.emit( 'statusChanged', cookieName, status, chosenBefore )
    } else {
      this.clearCookieValues()
    }
  }


  /**
   * Set's cookie statuses
   */
  setStatuses() {

    let checkBoxValues = this.popup.getCheckBoxValues();
    console.debug(checkBoxValues);
    Object.keys(checkBoxValues).map(categoryName => {
      this.setCategoryCookieValue(categoryName, checkBoxValues[categoryName] ? statusAllow : statusDismiss)
    })

  }

  /**
   * Get all cookie category statuses from cookie values
   * @return { array<string> } - cookie categories status in order of categories
   */
  getStatusValuesFromCookies() {
    let status = [];
    Object.keys(this.options.categories).map(categoryName => {
      let cookieValue = getCookie(this.options.cookie.name+'_'+categoryName);
      status[categoryName] = isValidStatus(cookieValue) ? cookieValue : undefined
    });
    return status
  }

  /**
   *
   */
  getFilteredStatusValuesFromCookies() {
    let statusValues = this.getStatusValuesFromCookies();
    let filteredStatusValues = {};
    Object.keys(statusValues).map(key => {
      if (statusValues[key] !== undefined) {
        filteredStatusValues[key] = statusValues[key]
      }
    });
    return filteredStatusValues;
  }

  /**
   * Clear all cookie categories statuses
   */
  clearCookieValues() {
    const { name, domain, path } = this.options.cookie;
    Object.keys(this.options.categories).map(categoryName => {
      setCookie(name+'_'+categoryName, '', -1, domain, path)
    })
  }

  /**
   * @returns {boolean}
   */
  canUseCookies() {
    if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK ) {
      return true
    }
    return this.hasAnswered()
  }

  /**
   * Has the user responded to the banner
   * @return { boolean } - true if any cookies have been set
   */
  hasAnswered() {
    return Object.keys(this.getFilteredStatusValuesFromCookies()).length > 0
  }


  // opens the popup if no answer has been given
  autoOpen() {
    const hasAnswered = this.hasAnswered();
    if (!hasAnswered && this.options.enabled) {
      this.popup.open()
    } else if (hasAnswered && this.options.revokable) {
      this.toggleRevokeButton(true)
    }
  }

}

statuses.reduce( ( obj, status ) =>
( Object.defineProperty( CookieConsent, status, {
  get: function () { return status },
  set: function () {},
  enumerable: false,
  writeable: false,
  configurable: false
}), obj ), CookieConsent );