# panto-options
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Options object for panto.

```js
const PantoOptions = require('panto-options');

const options = new PantoOptions({cwd: '.'});

options.extend({cwd: 'cwd', list: 'all'});

options.set('current', 'sub');

options.get('list')// 'all'
options.get('absense') // undefined
options.get('absense', 'foo') // 'foo'
options.get() // {cwd: 'cwd', list: 'all', current: 'sub'}

options.rm('cwd') //true
```

[npm-url]: https://npmjs.org/package/panto-options
[downloads-image]: http://img.shields.io/npm/dm/panto-options.svg
[npm-image]: http://img.shields.io/npm/v/panto-options.svg
[travis-url]: https://travis-ci.org/pantojs/panto-options
[travis-image]: http://img.shields.io/travis/pantojs/panto-options.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-options
[david-dm-image]:https://david-dm.org/pantojs/panto-options.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-options#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-options/dev-status.svg