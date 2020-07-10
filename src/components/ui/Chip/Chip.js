import React from 'react';
import './Chip-styles.css';

function Chip(props) {
	const { text, circleText } = props;
	return (
		<div className="chip">
			{circleText && <div className="chip__circle">{circleText}</div>}
			<span className="chip__text">{text}</span>
		</div>
	)
}

export default Chip;