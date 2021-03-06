# babel-preset-collection

A Babel preset, Collection of common plugins.

<p>
    <a href="https://www.npmjs.com/package/babel-preset-collection"><img src="https://img.shields.io/npm/v/babel-preset-collection.svg?style=flat"></a>
    <a href="https://www.npmjs.com/package/babel-preset-collection"><img src="https://img.shields.io/npm/dm/babel-preset-collection.svg?style=flat"></a>
</p>

## Usage

```javascript
npm install babel-preset-collection  --save-dev
```

babel.config.js

```javascript

module.exports = {
    preset: [
        '@babel/preset-env',
        'babel-preset-collection',
        ...
    ]
};
```

## Options

### commonjs

`true` | `false`, defaults to `false`.

Using `transform-modules-commonjs` plugin. 

### runtime

`true` | `false`, defaults to `false`.

Using `plugin-transform-runtime` plugin.

### transformRuntimeOption

`plugin-transform-runtime` plugin's Options, defaults to `{ version: 3, proposals: true }`