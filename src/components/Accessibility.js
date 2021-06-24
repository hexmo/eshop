import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSearchMinus,
	faSearchPlus,
	faMoon,
	faSun,
	faUniversalAccess,
	faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import FadeIn from 'react-fade-in';

const Accessibility = () => {

	//invertion
	const head = document.getElementsByTagName('head')[0];
	const style = document.createElement('style');
	// const body = document.getElementsByTagName('body')[0];
	// console.log('Your screen resolution is: ' + window.screen.availWidth);
	// const viewport_meta = document.getElementById('viewport-meta');

	// states
	const [isInverted, setIsInverted] = useState(false);
	const [isMenuOn, setIsMenuOn] = useState(false);
	// const [zoomLevel, setZoomLevel] = useState(16);
	const [zoomLevel, setZoomLevel] = useState(1.0);

	//menu change handler
	const accessibilityHandler = () => {
		if (isMenuOn) {
		}

		setIsMenuOn(!isMenuOn);
	};


	// zoom handler
	const reduceZoom = () => {
		setZoomLevel(zoomLevel - 0.05);
		document.body.style.zoom = zoomLevel;
	};

	const addZoom = () => {
		setZoomLevel(zoomLevel + 0.05);
		document.body.style.zoom = zoomLevel;
	};

	return (
		// https://stackoverflow.com/questions/45989299/react-conditional-rendering-of-multiple-child-components/48777961
		<div className='accessibility'>
			<FadeIn className='accessibility-options'>
				{isMenuOn
					? [
							<FontAwesomeIcon key={1} icon={faSearchPlus} onClick={addZoom} />,
							<FontAwesomeIcon
								key={2}
								icon={faSearchMinus}
								onClick={reduceZoom}
							/>,
					  ]
					: ''}
			</FadeIn>
			{isMenuOn ? (
				<FontAwesomeIcon
					key={0}
					icon={faTimesCircle}
					onClick={accessibilityHandler}
				/>
			) : (
				<FontAwesomeIcon
					key={0}
					icon={faUniversalAccess}
					onClick={accessibilityHandler}
				/>
			)}
		</div>
	);
};

export default Accessibility;
