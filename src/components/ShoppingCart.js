import React, { useContext } from 'react';
import { cartContext } from '../App'

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {
	const cartItems = useContext(cartContext)
	const getCartTotal = () => {
		return cartItems.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cartItems.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
