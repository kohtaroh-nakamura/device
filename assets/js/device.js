/* 
Name: device.js
Version: 0.1
Last Updated: 2018-02-20
Author: Kohtaroh Nakamura
GitHub: https://github.com/kohtaroh-nakamura/device
*/

var ARGENT = ARGENT || {};
ARGENT = {
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
    ARGENT.device.isSp = true;
    ARGENT.device.isIos = true;
    ARGENT.version = serchUa(ua, 'version');
  } else if (ua.indexOf('android') != -1) {
    ARGENT.device.isSp = true;
    ARGENT.device.isAndroid = true;
    ARGENT.version = serchUa(ua, 'chrome');
  } else {
    ARGENT.device.isPc = true;
    if (ua.indexOf('edge') != -1) {
      ARGENT.device.isEdge = true;
      ARGENT.version = serchUa(ua, 'edge');
    } else if (ua.indexOf('trident/7') != -1) {
      ARGENT.device.isIe11 = true;
    } else if (ua.indexOf('chrome') != -1) {
      ARGENT.device.isChrome = true;
      ARGENT.version = serchUa(ua, 'chrome');
    } else if (ua.indexOf('safari') != -1) {
      ARGENT.device.isSafari = true;
      ARGENT.version = serchUa(ua, 'version');
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    addClassBody(ARGENT.device);
    addClassBody(ARGENT.version, 'ver-');
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