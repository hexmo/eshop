import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FadeIn from 'react-fade-in';

// images
import iMac from '../images/imac.png';
import tv from '../images/tv.png';
import airtag from '../images/airtag.png';

const Slider = () => {
	//slider time in miliseconds
	const sliderTime = 5000;
	//slider data
	const sliderData = [
		{
			title: 'Up Coming',
			productName: 'M1 iMac',
			image: iMac,
		},
		{
			title: 'Latest',
			productName: 'Air Tag',
			image: airtag,
		},
		{
			title: 'New Arrival',
			productName: 'Apple TV',
			image: tv,
		},
	];

	const totalItems = sliderData.length - 1;
	// console.log('Total items: ' + totalItems);

	//state hook to store the current slide
	const [currentSlide, setCurrentSlide] = useState(0);

	// console.log('Init Current slide' + currentSlide);

	// useEffect hook
	// This will fire only on mount.
	useEffect(() => {
		const interval = setInterval(() => {
			if (currentSlide === totalItems) {
				setCurrentSlide(0);
			} else {
				setCurrentSlide(currentSlide + 1);
			}
		}, sliderTime);

		return () => clearInterval(interval);
	});

	return (
		<div className='slider'>
			<div className='slider-description'>
				<FadeIn>
					<h2 className='title-name'>{sliderData[currentSlide].title}</h2>
					<h1 className='product-name'>
						{sliderData[currentSlide].productName}
					</h1>
					<button>
						View More <FontAwesomeIcon icon={faArrowRight} />
					</button>
				</FadeIn>
			</div>
			<div className='slider-images'>
				<img
					src={sliderData[currentSlide].image}
					alt={sliderData[currentSlide].productName}
				/>
			</div>
		</div>
	);
};

export default Slider;
