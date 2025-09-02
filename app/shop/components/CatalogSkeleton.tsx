import React from 'react';

const ProductCardSkeleton = () => {
	return (
		<div className='w-full max-w-[280px] bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm animate-pulse'>
			{/* Image skeleton */}
			<div className='w-full h-48 bg-gray-200'></div>

			{/* Content skeleton */}
			<div className='p-4 space-y-3'>
				{/* Badge skeleton */}
				<div className='h-5 w-16 bg-gray-200 rounded-full'></div>

				{/* Title skeleton */}
				<div className='space-y-2'>
					<div className='h-4 bg-gray-200 rounded w-3/4'></div>
					<div className='h-4 bg-gray-200 rounded w-1/2'></div>
				</div>

				{/* Price skeleton */}
				<div className='h-6 bg-gray-200 rounded w-1/3' />

				{/* Button skeleton */}
				<div className='h-9 bg-gray-200 rounded-lg w-full' />
			</div>
		</div>
	);
};

const CatalogSkeleton = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-6'>
			{Array.from({ length: 12 }).map((_, index) => (
				<ProductCardSkeleton key={index} />
			))}
		</div>
	);
};

export default CatalogSkeleton;
