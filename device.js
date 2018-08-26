/**
Name: device.js
Description: Browser checker on JavaScript.
Version: 0.1.1
Last Updated: 2018-08-26
Author: Kohtaroh Nakamura
Copyright: 2018 Kohtaroh Nakamura
GitHub: https://github.com/kohtaroh-nakamura/device
License: MIT License.
http://opensource.org/licenses/mit-license.php
*/

var DEVICE = DEVICE || {};
DEVICE = {
  device: {
    isSp: false,
    isSP: false,
    isIos: false,
    isAndroid: false,
    isPc: false,
    isPC: false,
    isChrome: false,
    isIe11: false,
    isIE11: false,
    isEdge: false,
    isSafari: false,
    isFirefox: false,
  },
  version: null,
};

(function () {
  'use strict';
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('ipad') != -1 ||
    ua.indexOf('ipod') != -1 ||
    ua.indexOf('iphone') != -1) {
    DEVICE.device.isSp = true;
    DEVICE.device.isSP = true;
    DEVICE.device.isIos = true;
    DEVICE.version = serchUa(ua, 'version');
  } else if (ua.indexOf('android') != -1) {
    DEVICE.device.isSp = true;
    DEVICE.device.isSP = true;
    DEVICE.device.isAndroid = true;
    DEVICE.version = serchUa(ua, 'chrome');
  } else {
    DEVICE.device.isPc = true;
    DEVICE.device.isPC = true;
    if (ua.indexOf('edge') != -1) {
      DEVICE.device.isEdge = true;
      DEVICE.version = serchUa(ua, 'edge');
    } else if (ua.indexOf('trident/7') != -1) {
      DEVICE.device.isIe11 = true;
      DEVICE.device.isIE11 = true;
    } else if (ua.indexOf('chrome') != -1) {
      DEVICE.device.isChrome = true;
      DEVICE.version = serchUa(ua, 'chrome');
    } else if (ua.indexOf('safari') != -1) {
      DEVICE.device.isSafari = true;
      DEVICE.version = serchUa(ua, 'version');
    } else if (ua.indexOf('firefox') != -1) {
      DEVICE.device.isFirefox = true;
      DEVICE.version = serchUa(ua, 'firefox');
    }
  }
  if (document.body) {
    addClassBody(DEVICE.device);
    addClassBody(DEVICE.version, 'ver-');
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      addClassBody(DEVICE.device);
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
        if (obj[key]) body.classList.add(key);
      }
    }
    if (typeof (obj) === 'string') {
      body.classList.add(prefix + obj);
    }
  }

})();