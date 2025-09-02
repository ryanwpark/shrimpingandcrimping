'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

interface ToastProps {
	isVisible: boolean;
	onClose: () => void;
	product?: {
		name: string;
		image?: string;
		price: number;
	};
	duration?: number;
}

const AddToCartToast = ({
	isVisible,
	onClose,
	product,
	duration = 3000,
}: ToastProps) => {
	useEffect(() => {
		if (isVisible) {
			const timer = setTimeout(() => {
				onClose();
			}, duration);

			return () => clearTimeout(timer);
		}
	}, [isVisible, onClose, duration]);

	if (!isVisible || !product) return null;

	return (
		<div className='fixed top-4 right-4 z-[9999] animate-in slide-in-from-top-2 duration-300'>
			<div className='bg-white border border-gray-200 rounded-xl shadow-lg p-4 max-w-sm'>
				<div className='flex items-center gap-3'>
					{/* Product Image */}
					{product.image ? (
						<div className='w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0'>
							<Image
								src={product.image}
								alt={product.name}
								width={48}
								height={48}
								className='w-full h-full object-cover'
							/>
						</div>
					) : (
						<div className='w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl'>
							🦐
						</div>
					)}

					{/* Content */}
					<div className='flex-1 min-w-0'>
						<div className='flex items-center gap-2 mb-1'>
							<div className='w-2 h-2 bg-green-500 rounded-full'></div>
							<span className='text-sm font-medium text-green-700'>
								Added to cart!
							</span>
						</div>
						<h4 className='font-medium text-gray-900 text-sm truncate'>
							{product.name}
						</h4>
						<p className='text-xs text-gray-500'>
							${product.price.toFixed(2)}
						</p>
					</div>

					{/* Close Button */}
					<button
						onClick={onClose}
						className='text-gray-400 hover:text-gray-600 transition-colors p-1'>
						<svg
							width='16'
							height='16'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddToCartToast;
