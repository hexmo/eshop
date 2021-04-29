import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';

const Product = ({ product }) => {
	const [isPopped, setIsPopped] = useState(false);
	//handlers
	// https://stackoverflow.com/questions/62696245/how-to-stop-propagation-on-link-elements-from-react-router-dom
	const addCartHandler = (e) => {
		e.preventDefault();
		document.body.style.overflow = 'hidden';
		setIsPopped(true);
	};

	return (
		<Link to={'/' + product.type + '/' + product.id}>
			<div className='product-card'>
				<img src={product.images} alt={product.name} />
				<h1>{product.name}</h1>
				<h3>{'Rs. ' + product.price}</h3>
				<button onClick={addCartHandler}>Add to Cart</button>
			</div>
			{isPopped ? <Popup setIsPopped={setIsPopped} /> : ''}
		</Link>
	);
};

export default Product;
