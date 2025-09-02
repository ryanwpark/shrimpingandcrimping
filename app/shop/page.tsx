'use client';
import React, { useState, useMemo } from 'react';
import Catalog from './components/Catalog';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import { ShrimpData } from '../data/ShrimpData';
import { useSearchParams } from 'next/navigation';

const Shop = () => {
	const searchParams = useSearchParams();
	const [filters, setFilters] = useState('none');

	const currentPage = parseInt(searchParams.get('page') || '1');
	const ITEMS_PER_PAGE = 16;

	// Apply filters and sorting
	const filteredAndSortedData = useMemo(() => {
		let result = [...ShrimpData];

		switch (filters) {
			case 'alphabetical-asc':
				result.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case 'alphabetical-desc':
				result.sort((a, b) => b.name.localeCompare(a.name));
				break;
			case 'price-asc':
				result.sort((a, b) => a.price_single - b.price_single);
				break;
			case 'price-desc':
				result.sort((a, b) => b.price_single - a.price_single);
				break;
			case 'featured':
				result = result.filter((item) => item.featured);
				break;
			case 'best-seller':
				result.sort((a, b) => b.sold - a.sold).slice(0, 10);
				break;
			default:
				// No sorting/filtering
				break;
		}

		return result;
	}, [filters]);

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentProducts = filteredAndSortedData.slice(startIndex, endIndex);
	const totalPages = Math.ceil(filteredAndSortedData.length / ITEMS_PER_PAGE);

	return (
		<div>
			<Filter currentFilter={filters} onFilterChange={setFilters} />
			<Catalog products={currentProducts} />
			<Pagination currentPage={currentPage} totalPages={totalPages} />
		</div>
	);
};

export default Shop;
