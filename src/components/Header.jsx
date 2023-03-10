import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);

	//Lo que se haga en el product item va a estar en el heaer porque lo agrego al contexto.
	//Entonces cuando se agregue un producto al carrito desde el product item aparecera en el carrito que està en header
	const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/ecommerce-react">All</a>
					</li>
					<li>
						<a href="/ecommerce-react">Clothes</a>
					</li>
					<li>
						<a href="/ecommerce-react">Electronics</a>
					</li>
					<li>
						<a href="/ecommerce-react">Furnitures</a>
					</li>
					<li>
						<a href="/ecommerce-react">Toys</a>
					</li>
					<li>
						<a href="/ecommerce-react">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
                        nestor@example.com
                    </li>
					<li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
					</li>
				</ul>
			</div>
            {toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;
