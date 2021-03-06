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
ð¬ð§ [English Version](../README.md)  
ð¨ð³ [ä¸­æç](./README.ch.md)  
ð¯ðµ æ¥æ¬èªç ð

---

> åæç»ã®èµ°ã£ãVueã³ã³ãã¼ãã³ãããã¤ã©ã¤ããã¦ãããç»æçãªéçºãã¼ã«ï¼

ãã®ãã©ã°ã¤ã³ãVueãã­ã¸ã§ã¯ãã«å°å¥ããã°ã[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)ã®ããã«ãåæç»ã®èµ°ã£ãã³ã³ãã¼ãã³ãããã¤ã©ã¤ãã§ããããã«ãªãã¾ãã

## ç®æ¬¡

- [Live Demoð¥](#live-demoð¥)
- [Install](#install)
- [Usage](#usage)
- [Available Options](#available-options)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Live Demoð¥

*ããããæ©ãè¦ããã£ã¦?*  

ç°¡åãªTodoã¢ããªããã¢ã§ä½ãã¾ãã:

<p align="center">
  <img src="../misc/live-demo-screenshot.gif">
</p>

1. [ãã¡ã](https://chrome.google.com/webstore/detail/vue-devtool-flash-updates/fhoioahocakkbcghinblimnenhdnhmnj)ããChromeã®æ¡å¼µãã©ã°ã¤ã³ãã¤ã³ã¹ãã¼ã«ãã¦ãã ããã
1. [ãã¡ã](https://vue-devtool-flash-updates-demo-yuichkun.vercel.app/)ã®ãã¢ãµã¤ããã¯ãªãã¯ã
1. éçºèãã¼ã«ãã `Vue Flash Updates`ã®ã¿ããéãã¦ãæ©è½ãæå¹åãã¾ããã! â¡ï¸â¡ï¸

åæç»ã®èµ°ã£ãã³ã³ãã¼ãã³ãã®ååããã³ã³ã½ã¼ã«ã«ãããã°ã¬ãã«ã§åºåããã¾ãã

## Install

```bash
npm install -D vue-devtool-flash-updates
```

ãããã¯

```bash
yarn add -D vue-devtool-flash-updates
```

## ä½¿ãæ¹

1. [Chromeã¹ãã¢ããæ¡å¼µæ©è½ããã¦ã³ã­ã¼ã](https://chrome.google.com/webstore/detail/vue-devtool-flash-updates/fhoioahocakkbcghinblimnenhdnhmnj).
2. ä½¿ããããã­ã¸ã§ã¯ãã§npmããã±ã¼ã¸ãã¤ã³ã¹ãã¼ã«ããä¸è¨ã®ããã«ã»ããã¢ãããã¾ãã

```js
import FlashUpdates from 'vue-devtool-flash-updates'

Vue.use(FlashUpdates)
```

3. éçºèãã¼ã«ãéãããã©ã°ã¤ã³ãæå¹åãã¾ãã

![screen shot of devtool](../misc/screenshot-dev-window.gif)

**ã­ãç°¡åã§ãããï¼ ð¥**

<br />

---

ã¨ããã§ã  
ãããã®ãªãã¸ããªãå°ãã§ãããã¨æã£ã¦ãããæ¹ã¯ã[GitHub](https://github.com/yuichkun/vue-devtool-flash-updates)ä¸ã§ã¹ã¿ã¼ãæ¼ãã¦ãããã¨ãã£ã¨é å¼µããã¨å±ã¾ãããã®ã§ããã£ããæ¯éãé¡ããã¾ã ðª

---

<br />

## ä½¿ç¨å¯è½ãªãªãã·ã§ã³

åå | å | ããã©ã«ãå¤ | èª¬æ
--- | --- | --- | ---
`logUpdatedComponents` | Boolean | `false` | `true`ã®æ, åæç»ã®èµ°ã£ãã³ã³ãã¼ãã³ãã®ååã*debug*ã¬ãã«ã§ã³ã³ã½ã¼ã«ã«åºåãã¾ãã
`isProduction` | Boolean | `false` | `true`ã®æ, ãã©ã°ã¤ã³ãç¡å¹åãã¾ãã

**ã³ãâ¡ï¸**:  
æ¬çªç°å¢ã§ãã®ãã©ã°ã¤ã³ãä½¿ãããã¨ã¯æã¾ãããªãã®ã§ã`isProduction` ãªãã·ã§ã³ã«çå½å¤ãæ¸¡ãã¦ã³ã³ãã­ã¼ã«ãã¦ãã ããããªã¹ã¹ã¡ã®æ¹æ³ã¯ã`process.env.NODE_ENV === 'production'` ã¨æ¸¡ãã¦ããã¦ãwebpackãªã©ã§ã®ãã³ãã«æã«ç°å¢ã«å¿ãã¦ãã©ã°ã¤ã³ãç¡å¹åãããã¨ã§ãã

```javascript
import FlashPlugin from 'vue-devtool-flash-updates'
Vue.use(FlashPlugin, {
  isProduction: process.env.NODE_ENV === 'production' // æ¬çªç°å¢ã§ã¯ç¡å¹ã«ãªããããä»¥å¤ã§ã¯æå¹ã«ãªã
})
```

## Maintainers

ãããä½ããã°ãè¦ã¤ãããææ¡ãããå ´åã¯ã[ãã¡ã](https://github.com/yuichkun/vue-devtool-flash-updates/issues/new?assignees=&labels=&template=bug_report.md&title=)ãããé¡ããã¾ãã

[@yuichkun](https://github.com/yuichkun)

## Contributing

[the contributing file](../CONTRIBUTING.md)ããç¢ºèªãã ãã!

PRã¯ãã¤ã§ãå¤§æ­è¿ã§ã ð!

READMEããããå ´åã¯ã[standard-readme](https://github.com/RichardLitt/standard-readme)ä»æ§ã«æºæ ããé¡ããã¾ãã

## License

MIT Â© 2021 Yuichi Yogo
