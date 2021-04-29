import React from 'react';
import Product from '../components/Product';

const Category = ({ categoryName, products }) => {
	return (
		<div className='category'>
			<h1 className='category-heading'>{categoryName}</h1>
			<div className='product-holder'>
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};

export default Category;
