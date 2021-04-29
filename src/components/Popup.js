import React from 'react';

const Popup = ({ setIsPopped }) => {
	// close handler
	const closeAlert = (e) => {
		document.body.style.overflow = 'visible';
		setIsPopped(false);
		e.preventDefault();
	};

	return (
		<div className='popup'>
			<h2>Successfully added product to Cart.</h2>
			<button onClick={closeAlert}>OK</button>
		</div>
	);
};

export default Popup;
