import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import productsListData from './data';
import './App.css';
import './Mobile.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Accessibility from './components/Accessibility';
import Home from './pages/Home';
import Category from './pages/Category';
import Detail from './pages/Detail';

function App() {
	//hooks
	const [productsList] = useState(productsListData);

	//filtering product into different categories
	//mac
	const mac = productsList.filter((product) => {
		return product.type === 'mac';
	});

	mac.sort(function (a, b) {
		return 0.5 - Math.random();
	});

	//iphone
	const iphone = productsList.filter((product) => {
		return product.type === 'iphone';
	});

	iphone.sort(function (a, b) {
		return 0.5 - Math.random();
	});
	//ipad
	const ipad = productsList.filter((product) => {
		return product.type === 'ipad';
	});
	ipad.sort(function (a, b) {
		return 0.5 - Math.random();
	});
	//watch
	const watch = productsList.filter((product) => {
		return product.type === 'watch';
	});
	watch.sort(function (a, b) {
		return 0.5 - Math.random();
	});
	return (
		<div>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home productsList={productsList} />
				</Route>
				<Route exact path='/mac'>
					<Category categoryName={'Mac'} products={mac} />
				</Route>
				<Route exact path='/iphone'>
					<Category categoryName={'iPhone'} products={iphone} />
				</Route>
				<Route exact path='/ipad'>
					<Category categoryName={'iPad'} products={ipad} />
				</Route>
				<Route exact path='/watch'>
					<Category categoryName={'Watch'} products={watch} />
				</Route>
				<Route path='/:id/:id'>
					<Detail productsList={productsList} />
				</Route>
			</Switch>
			<Accessibility />
			<Footer />

			{/* <Category categoryName={'mac'} products={mac} /> */}
		</div>
	);
}

export default App;
