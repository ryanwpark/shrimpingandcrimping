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
		<div className='flex justify-center space-x-1 mt-8'>
			{/* Previous button */}
			{currentPage > 1 && (
				<Link
					href={`/shop?page=${currentPage - 1}`}
					className='px-3 py-2 bg-yellow-200 border border-yellow-200 border border-orange-200 rounded-xl hover:scale-110'>
					Previous
				</Link>
			)}

			{/* Page numbers */}
			{pages.map((page) => (
				<Link
					key={page}
					href={`/shop?page=${page}`}
					className={`px-3 py-2 border border-orange-200 rounded-xl ${
						currentPage === page
							? 'bg-gray-100 text-black scale-85'
							: 'hover:scale-110 bg-white'
					}`}>
					{page}
				</Link>
			))}

			{/* Next button */}
			{currentPage < totalPages && (
				<Link
					href={`/shop?page=${currentPage + 1}`}
					className='px-3 py-2  bg-yellow-200 border border-yellow-200 rounded-xl hover:scale-110'>
					Next
				</Link>
			)}
		</div>
	);
};

export default Pagination;
