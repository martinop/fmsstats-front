import React from 'react';
import cx from 'classnames';
import './Box-styles.css';

function Box(props) {
	const { children, borderer, className } = props;
	return (
		<div className={cx("box", { borderer }, className)}>
			{children}
		</div>
	)
}

export default Box;