import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);

	//key es porque react necesita un key para cada elemento del DOm que se va creando dinámicamente
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem product={product} key={product.id}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;
