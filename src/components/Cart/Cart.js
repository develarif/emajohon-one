import React from 'react';

const Cart = (props) => {
	let price = 0;
	let shipping = 0;
	for (let items of props.cart) {
		price = price + items.price;
		shipping = shipping + items.shipping;
	}
	return (
		<div>
			<h2>Total Items: {props.cart.length}</h2>
			<h3>Product Price: ${price.toFixed(2)}</h3>
			<h3>Shipping Cost: ${shipping.toFixed(2)}</h3>
			<hr />
			<h2>Total Price: ${(price + shipping).toFixed(2)}</h2>
		</div>
	);
};

export default Cart;
