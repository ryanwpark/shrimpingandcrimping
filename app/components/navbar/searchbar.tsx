'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { styles } from '../../styles/constants';
import { ShrimpData } from '../../utils/ShrimpData';
import Link from 'next/link';

type ShrimpProduct = {
	product_id: number;
	name: string;
	price_single: number;
	price_ten: number;
	image_url: string;
	featured: boolean;
	quantity: number;
	stock: number;
	sold: number;
};

const Searchbar = () => {
	const [searchTerm, setSearchTerm] = React.useState('');
	const [searchResults, setSearchResults] = React.useState<ShrimpProduct[]>(
		[]
	);
	const [showResults, setShowResults] = React.useState(false);
	const [isFocused, setIsFocused] = React.useState(false);

	const handleKeyPress = (event: { key: string }) => {
		if (event.key === 'Enter')
			return console.log(`Searching for: ${searchTerm}`);
	};
	const handleSearch = (input: string) => {
		console.log('Searching for:', input);
	};

	const featuredResults = ShrimpData.filter(
		(item: ShrimpProduct) => item.featured
	);

	useEffect(() => {
		console.log('Searching for:', searchTerm);

		// If search term is empty or just whitespace, return empty results
		if (searchTerm.trim() === '') {
			setSearchResults([]);
			setShowResults(false);
			console.log('Search results: []');
			return;
		}

		const results = ShrimpData.filter((item: ShrimpProduct) => {
			return item.name
				.toLowerCase()
				.trim()
				.replace(/\s/g, '')
				.includes(searchTerm.toLowerCase().trim().replace(/\s/g, ''));
		});
		setSearchResults(results);
		setShowResults(results.length > 0);
		console.log('Search results:', results);
	}, [searchTerm]);

	return (
		<div className='flex space-x-2'>
			<div className='flex-1 relative w-120'>
				<input
					placeholder='Search...'
					className={`${styles.searchInput} bg-white`}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyDown={handleKeyPress}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setTimeout(() => setIsFocused(false), 200)}
				/>
				{!showResults && isFocused && searchTerm.trim() === '' && (
					<div className='absolute top-full w-full bg-white border-2 border-orange-200 rounded-lg mt-1 max-h-60 z-50 shadow-lg transition-all'>
						<div className='font-semibold text-center pt-2 text-yellow-500'>
							Featured Products
						</div>
						{featuredResults.map((item) => (
							<Link
								key={item.product_id}
								href={`/product/${item.product_id}`}>
								<div className='flex space-x-4 p-3 hover:bg-orange-100 border-b border-orange-100 cursor-pointer'>
									<Image
										src={`/${item.image_url}`}
										alt={`${item.name}`}
										width={42}
										height={24}
									/>
									<div className='flex-1'>
										<div className='font-semibold'>
											{item.name}
										</div>
										<div className='text-sm text-gray-600'>
											${item.price_single}
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
				{showResults && isFocused && (
					<div className='absolute top-full w-full bg-white border-2 border-orange-200 rounded-lg mt-1 max-h-60 overflow-y-auto z-50 shadow-lg'>
						{searchResults.map((item) => (
							<Link
								key={item.product_id}
								href={`/product-${item.name}`}>
								<div className='flex space-x-4 p-3 hover:bg-orange-100 border-b border-orange-100 cursor-pointer'>
									<Image
										src={`/${item.image_url}`}
										alt={`${item.name}`}
										width={42}
										height={24}
									/>
									<div className='flex-1'>
										<div className='font-semibold'>
											{item.name}
										</div>
										<div className='text-sm text-gray-600'>
											${item.price_single}
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
				{!showResults && isFocused && searchTerm.trim() !== '' && (
					<div className='absolute top-full w-full bg-white border-2 border-orange-200 rounded-lg mt-1 max-h-60 overflow-y-auto z-50 shadow-lg'>
						<div className='p-3 border-b border-orange-100'>
							<div className='font-semibold'>
								No Results Found
							</div>
							<div className='text-sm text-gray-600'>
								{`Is ${searchTerm} what you're looking for?`}
							</div>
						</div>
					</div>
				)}
			</div>
			<button onMouseDown={() => handleSearch(searchTerm)}>
				<Image
					src='/searchlogo.png'
					alt='Search'
					width={36}
					height={36}
					className='hover:scale-120 transition-all'
				/>
			</button>
		</div>
	);
};

export default Searchbar;
