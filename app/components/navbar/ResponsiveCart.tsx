'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ShoppingCart from '../cart/shoppingcart';

const ResponsiveCart = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const { cartCount } = useShoppingCart();
	const router = useRouter();
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Check if screen is mobile size
	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 1024); // lg breakpoint
		};

		checkScreenSize();
		window.addEventListener('resize', checkScreenSize);
		return () => window.removeEventListener('resize', checkScreenSize);
	}, []);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		};

		if (isDropdownOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isDropdownOpen]);

	const handleCartClick = () => {
		if (isMobile) {
			// Redirect to cart page on mobile
			router.push('/cart');
		} else {
			// Toggle dropdown on desktop
			setIsDropdownOpen(!isDropdownOpen);
		}
	};

	return (
		<div className='relative' ref={dropdownRef}>
			<button
				onClick={handleCartClick}
				className='relative p-2 hover:bg-orange-200 rounded-lg transition-colors duration-200'>
				<Image
					src='/shoppingcartlogo.png'
					alt='Shopping Cart'
					width={28}
					height={28}
				/>

				{/* Cart Badge */}
				{cartCount && cartCount > 0 ? (
					<span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1'>
						{cartCount > 99 ? '99+' : cartCount}
					</span>
				) : null}
			</button>

			{/* Desktop Dropdown Modal */}
			{!isMobile && isDropdownOpen && (
				<div className='absolute right-0 top-full mt-2 z-50'>
					<ShoppingCart onClose={() => setIsDropdownOpen(false)} />
				</div>
			)}
		</div>
	);
};

export default ResponsiveCart;
