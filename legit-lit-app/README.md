<p align="center">
  <img width="200" src="https://open-wc.org/hero.png"></img>
</p>

## Open-wc Starter App

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)

## Quickstart

To get started:

```sh
npm init @open-wc
# requires node 10 & npm 6 or higher
```

## Scripts

- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `lint` runs the linter for your project

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Composing Templates
[See: Lit Documentation](https://lit.dev/docs/components/rendering/#composing-templates)

### Usage of local modules aka. web component outside of implementing app root

```bash
npm install --save "../hello-world"
```

Path where package.json of web-component is located. Package has to be build via `npm run build` beforehand.

Import local module:
```js
import "hello-world/hello-world.js";
```

Usage of web component (inside of render return):

```html
<hello-world .header=${this.titleText}>
  this should be replaced with web component content
</hello-world>
```