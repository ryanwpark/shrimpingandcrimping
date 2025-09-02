import React from 'react';
import Link from 'next/link';
import { ShrimpProduct } from '../../utils/ShrimpData';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from '../../components/providers/ToastProvider';

const ProductCard = ({ product }: { product: ShrimpProduct }) => {
	const { addItem } = useShoppingCart();
	const { showAddToCartToast } = useToast();

	// Determine badges
	const badges = [];
	if (product.featured)
		badges.push({ text: 'Featured', color: 'bg-blue-500' });
	if (product.sold > 50)
		badges.push({ text: 'Best Seller', color: 'bg-green-500' });
	if (product.stock < 5)
		badges.push({ text: 'Low Stock', color: 'bg-red-500' });

	return (
		<div className='group w-full max-w-[280px] bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1'>
			{/* Image Container with Badges */}
			<Link href={`/product/${product.product_id}`}>
				<div className='relative aspect-[4/3] overflow-hidden'>
					<Image
						src={`/${product.image_url}`}
						alt={product.name}
						fill
						className='object-cover group-hover:scale-105 transition-transform duration-300'
						sizes='(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
					/>

					{/* Badges */}
					{badges.length > 0 && (
						<div className='absolute top-3 left-3 flex flex-col gap-1'>
							{badges.map((badge, index) => (
								<span
									key={index}
									className={`${badge.color} text-white text-xs font-medium px-2 py-1 rounded-full shadow-sm`}>
									{badge.text}
								</span>
							))}
						</div>
					)}
				</div>
			</Link>

			{/* Content */}
			<div className='p-4 space-y-3'>
				{/* Product Name */}
				<Link href={`/product/${product.product_id}`}>
					<h3 className='font-semibold text-gray-900 text-sm leading-5 hover:text-orange-600 transition-colors'>
						<span className='line-clamp-2'>
							{product.name.split(' ').map((word, index) => (
								<span
									key={index}
									className={
										word.toLowerCase() === 'shrimp'
											? 'font-normal text-gray-600'
											: ''
									}>
									{word}
									{index < product.name.split(' ').length - 1
										? ' '
										: ''}
								</span>
							))}
						</span>
					</h3>

					{/* Price */}
					<div className='flex items-baseline justify-start gap-1'>
						<span className='text-xs font-medium text-gray-500'>
							$
						</span>
						<span className='text-xl font-bold text-gray-900'>
							{Math.floor(product.price_single)}
						</span>
						<span className='text-xs font-medium text-gray-500'>
							{((product.price_single % 1) * 100)
								.toFixed(0)
								.padStart(2, '0')}
						</span>
					</div>
				</Link>

				{/* Add to Cart Button */}
				<button
					onClick={(e) => {
						e.preventDefault();
						addItem({
							id: product.product_id.toString(),
							sku: `shrimp-${product.product_id}`,
							name: product.name,
							price: product.price_single * 100, // Convert to cents for stripe
							currency: 'USD',
							image: `/${product.image_url}`,
						});

						// Show toast notification
						showAddToCartToast({
							name: product.name,
							image: `/${product.image_url}`,
							price: product.price_single,
						});
					}}
					className='w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
