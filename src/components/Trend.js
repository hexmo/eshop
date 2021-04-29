import React from 'react';
import Product from './Product';

const Trend = ({ trendName, products }) => {
	return (
		<div className='trend'>
			<h1 className='trend-heading'>{trendName}</h1>
			<div className='showcase'>
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default Trend;
