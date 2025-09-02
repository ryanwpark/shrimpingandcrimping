'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import Search from './searchbar';
import ShoppingCartPopup from './shoppingcartpopup';
import { styles } from '../../styles/constants';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className='bg-orange-100 text-stone-950 px-4 py-2'>
			<div className='flex justify-between items-center'>
				{/* Mobile-left Logo and Shop */}
				<div className='md:hidden flex items-center space-x-2'>
					<Link href='/'>
						<Image
							src='/shrimplogo.png'
							alt='Shrimp Logo'
							width={50}
							height={50}
						/>
					</Link>
					<Link
						href='/shop'
						className={`${styles.navLink} px-2 py-1 text-sm`}>
						Shop
					</Link>
				</div>

				{/* Desktop Left: Logo + Nav Links */}
				<div className='hidden md:flex items-center space-x-4'>
					<Link href='/'>
						<Image
							src='/shrimplogo.png'
							alt='Shrimp Logo'
							width={50}
							height={50}
						/>
					</Link>
					<Link
						href='/story'
						className={`${styles.navLink} px-2 py-1`}>
						Story
					</Link>
					<Link
						href='/contact'
						className={`${styles.navLink} px-2 py-1`}>
						Contact
					</Link>
					<Link
						href='/shop'
						className={`${styles.navLink} px-2 py-1`}>
						Shop
					</Link>
				</div>

				{/* Desktop Center: Search Bar */}
				<div className='flex-1 max-w-md mx-4 hidden md:block'>
					<Search />
				</div>

				{/* Desktop Right: Shopping Cart */}
				<div className={`hidden md:block ${styles.navLink} p-2`}>
					<ShoppingCartPopup />
				</div>

				{/* Mobile Right:Cart + Hamburger */}
				<div className='md:hidden flex items-center space-x-2'>
					<div className={`${styles.navLink} p-2`}>
						<ShoppingCartPopup />
					</div>
					<button
						className='p-2'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span className='text-2xl'>☰</span>
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='md:hidden mt-4 pb-4 border-t border-orange-200'>
					<div className='flex flex-col space-y-2 mt-4'>
						<Link
							href='/story'
							className={`${styles.navLink} px-2 py-1 text-center`}
							onClick={() => setIsMobileMenuOpen(false)}>
							Story
						</Link>
						<Link
							href='/contact'
							className={`${styles.navLink} px-2 py-1 text-center`}
							onClick={() => setIsMobileMenuOpen(false)}>
							Contact
						</Link>
						<div className='mt-4'>
							<Search />
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
