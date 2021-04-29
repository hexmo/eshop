import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
	// https://medium.com/how-to-react/add-an-active-classname-to-the-link-using-react-router-b7c350473916
	//assigning location variable
	const location = useLocation();
	//destructuring pathname from location
	const { pathname } = location;
	//Javascript split method to get the name of the path in array
	const splitLocation = pathname.split('/');

	return (
		<nav>
			<div className='logo'>
				<h1>
					<Link to='/'>ESHOP</Link>
				</h1>
			</div>
			<div className='main_menu'>
				<ul>
					<li className={splitLocation[1] === '' ? 'active' : ''}>
						<Link to='/'>Home</Link>
					</li>
					<li className={splitLocation[1] === 'mac' ? 'active' : ''}>
						<Link to='/mac'>Mac</Link>
					</li>
					<li className={splitLocation[1] === 'iphone' ? 'active' : ''}>
						<Link to='/iphone'>iPhone</Link>
					</li>
					<li className={splitLocation[1] === 'ipad' ? 'active' : ''}>
						<Link to='/ipad'>iPad</Link>
					</li>
					<li className={splitLocation[1] === 'watch' ? 'active' : ''}>
						<Link to='/watch'>Watch</Link>
					</li>
				</ul>
			</div>

			<div className='sub-menu'>
				<ul>
					<li className={splitLocation[1] === 'search' ? 'active' : ''}>
						<FontAwesomeIcon icon={faSearch} />
					</li>

					<li className={splitLocation[1] === 'cart' ? 'active' : ''}>
						<FontAwesomeIcon icon={faShoppingCart} />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
