import React from 'react';
import './Products.css';

const Products = (props) => {
	const { name, price, category, seller, shipping, stock, img } =
		props.product;
	return (
		<div className='product'>
			<div className='thumbnail'>
				<img src={img} alt='' />
			</div>
			<div className='product-info'>
				<h2>{name}</h2>
				<h3>Price: $ {price}</h3>
				<h5>Shipping Cost: $ {shipping}</h5>
				<p>Categories: {category}</p>
				<p>Itmes in Stock: {stock}</p>
				<p>Vendor: {seller}</p>
				<button onClick={() => props.addToCartHandle(props.product)}>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Products;
