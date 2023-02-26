import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/ecommerce-react" className="title">My orders</a>
				</li>
				<li>
					<a href="/ecommerce-react">My account</a>
				</li>
				<li>
					<a href="/ecommerce-react">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
