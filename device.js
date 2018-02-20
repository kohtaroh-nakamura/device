/* 
Name: device.js
Version: 0.1
Last Updated: 2018-02-20
Author: Kohtaroh Nakamura
GitHub: https://github.com/kohtaroh-nakamura/device
*/

var DEVICE = DEVICE || {};
DEVICE = {
  device: {
    isSp: false,
    isIos: false,
    isAndroid: false,
    isPc: false,
    isChrome: false,
    isIe11: false,
    isEdge: false,
    isSafari: false,
  },
  version: null,
};

(function() {
  'use strict';
  var ua = navigator.userAgent.toLowerCase();
  var ver = navigator.appVersion.toLowerCase();
  if (ua.indexOf('ipad') != -1 ||
    ua.indexOf('ipod') != -1 ||
    ua.indexOf('iphone') != -1) {
    DEVICE.device.isSp = true;
    DEVICE.device.isIos = true;
    DEVICE.version = serchUa(ua, 'version');
  } else if (ua.indexOf('android') != -1) {
    DEVICE.device.isSp = true;
    DEVICE.device.isAndroid = true;
    DEVICE.version = serchUa(ua, 'chrome');
  } else {
    DEVICE.device.isPc = true;
    if (ua.indexOf('edge') != -1) {
      DEVICE.device.isEdge = true;
      DEVICE.version = serchUa(ua, 'edge');
    } else if (ua.indexOf('trident/7') != -1) {
      DEVICE.device.isIe11 = true;
    } else if (ua.indexOf('chrome') != -1) {
      DEVICE.device.isChrome = true;
      DEVICE.version = serchUa(ua, 'chrome');
    } else if (ua.indexOf('safari') != -1) {
      DEVICE.device.isSafari = true;
      DEVICE.version = serchUa(ua, 'version');
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    addClassBody(DEVICE.device);
    addClassBody(DEVICE.version, 'ver-');
  });

  function serchUa(ua, word) {
    var regexp = new RegExp(word + '\/([\\d|\\.]+)');
    if (ua.match(regexp)) {
      return ua.match(regexp)[1];
    }
  }

  function addClassBody(obj, prefix) {
    var body = document.getElementsByTagName('body')[0];
    if (typeof(obj) === 'object') {
      for (var key in obj) {
        if (obj[key]) body.classList.add(key);
      }
    }
    if (typeof(obj) === 'string') {
      body.classList.add(prefix + obj);
    }
  }

})();