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
		<div className='flex space-x-4 p-4 justify-center'>
			<div className='flex space-x-2'>
				{Object.entries(FilterOptions).map(([key, label]) => (
					<button
						key={key}
						onClick={() => handleSortChange(key)}
						className={`px-4 py-2 rounded-xl ${
							currentFilter === key
								? 'bg-orange-500 text-white'
								: `${styles.navLink}`
						}`}>
						{label}
					</button>
				))}
			</div>
		</div>
	);
};

export default Filter;
