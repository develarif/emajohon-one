import React, { useEffect, useState } from 'react';
import Products from './Products';
import './Api.css';
import Cart from '../Cart/Cart';

const Api = () => {
	const [productItems, setProductItems] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON',
		)
			.then((res) => res.json())
			.then((data) => setProductItems(data));
	}, []);

	const addToCartHandle = (addToCart) => {
		const newCart = [...cart, addToCart];
		setCart(newCart);
	};

	return (
		<div className='all-products'>
			<div className='product-items'>
				{productItems.map((product) => (
					<Products
						product={product}
						key={product.key}
						addToCartHandle={addToCartHandle}></Products>
				))}
			</div>
			<div className='cart'>
				<div className='cart-info'>
					<h1>Order Summery</h1>
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default Api;
