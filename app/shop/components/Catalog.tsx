'use client';
import React from 'react';
import { ShrimpProduct } from '../../data/ShrimpData';
import ProductCard from './ProductCard';

type CatalogProps = {
	products: ShrimpProduct[];
};
const Catalog = ({ products }: CatalogProps) => {
	return (
		<div className='grid grid-cols-4 gap-4 place-items-center w-1/2 h-1/2 mx-auto'>
			{products.map((product: ShrimpProduct) => (
				<ProductCard key={product.product_id} product={product} />
			))}
		</div>
	);
};

export default Catalog;
