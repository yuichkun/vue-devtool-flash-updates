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
🇨🇳 中文版 👈  
🇯🇵 日本語版(WIP)

---

> 一个方便的工具，可以突出显示重新渲染的组件！

这个插件使Vue项目能够通过突出显示重新渲染的组件来快速发现性能问题，就像[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)所做的那样。

## 目录

- [现场演示🔥](#现场演示🔥)
- [安装](#安装)
- [用法](#用法)
- [可用的选项](#可用的选项)
- [捐赠者](#捐赠者)
- [贡献方法](#贡献方法)
- [许可证](#许可证)

## 现场演示🔥

*想快速看到它的性能吗？*  

下面是一个启用了插件的繁琐的模拟todo app。

<p align="center">
  <img src="../misc/live-demo-screenshot.gif">
</p>

1. [在此](https://chrome.google.com/webstore/detail/vue-devtool-flash-updates/fhoioahocakkbcghinblimnenhdnhmnj)下载Chrome扩展程序。
1. [在此](https://vue-devtool-flash-updates-demo-yuichkun.vercel.app/)访问演示网站。
1. 在devtool面板上，选择 "Vue Flash Updates "选项卡，并启用能力!⚡️⚡️

你也会看到更新后的组件名称被打印在控制台中!

## 安装

```bash
npm install -D vue-devtool-flash-updates
```

或者

```bash
yarn add -D vue-devtool-flash-updates
```

## 用法

1. [从Chrome Web Store下载扩展](https://chrome.google.com/webstore/detail/vue-devtool-flash-updates/fhoioahocakkbcghinblimnenhdnhmnj).
2. 安装软件包并在所需的项目中设置该插件。

```js
import FlashUpdates from 'vue-devtool-flash-updates'

Vue.use(FlashUpdates)
```

3. 打开Chrome Developer Tools，启用该插件。

![screen shot of devtool](../misc/screenshot-dev-window.gif)

**就是这么简单的 🔥**

<br />

---

对了，
如果你喜欢这个插件，在[GitHub](https://github.com/yuichkun/vue-devtool-flash-updates)上给这个repo加星，**真的**会提高我继续改进它的动力💪

---

<br />

## 可用的选项

名称 | 类型 | 默认值 | 描述
--- | --- | --- | ---
`logUpdatedComponents` | 布尔值 | `false` | `true`的时候, 在控制台中以*debug*级别打印更新的组件名称。
`isProduction` | 布尔值 | `false` | `true`的时候, 停止插件.

**窍门⚡️**:  
 为了防止随机用户在production网站上使用该插件，建议你为`isProduction`选项传递一个布尔值。  
 推荐的方法是将 `process.env.NODE_ENV === 'production'`传递给插件，并让模块捆绑器如webpack来转换环境变量。

```javascript
import FlashPlugin from 'vue-devtool-flash-updates'
Vue.use(FlashPlugin, {
  isProduction: process.env.NODE_ENV === 'production' // 该插件在production环境中停止，在其他环境中动作。
})
```

## 捐赠者

如果你发现任何错误或有任何建议，请提交一个issue[这里](https://github.com/yuichkun/vue-devtool-flash-updates/issues/new?assignees=&labels=&template=bug_report.md&title=)

[@yuichkun](https://github.com/yuichkun)

## Contributing

看到 [the contributing file](../CONTRIBUTING.md)!

欢迎大家的PRs😎!

小提示：如果编辑README，请符合[standard-readme](https://github.com/RichardLitt/standard-readme)的规范。

## 许可证

MIT © 2021 Yuichi Yogo
