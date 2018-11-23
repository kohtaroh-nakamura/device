# device.js

## 機能概要
ブラウザのUserAgentを判定し、
bodyタグにブラウザにclassを付与します。  
また、JavaScriptのグローバル空間に*DEVICE*オブジェクトを作ります。

## 使い方
*device.min.js*をhtmlで読み込んでください。  
他のライブラリには依存しません。  
挿入箇所はbody開きタグ直後やheadタグ内やがオススメです。

### CSSサンプル
PCのみ表示したいものには「.only-pc」、
SPのみで表示したいものには「.only-sp」とするサンプルです。

    .only-pc,
    .only-sp {
        display: none;
    }

    body.isPc .only-pc {
        display: block;
    }

    body.isSp .only-sp {
        display: block;
    }

### JSサンプル
    if(DEVICE.isIe11) {
        // for only IE11
        alert('Your browser is IE11!');
    }

## 付与されるclass名、DEVICEオブジェクトメンバー
- isSp
- isSP
- isIos
- isAndroid
- isPc
- isPC
- isChrome
- isMsIe
- isIe10
- isIe11
- isEdge
- isSafari
- isFirefox

## 使用例
- 要素をデバイスごとに出し分け
- *Google Play*と*App Store*のアプリダウンロードボタンをAndroidとiPhoneで自動的に選択
- JSでのIE11の例外処理

## ボーナス
DEVICEオブジェクトに*version*メンバーが居ますが、versionを判定できないものも多いので、特定のバグに対して使えたらラッキーです。

----

# device.js

## Overview
Determine the UserAgent of the browser,
Give the browser a class on the body tag.  
Also create a *DEVICE* object in the global space of JavaScript.  

## How to use
Please load *device.min.js* with html.  
It does not depend on other libraries.  
Immediately after opening the body opening tag and within the head tag are recommended for the insertion place.  

### CSS Sample
".Only-pc" for what you want to display PC only,
For samples that you want to display with only SP, this is a sample to be ".only-sp".  

    .only-pc,
    .only-sp {
        display: none;
    }

    body.isPc .only-pc {
        display: block;
    }

    body.isSp .only-sp {
        display: block;
    }

### JS sample
    if (DEVICE.isIe 11) {
        // for only IE 11
        alert ('Your browser is IE 11!');
    }

## class name given, DEVICE object member
- isSp
- isSP
- isIos
- isAndroid
- isPc
- isPC
- isChrome
- isMsIe
- isIe10
- isIe11
- isEdge
- isSafari
- isFirefox

## Example of use
- Separate elements by device
- Automatically select app download button on *Google Play* and *App Store* with Android and iPhone
- Exception handling of IE 11 in JS

## Bonus
There are *version* members in the DEVICE object, but since there are many things that can not determine the version, it is lucky to use it for a specific bug.  
