'use client';
import React from 'react';
import { ShrimpProduct } from '../../data/ShrimpData';
import ProductCard from './ProductCard';

type CatalogProps = {
	products: ShrimpProduct[];
};
const Catalog = ({ products }: CatalogProps) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full max-w-7xl mx-auto px-4'>
			{products.map((product: ShrimpProduct) => (
				<ProductCard key={product.product_id} product={product} />
			))}
		</div>
	);
};

export default Catalog;
