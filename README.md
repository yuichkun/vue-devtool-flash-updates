# vue-devtool-flash-updates

<p align="center">
  <img width="256" height="221" src="./misc/vue-flash-updates.png">
</p>

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![standard-readme compliant](https://img.shields.io/npm/dw/vue-devtool-flash-updates?style=flat-square)](https://img.shields.io/npm/dw/vue-devtool-flash-updates?style=flat-square)

> A handy devtool that enables highlighting re-rendered components!

This plugin enables Vue projects to quickly identify performance issues by highlighting re-rendered components, just like how [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) does it.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

## Install

```bash
npm install -D vue-devtool-flash-updates
```

or

```bash
yarn add -D vue-devtool-flash-updates
```

## Usage

<!-- TODO: add link here -->
1. Download the extension from the Chrome Web Store.
2. Setup the plugin in your desired project.

```js
import FlashUpdates from 'vue-devtool-flash-updates'

Vue.use(FlashUpdates)
```

3. Open the Chrome Dev Tools and enable the plugin.

![screen shot of devtool](./misc/screenshot-dev-window.gif)

**It's that easy! 🔥**

## Maintainers

[@yuichkun](https://github.com/yuichkun)

## Contributing

See [the contributing file](CONTRIBUTING.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2021 Yuichi Yogo
