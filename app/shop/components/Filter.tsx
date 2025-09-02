'use client';
import React, { useState } from 'react';

type FilterProps = {
	onFilterChange: (filters: string) => void;
	currentFilter: string;
};

const FilterOptions = {
	none: 'Default',
	'alphabetical-asc': 'A - Z',
	'alphabetical-desc': 'Z - A',
	'price-asc': 'Ascending Price',
	'price-desc': 'Descending Price',
	featured: 'Featured',
	'best-seller': 'Best Sellers',
};

const Filter = ({ currentFilter, onFilterChange }: FilterProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleSortChange = (selectedFilter: string) => {
		onFilterChange(selectedFilter);
		setIsOpen(false); // Close accordion after selection
	};

	// Get filter display name
	const getFilterDisplayName = () => {
		switch (currentFilter) {
			case 'alphabetical-asc':
				return 'Alphabetically A-Z';
			case 'alphabetical-desc':
				return 'Alphabetically Z-A';
			case 'price-asc':
				return 'Price: Low to High';
			case 'price-desc':
				return 'Price: High to Low';
			case 'featured':
				return 'Featured Products';
			case 'best-seller':
				return 'Best Sellers';
			default:
				return 'All Products';
		}
	};

	return (
		<div className='w-full bg-white rounded-xl shadow-sm border border-gray-100'>
			{/* Accordion Header */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200 rounded-xl'>
				<div className='flex-1'></div>
				<div className='flex flex-col items-center text-center'>
					<h2 className='text-lg font-semibold text-gray-900'>
						Filter & Sort
					</h2>
					<span className='text-sm text-gray-500 mt-1'>
						Showing: {getFilterDisplayName()}
					</span>
				</div>
				<div className='flex-1 flex items-center justify-end'>
					<svg
						className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
							isOpen ? 'rotate-180' : ''
						}`}
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 9l-7 7-7-7'
						/>
					</svg>
				</div>
			</button>

			{/* Accordion Content */}
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
				}`}>
				<div className='px-6 pb-6 border-t border-gray-100'>
					<div className='flex flex-wrap gap-3 justify-between pt-4'>
						{Object.entries(FilterOptions).map(([key, label]) => (
							<button
								key={key}
								onClick={() => handleSortChange(key)}
								className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
									currentFilter === key
										? 'bg-orange-500 text-white shadow-sm'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
								}`}>
								{label}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filter;
