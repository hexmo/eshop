import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookF,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<footer>
			<div className='fmain'>
				<div>
					<h3 className='footer-logo'>ESHOP</h3>
					<h4>
						Naxal, Kathmandu <br />
						Nepal
					</h4>
					<h4>Sun - Fri</h4>
					<h4>11:00AM - 7:00PM</h4>
				</div>
				<div>
					<h3>Products</h3>
					<h4>Mac</h4>
					<h4>iPhone</h4>
					<h4>iPad</h4>
					<h4>Watch</h4>
				</div>
				<div>
					<h3>Get in Touch</h3>
					<h4>+977 987-123456</h4>
					<h4>hello@eshop.com.np</h4>
					<h4 className='social-link'>
						<FontAwesomeIcon icon={faTwitter} />
						&nbsp;&nbsp;&nbsp;&nbsp;
						<FontAwesomeIcon icon={faFacebookF} />
						&nbsp;&nbsp;&nbsp;&nbsp;
						<FontAwesomeIcon icon={faInstagram} />
					</h4>
				</div>
			</div>
			<div className='copy'>
				<h4>&copy; 2021 - eshop by Mohit Acharya</h4>
			</div>
		</footer>
	);
};

export default Footer;
