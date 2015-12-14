'use strict'

import React from 'react'
import ClassNames from 'classnames'
import 'ov-react-modal-overlay/assets/index.less'

const ModalOverlay = props => {
	const {className, otherProps} = props
	return (
		<div className={ClassNames('ov-react-modal-overlay', className)} {...otherProps} onClick={props.onClick}>
			<div className='ov-react-modal-overlay-background'></div>
			<div className='ov-react-modal-overlay-foreground'>
				{props.children}
			</div>
		</div>
	)
}

ModalOverlay.propTypes = {
	className: React.PropTypes.string
}

export default ModalOverlay
