import React from 'react';
import Link from 'next/link';
import { ShrimpProduct } from '../../data/ShrimpData';
import Image from 'next/image';

const ProductCard = ({ product }: { product: ShrimpProduct }) => {
	return (
		<Link
			href={`/product/${product.product_id}`}
			key={product.product_id}
			className='rounded-b-xl bg-white border border-orange-200 w-50 h-auto p-2 space-y-2 flex flex-col items-center justify-center hover:scale-105 hover:outline-1 hover:outline-orange-200 hover:drop-shadow-sm transition-all cursor-pointer'>
			<Image
				src={`/${product.image_url}`}
				alt={product.name}
				width={200}
				height={100}
			/>
			<h3 className='text-center'>{product.name}</h3>
			<p className='text-center'>${product.price_single}</p>
			<button
				className={`rounded-xl flex items-center px-5 py-1 hover:outline-1 hover:outline-green-500 transition-all hover:scale-105 outline-green-500 border border-2 border-green-500 text-green-500`}>
				Add to cart
			</button>
		</Link>
	);
};

export default ProductCard;
