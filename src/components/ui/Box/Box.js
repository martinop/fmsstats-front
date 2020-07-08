import React from 'react';
import cx from 'classnames';
import './Box-styles.css';

function Box(props) {
	const { children, className } = props;
	return (
		<div className={cx("box", className)}>
			{children}
		</div>
	)
}

export default Box;