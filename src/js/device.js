/**
Name: device.js
Description: Browser checker on JavaScript.
Version: 0.1.3
Last Updated: 2018-11-18

Author: Kohtaroh Nakamura
GitHub: https://github.com/kohtaroh-nakamura/
License: MIT License.
http://opensource.org/licenses/mit-license.php
*/

var DEVICE = DEVICE || {};
DEVICE = {
  isSp: false,
  isSP: false,
  isIos: false,
  isAndroid: false,
  isPc: false,
  isPC: false,
  isTab: false,
  isTAB: false,
  isChrome: false,
  isIe11: false,
  isIE11: false,
  isEdge: false,
  isSafari: false,
  isFirefox: false,
  version: null,
};

(function () {

  'use strict';

  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('ipod') != -1 ||
    ua.indexOf('iphone') != -1) {
    DEVICE.isSp = true;
    DEVICE.isSP = true;
    DEVICE.isIos = true;
    DEVICE.version = serchUa(ua, 'version');
  } else if (ua.indexOf('ipad') != -1) {
    DEVICE.isTab = true;
    DEVICE.isTAB = true;
    DEVICE.isIos = true;
    DEVICE.version = serchUa(ua, 'version');
  } else if (ua.indexOf('android') != -1 && ua.indexOf('mobile') != -1) {
    DEVICE.isSp = true;
    DEVICE.isSP = true;
    DEVICE.isAndroid = true;
    DEVICE.version = serchUa(ua, 'chrome');
  } else if (ua.indexOf('android') != -1) {
    DEVICE.isTab = true;
    DEVICE.isTAB = true;
    DEVICE.isAndroid = true;
    DEVICE.version = serchUa(ua, 'chrome');
  } else {
    DEVICE.isPc = true;
    DEVICE.isPC = true;
    if (ua.indexOf('edge') != -1) {
      DEVICE.isEdge = true;
      DEVICE.version = serchUa(ua, 'edge');
    } else if (ua.indexOf('trident/7') != -1) {
      DEVICE.isIe11 = true;
      DEVICE.isIE11 = true;
    } else if (ua.indexOf('chrome') != -1) {
      DEVICE.isChrome = true;
      DEVICE.version = serchUa(ua, 'chrome');
    } else if (ua.indexOf('safari') != -1) {
      DEVICE.isSafari = true;
      DEVICE.version = serchUa(ua, 'version');
    } else if (ua.indexOf('firefox') != -1) {
      DEVICE.isFirefox = true;
      DEVICE.version = serchUa(ua, 'firefox');
    }
  }
  if (document.body) {
    addClassBody(DEVICE);
    addClassBody(DEVICE.version, 'ver-');
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      addClassBody(DEVICE);
      addClassBody(DEVICE.version, 'ver-');
    });
  }

  function serchUa(ua, word) {
    var regexp = new RegExp(word + '\/([\\d|\\.]+)');
    if (ua.match(regexp)) {
      return ua.match(regexp)[1];
    }
  }

  function addClassBody(obj, prefix) {
    var body = document.getElementsByTagName('body')[0];
    if (typeof (obj) === 'object') {
      for (var key in obj) {
        if (obj[key] && key !== 'version') body.classList.add(key);
      }
    }
    if (typeof (obj) === 'string') {
      body.classList.add(prefix + obj);
    }
  }

})();