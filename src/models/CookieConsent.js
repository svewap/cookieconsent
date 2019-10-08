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
  constructor(options = {}) {
    super(defaultOptions, options);


    let answers = this.getFilteredStatusValuesFromCookies();

    this.updateOptionsFromAnswers(answers);

    this.checkLists();

    this.initialization(answers);
  }

  initialization(answers) {

    // if they have already answered
    if (answers.length > 0) {
      this.setDisabled();
      setTimeout(() => this.emit('initialized', this))
    } else if (this.options.legal && this.options.legal.countryCode) {
      this.initializationComplete({code: this.options.legal.countryCode});
    } else if (this.options.location) {
      new Location(this.options.location).locate(this.initializationComplete.bind(this), this.initializationError.bind(this));
    } else {
      this.initializationComplete({});
    }

  }

  initializationComplete(result) {
    if (result.code) {
      this.options = new Legal(this.options.legal).applyLaw(this.options, result.code);
    }
    this.popup = new Popup(this.options, this);
    setTimeout(() => this.emit('initialized', this), 0);

    this.autoOpen();

    this.emitAllowedCategories();
    this.emitDismissedCategories();
  }

  /**
   * Check whitelists and blacklists
   */
  checkLists() {
    // apply blacklist / whitelist
    if (this.options.blacklistPage.includes(location.pathname)) {
      this.setDisabled();
    }
    if (this.options.whitelistPage.includes(location.pathname)) {
      this.setEnabled();
    }
    this.emit('checkLists',this);
  }

  updateOptionsFromAnswers(answers) {
    Object.keys(answers).map(categoryName => {
      this.options.categories[categoryName].status = answers[categoryName];
    });
  }

  initializationError(error) {
    setTimeout(() => this.emit('error', error, new Popup(this.options, this)), 0)
  }

  getCountryLaws(countryCode) {
    return new Legal(this.options.legal).get(countryCode)
  }

  isOpen() {
    return this.popup.isOpen()
  }

  close() {
    return this.popup.close()
  }

  open() {
    return this.popup.open()
  }

  toggleRevokeButton(bool) {
    return this.popup.toggleRevokeButton(bool)
  }

  destroy() {
    return this.popup.destroy();
  }

  setEnabled() {
    this.options.enabled = true;
  }

  setDisabled() {
    this.options.enabled = false;
  }

  isEnabled() {
    return this.options.enabled;
  }

  revokeChoice(preventOpen) {
    this.setEnabled();
    //this.clearCookieValues();

    this.emit('revokeChoice',this);

    if (!preventOpen) {
      this.popup.open();
    }
  }


  /**
   * save current status values
   */
  save() {
    this.emit('save',this);

    let checkBoxValues = this.popup.getCheckBoxValues();

    this.setStatuses(checkBoxValues);

    this.emitAllowedCategories();
    this.emitDismissedCategories();
  }

  /**
   *
   * @param categoryName
   * @param status
   */
  setCategoryCookieValue(categoryName, status) {
    const {name, expiryDays, domain, path, secure} = this.options.cookie;
    if (isValidStatus(status)) {
      const cookieName = name + '_' + categoryName;
      const chosenBefore = statuses.indexOf(getCookie(cookieName)) >= 0;
      setCookie(cookieName, status, expiryDays, domain, path, secure);
      this.emit('statusChanged', categoryName, status, chosenBefore);
    } else {
      this.clearCookieValues();
    }
  }

  /**
   * Set's cookie statuses
   */
  setStatuses(checkBoxValues) {

    Object.keys(checkBoxValues).map(categoryName => {
      this.setCategoryCookieValue(categoryName, checkBoxValues[categoryName]);
    });
    this.updateOptionsFromAnswers(checkBoxValues);
  }

  /**
   * Get all cookie category statuses from cookie values
   * @return { array<string> } - cookie categories status in order of categories
   */
  getCategoryStatusValuesFromCookies() {
    let status = [];
    Object.keys(this.options.categories).map(categoryName => {
      let cookieValue = getCookie(this.options.cookie.name + '_' + categoryName);
      status[categoryName] = isValidStatus(cookieValue) ? cookieValue : undefined;
    });
    return status;
  }

  /**
   *
   */
  getFilteredStatusValuesFromCookies() {
    let statusValues = this.getCategoryStatusValuesFromCookies();
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
    const {name, domain, path} = this.options.cookie;
    Object.keys(this.options.categories).map(categoryName => {
      setCookie(name + '_' + categoryName, '', -1, domain, path);
    })
  }

  /**
   * @returns {boolean}
   */
  canUseCookies() {
    if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK) {
      return true
    }
    return this.hasAnswered();
  }

  /**
   * Has the user responded to the banner
   * @return { boolean } - true if any cookies have been set
   */
  hasAnswered() {
    return Object.keys(this.getFilteredStatusValuesFromCookies()).length > 0;
  }


  /**
   * opens the popup if no answer has been given
   * if answers already given, show revoke button
   */
  autoOpen() {
    if (!this.options.autoOpen) return;
    const hasAnswered = this.hasAnswered();

    if (!hasAnswered && this.isEnabled()) {
      this.popup.open();
    } else if (hasAnswered && this.options.revokable) {
      this.toggleRevokeButton(true);
    }

  }

  /**
   *
   */
  emitAllowedCategories() {
    Object.keys(this.options.categories).map(categoryName => {
      if (this.options.categories[categoryName].status === statusAllow) {
        setTimeout(() => this.emit('allowedCategory', categoryName), 0);
        if (this.options.categories[categoryName].alreadyEnabled === false) {
          this.options.categories[categoryName].alreadyEnabled = true;
          setTimeout(() => this.emit('newAllowedCategory', categoryName), 0);
        }
      }
    });
  }

  emitDismissedCategories() {
    Object.keys(this.options.categories).map(categoryName => {
      if (this.options.categories[categoryName].status === statusDismiss) {
        setTimeout(() => this.emit('dismissedCategory', categoryName), 0);
      }
    });
  }

}

statuses.reduce((obj, status) =>
  (Object.defineProperty(CookieConsent, status, {
    get: function () {
      return status
    },
    set: function () {
    },
    enumerable: false,
    writeable: false,
    configurable: false
  }), obj), CookieConsent);