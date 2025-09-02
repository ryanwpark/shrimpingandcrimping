'use client';
import React from 'react';
import { ShrimpProduct } from '../../utils/ShrimpData';
import ProductCard from './ProductCard';
import CatalogSkeleton from './CatalogSkeleton';

type CatalogProps = {
	products: ShrimpProduct[];
	loading?: boolean;
};

const Catalog = ({ products, loading = false }: CatalogProps) => {
	if (loading) {
		return <CatalogSkeleton />;
	}

	if (products.length === 0) {
		return (
			<div className='w-full max-w-7xl mx-auto px-6 py-16 text-center'>
				<div className='space-y-4'>
					<div className='text-6xl'>🦐</div>
					<h3 className='text-xl font-semibold text-gray-700'>
						No shrimp found
					</h3>
					<p className='text-gray-500'>
						Try adjusting your filters to see more products.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className='w-full max-w-7xl mx-auto px-6'>
			<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'>
				{products.map((product: ShrimpProduct) => (
					<ProductCard key={product.product_id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Catalog;
