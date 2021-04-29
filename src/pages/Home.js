import React from 'react';
import Slider from '../components/Slider';
import Trend from '../components/Trend';

const Home = ({ productsList }) => {
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

	const arr1 = getRandom(productsList, 4);
	const arr2 = getRandom(productsList, 4);
	const arr3 = getRandom(productsList, 4);
	const arr4 = getRandom(productsList, 4);
	const arr5 = getRandom(productsList, 4);

	return (
		<>
			<Slider />
			<Trend trendName={'Top Picks For You'} products={arr1} />
			<Trend trendName={'Top Selling'} products={arr2} />
			<Trend trendName={'Buyers Choice'} products={arr3} />
			<Trend trendName={'Random Picks 1'} products={arr4} />
			<Trend trendName={'Random Picks 2'} products={arr5} />
		</>
	);
};

export default Home;
