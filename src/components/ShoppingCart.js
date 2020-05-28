import React from 'react';
import { cartContext } from '../App'

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = props => {
	const getCartTotal = () => {
		return props.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			<cartContext.Consumer>
				{cartItems => {
					return (
						<>
							{cartItems.map(item => (
								<Item key={item.id} {...item} />
							))}
							<div className="shopping-cart__checkout">
								<p>Total: ${getCartTotal()}</p>
								<button>Checkout</button>
							</div>
						</>
					)
				}}
			</cartContext.Consumer>
		</div>
	);
};

export default ShoppingCart;
