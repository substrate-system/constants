# Constants
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/constants/nodejs.yml?style=flat-square)](https://github.com/substrate-system/constants/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/constants?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/constants)](https://packagephobia.com/result?p=@substrate-system/constants)
[![gzip size](https://img.shields.io/bundlephobia/minzip/@substrate-system/constants?style=flat-square)](https://bundlephobia.com/package/@substrate-system/constants)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


Constants for the frontend.

<details><summary><h2>Contents</h2></summary>
<!-- toc -->
</details>

## Install

```sh
npm i -S @substrate-system/constants
```

## API

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@substrate-system/constants'
```

### Common JS
```js
require('@substrate-system/constants')
```

## Use

### JS
```js
import {
    EM_DASH,
    EN_DASH,
    NBSP,
    ELLIPSIS 
} from '@namespace/constants'
```

### pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@namespace/constants/dist/module.min.js ./public
```

#### HTML
```html
<script type="module" src="./module.min.js"></script>
```
