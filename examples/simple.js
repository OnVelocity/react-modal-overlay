/*eslint-disable no-alert, no-console */
// use jsx to render html, do not modify simple.html

//import React from 'react'
import ReactDOM from 'react-dom'
import 'ov-react-modal-overlay/assets/index.less'
import ModalOverlay from 'ov-react-modal-overlay'

ReactDOM.render(<ModalOverlay onClick={event => console.log(event)} />, document.getElementById('__react-content'))
