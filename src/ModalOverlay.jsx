'use strict'

import React from 'react';
import ClassNames from 'classnames'

const ModalOverlay = props => {
	const {className, otherProps} = props;
	return (
		<div className={ClassNames("ov-react-modal-overlay", className)} {...otherProps}>ModalOverlay component</div>
	);
}

ModalOverlay.componentWillMount = () => console.log('mounted', this);

export default ModalOverlay;
