import React from 'react';
import './Box-styles.css';

function Box(props) {
	const { children } = props;
	return (
		<div className="box">
			{children}
		</div>
	)
}

export default Box;