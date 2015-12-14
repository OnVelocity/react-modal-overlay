'use strict'

import React from 'react'
import ClassNames from 'classnames'

const ModalOverlay = props => {
	const {className, otherProps} = props
	return (
		<div className={ClassNames('ov-react-modal-overlay', className)} {...otherProps} onClick={props.onClick}>
			<div className='ov-react-modal-overlay-background'></div>
			<div className='ov-react-modal-overlay-foreground'>
				This is the ModalOverlay component!
			</div>
		</div>

	)
}

ModalOverlay.propTypes = {
	className: React.PropTypes.string
}

export default ModalOverlay
