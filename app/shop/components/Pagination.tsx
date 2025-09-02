// app/shop/components/Pagination.tsx
'use client';
import React from 'react';
import Link from 'next/link';

type PaginationProps = {
	currentPage: number;
	totalPages: number;
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className='flex justify-center items-center space-x-2'>
			{/* Previous button */}
			{currentPage > 1 ? (
				<Link
					href={`/shop?page=${currentPage - 1}`}
					className='px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium'>
					← Previous
				</Link>
			) : (
				<span className='px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed'>
					← Previous
				</span>
			)}

			{/* Page numbers */}
			<div className='flex space-x-1'>
				{pages.map((page) => (
					<Link
						key={page}
						href={`/shop?page=${page}`}
						className={`px-3 py-2 rounded-lg transition-colors font-medium ${
							currentPage === page
								? 'bg-orange-500 text-white shadow-sm'
								: 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
						}`}>
						{page}
					</Link>
				))}
			</div>

			{/* Next button */}
			{currentPage < totalPages ? (
				<Link
					href={`/shop?page=${currentPage + 1}`}
					className='px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium'>
					Next →
				</Link>
			) : (
				<span className='px-4 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed'>
					Next →
				</span>
			)}
		</div>
	);
};

export default Pagination;
