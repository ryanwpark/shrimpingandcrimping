'use client';
import React from 'react';
import { styles } from '../../styles/constants';

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
	const handleSortChange = (selectedFilter: string) => {
		onFilterChange(selectedFilter);
	};

	return (
		<div className='flex flex-wrap gap-2 p-4 justify-center'>
			{Object.entries(FilterOptions).map(([key, label]) => (
				<button
					key={key}
					onClick={() => handleSortChange(key)}
					className={`px-2 py-1 md:px-4 md:py-2 rounded-xl text-sm md:text-base ${
						currentFilter === key
							? 'bg-orange-500 text-white'
							: `${styles.navLink}`
					}`}>
					{label}
				</button>
			))}
		</div>
	);
};

export default Filter;
