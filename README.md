# ov-react-modal-overlay

React ModalOverlay Component

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/ov-react-modal-overlay.svg?style=flat-square
[npm-url]: http://npmjs.org/package/ov-react-modal-overlay
[travis-image]: https://img.shields.io/travis/OnVelocity/react-modal-overlay.svg?style=flat-square
[travis-url]: https://travis-ci.org/OnVelocity/react-modal-overlay
[coveralls-image]: https://img.shields.io/coveralls/OnVelocity/react-modal-overlay.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/OnVelocity/react-modal-overlay?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/OnVelocity/react-modal-overlay.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/OnVelocity/react-modal-overlay
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/ov-react-modal-overlay.svg?style=flat-square
[download-url]: https://npmjs.org/package/ov-react-modal-overlay


## install

[![ov-react-modal-overlay](https://nodei.co/npm/ov-react-modal-overlay.png)](https://npmjs.org/package/ov-react-modal-overlay)


## Browser Support

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 8+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


## Example

http://localhost:8000/examples/

online example: http://OnVelocity.github.io/react-modal-overlay/


## Features

* support ie8,ie8+,chrome,firefox,safari


## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import ModalOverlay from 'ov-react-modal-overlay'
ReactDOM.render(<ModalOverlay />, container);
```


## API


### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>className</td>
          <td>String</td>
          <td></td>
          <td>additional css class of root dom node</td>
        </tr>
        <tr>
          <td>onClick</td>
          <td>func</td>
          <td></td>
          <td>callback when click on modal overlay detected</td>
        </tr>
    </tbody>
</table>


## Development

```
npm install
npm start
```


## Test Case

http://localhost:8000/tests/runner.html?coverage


## Coverage

http://localhost:8000/node_modules/rc-server/node_modules/node-jscover/lib/front-end/jscoverage.html?w=http://localhost:8000/tests/runner.html?coverage


## License

ov-react-modal-overlay is released under the MIT license.

