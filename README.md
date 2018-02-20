# device.js

## 機能概要
ブラウザのUserAgentを判定し、
bodyタグにブラウザにclassを付与します。  
また、JavaScriptのグローバル空間に*DEVICE*オブジェクトを作ります。

## 使い方
*device.js*をhtmlで読み込んでください。  
他のライブラリには依存しません。  
挿入箇所はheadタグ内やbody閉じタグ直前がオススメです。

### CSSサンプル
サンプルとして*.js-device*というclassを設定して出し分けしてみます。


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
- isIos
- isAndroid
- isPc
- isChrome
- isIe11
- isEdge
- isSafari

## 使用例
- 要素をデバイスごとに出し分け
- *Google Play*と*App Store*のアプリダウンロードボタンをAndroidとiPhoneで自動的に選択
- JSでのIE11の例外処理

## おまけ
DEVICEオブジェクトに*version*メンバーが居ますが、versionを判定できないものも多いので、特定のバグに対して使えたらラッキーです。

