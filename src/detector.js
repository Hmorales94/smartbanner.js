export default class Detector {

  static platform() {
    let navigator = window.navigator;
    let userAgent = navigator.userAgent;

    if (/Android/i.test(userAgent)){
      return 'android';
    } else {
      // maxTouchPoints is falsely detecting Windows devices with touchscreen as Apple products. This check validates iPad iOS 13+ too.
      const isIpad = !!(navigator.userAgent.match(/(iPad)/) || (navigator.platform === "MacIntel" && typeof navigator.standalone !== "undefined"))
      if ((isIpad) || /iPhone|iPad|iPod/i.test(userAgent)) {
        return 'ios'; 
      }
    }
  }

  static userAgentMatchesRegex(regexString) {
    return new RegExp(regexString).test(window.navigator.userAgent);
  }

  static jQueryMobilePage() {
    return typeof global.$ !== 'undefined' && global.$.mobile !== 'undefined' && document.querySelector('.ui-page') !== null;
  }

  static wrapperElement() {
    let selector = Detector.jQueryMobilePage() ? '.ui-page' : 'html';
    return document.querySelectorAll(selector);
  }

}
