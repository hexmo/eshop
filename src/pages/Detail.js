import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Trend from '../components/Trend';
import Popup from '../components/Popup';

const Detail = ({ productsList }) => {
	const [isPopped2, setIsPopped2] = useState(false);

	// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
	const getRandom = (arr, n) => {
		var result = new Array(n),
			len = arr.length,
			taken = new Array(len);
		if (n > len)
			throw new RangeError('getRandom: more elements taken than available');
		while (n--) {
			var x = Math.floor(Math.random() * len);
			result[n] = arr[x in taken ? taken[x] : x];
			taken[x] = --len in taken ? taken[len] : len;
		}
		return result;
	};

	// useEffect to scroll to top
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	// https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916
	//assigning location variable
	const location = useLocation();
	//destructuring pathname from location
	const { pathname } = location;
	//Javascript split method to get the name of the path in array
	const splitLocation = pathname.split('/');

	const product = productsList[splitLocation[2]];

	//getting poduct type
	const type = splitLocation[1];

	//getting such products
	const similarProducts = productsList.filter((product) => {
		return product.type === type;
	});

	//getting only 4 products out of such products
	const slicedSimilarProducts = getRandom(similarProducts, 4);

	//add to cart handler
	const addCartHandler2 = (e) => {
		e.preventDefault();
		document.body.style.overflow = 'hidden';
		setIsPopped2(true);
	};

	return (
		<>
			<div className='product-detail'>
				<div className='img-holder'>
					<img src={product.images} alt={product.name} />
				</div>
				<div className='product-description'>
					<div className='bread-crumbs'>
						<h3>
							<Link to='/'>Home</Link>&nbsp;&nbsp;&#10093;&nbsp;&nbsp;
							<Link to={'/' + product.type}>{product.type}</Link>
							&nbsp;&nbsp;&#10093;&nbsp;&nbsp;
							{product.name}
						</h3>
					</div>
					<h2>{product.name}</h2>
					<h3>{'Rs. ' + product.price}</h3>
					<h4>{product.description}</h4>
					<h4>
						Category:&nbsp;<Link to={'/' + product.type}>{product.type}</Link>
					</h4>
					<button onClick={addCartHandler2}>Add to Cart</button>
				</div>
			</div>
			<Trend trendName={'Similar Products'} products={slicedSimilarProducts} />
			{isPopped2 ? <Popup setIsPopped={setIsPopped2} /> : ''}
		</>
	);
};

export default Detail;
