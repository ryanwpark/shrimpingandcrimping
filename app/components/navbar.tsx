import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
// import { motion } from 'framer-motion';
import Search from './searchbar';
import ShoppingCartPopup from './shoppingcartpopup';
import { styles } from '../styles/constants';

const Navbar = () => {
	return (
		<nav className='bg-orange-100 text-stone-950 flex justify-between items-center px-4 py-2'>
			{/* Left section: Logo + Nav Links */}
			<div className='flex items-center space-x-4'>
				<Link href='/'>
					<Image
						src='/shrimplogo.png'
						alt='Shrimp Logo'
						width={50}
						height={50}
					/>
				</Link>
				<Link href='/mystory' className={styles.navLink}>
					Story
				</Link>
				<Link href='/contact' className={styles.navLink}>
					Contact
				</Link>
				<Link href='/shop' className={styles.navLink}>
					Shop
				</Link>
			</div>

			{/* Center section: Search */}
			<div className='flex items-center'>
				<Search />
			</div>

			{/* Right section: Shopping Cart */}
			<div className={`flex items-center hover:scale-120 transition-all`}>
				<ShoppingCartPopup />
			</div>
		</nav>
	);
};

export default Navbar;
