# vue-devtool-flash-updates

<p align="center">
  <img src="../misc/vue-flash-updates.png">
</p>

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package size](https://img.shields.io/bundlephobia/min/vue-devtool-flash-updates?style=flat-square)](https://img.shields.io/bundlephobia/min/vue-devtool-flash-updates?style=flat-square)
[![downloads](https://img.shields.io/npm/dw/vue-devtool-flash-updates?style=flat-square)](https://img.shields.io/npm/dw/vue-devtool-flash-updates?style=flat-square)
[![release](https://img.shields.io/github/v/release/yuichkun/vue-devtool-flash-updates?style=flat-square)](https://img.shields.io/github/v/release/yuichkun/vue-devtool-flash-updates?style=flat-square)
[![chrome web store](https://img.shields.io/chrome-web-store/users/fhoioahocakkbcghinblimnenhdnhmnj?style=flat-square)](https://chrome.google.com/webstore/detail/vue-devtool-flash-updates/fhoioahocakkbcghinblimnenhdnhmnj)

---
🇬🇧 [English Version](../README.md)  
🇨🇳 [中文版](./translations/README.ch.md)  
🇯🇵 日本語版 👈

---

> 再描画の走ったVueコンポーネントをハイライトしてくれる画期的な開発ツール！

このプラグインをVueプロジェクトに導入すれば、[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)のように、再描画の走ったコンポーネントをハイライトできるようになります。

## 目次

- [Live Demo🔥](#live-demo🔥)
- [Install](#install)
- [Usage](#usage)
- [Available Options](#available-options)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Live Demo🔥

*いいから早く見せろって?*  

簡単なTodoアプリをデモで作りました:

<p align="center">
  <img src="../misc/live-demo-screenshot.gif">
</p>

1. [こちら](https://chrome.google.com/webstore/detail/vue-devtool-flash-updates/fhoioahocakkbcghinblimnenhdnhmnj)からChromeの拡張プラグインをインストールしてください。
1. [こちら](https://vue-devtool-flash-updates-demo-yuichkun.vercel.app/)のデモサイトをクリック。
1. 開発者ツールから `Vue Flash Updates`のタブを開いて、機能を有効化しましょう! ⚡️⚡️

再描画の走ったコンポーネントの名前も、コンソールにデバッグレベルで出力されます。

## Install

```bash
npm install -D vue-devtool-flash-updates
```

あるいは

```bash
yarn add -D vue-devtool-flash-updates
```

## 使い方

1. [Chromeストアから拡張機能をダウンロード](https://chrome.google.com/webstore/detail/vue-devtool-flash-updates/fhoioahocakkbcghinblimnenhdnhmnj).
2. 使いたいプロジェクトでnpmパッケージをインストールし、下記のようにセットアップします。

```js
import FlashUpdates from 'vue-devtool-flash-updates'

Vue.use(FlashUpdates)
```

3. 開発者ツールを開き、プラグインを有効化します。

![screen shot of devtool](../misc/screenshot-dev-window.gif)

**ね、簡単でしょう？ 🔥**

<br />

---

ところで、  
もしこのリポジトリを少しでもいいと思ってくれた方は、[GitHub](https://github.com/yuichkun/vue-devtool-flash-updates)上でスターを押してくれるともっと頑張ろうと励まされるのでよかったら是非お願いします 💪

---

<br />

## 使用可能なオプション

名前 | 型 | デフォルト値 | 説明
--- | --- | --- | ---
`logUpdatedComponents` | Boolean | `false` | `true`の時, 再描画の走ったコンポーネントの名前を*debug*レベルでコンソールに出力します。
`isProduction` | Boolean | `false` | `true`の時, プラグインを無効化します。

**コツ⚡️**:  
本番環境でこのプラグインが使えることは望ましくないので、`isProduction` オプションに真偽値を渡してコントロールしてください。オススメの方法は、`process.env.NODE_ENV === 'production'` と渡しておいて、webpackなどでのバンドル時に環境に応じてプラグインを無効化することです。

```javascript
import FlashPlugin from 'vue-devtool-flash-updates'
Vue.use(FlashPlugin, {
  isProduction: process.env.NODE_ENV === 'production' // 本番環境では無効になり、それ以外では有効になる
})
```

## Maintainers

もしも何かバグを見つけたり提案がある場合は、[こちら](https://github.com/yuichkun/vue-devtool-flash-updates/issues/new?assignees=&labels=&template=bug_report.md&title=)からお願いします。

[@yuichkun](https://github.com/yuichkun)

## Contributing

[the contributing file](../CONTRIBUTING.md)をご確認ください!

PRはいつでも大歓迎です 😎!

READMEをいじる場合は、[standard-readme](https://github.com/RichardLitt/standard-readme)仕様に準拠をお願いします。

## License

MIT © 2021 Yuichi Yogo
