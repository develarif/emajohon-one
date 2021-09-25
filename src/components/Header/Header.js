import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<header className='header'>
			<div className='header-container'>
				<div className='row'>
					<div className='logo-area'>
						<img src={logo} alt='Site logo' />
					</div>
					<nav className='menu-area'>
						<ul className='nav-menus'>
							<li>
								<a href='/shop'>Shop</a>
							</li>
							<li>
								<a href='/about'>About</a>
							</li>
							<li>
								<a href='/contact'>Contact</a>
							</li>
						</ul>
					</nav>
					<div className='cart-area'>
						<a href='/cart'>
							Cart
							<FontAwesomeIcon
								icon={faShoppingCart}></FontAwesomeIcon>
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
