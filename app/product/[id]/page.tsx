'use client';
import React from 'react';
import { ShrimpData, ShrimpProduct } from '../../utils/ShrimpData';
import { notFound } from 'next/navigation';
import { use } from 'react';
import Image from 'next/image';

const Product = ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = use(params);
	const product: ShrimpProduct | undefined = ShrimpData.find(
		(item) => item.product_id.toString() === id
	);

	if (!product) {
		return notFound();
	}
	return (
		<div className='p-8'>
			<h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
			<div className='flex gap-8'>
				<Image
					src={`/${product.image_url}`}
					alt={product.name}
					width={300}
					height={400}
					className='w-64 h-64 object-cover rounded-lg'
				/>
				<div>
					<p className='text-2xl font-semibold mb-2'>
						Price: ${product.price_single}
					</p>
					<p className='text-lg mb-2'>
						10-pack: ${product.price_ten}
					</p>
					<p className='mb-4'>Stock: {product.stock}</p>
					<p className='mb-4'>Sold: {product.sold}</p>
					{product.featured && (
						<span className='bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm'>
							Featured
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Product;
