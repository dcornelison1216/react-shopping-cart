import React from 'react';
import { cartContext } from '../App';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<cartContext.Consumer>
				<img src={props.image} alt={`${props.title} book`} />


				<div>
					<h1>{props.title}</h1>
					<p>$ {props.price}</p>
					<button>Remove from cart</button>
				</div>
			</cartContext.Consumer>
		</div>
	);
};

export default Item;
