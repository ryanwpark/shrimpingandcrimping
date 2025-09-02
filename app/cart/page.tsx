'use client';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import CartItem from '../components/cart/cartitem';
import CheckoutButton from '../components/cart/checkoutbutton';
import Link from 'next/link';

const CartPage = () => {
	const { cartCount, cartDetails, formattedTotalPrice } = useShoppingCart();

	return (
		<div className='min-h-screen bg-gray-50 py-8'>
			<div className='max-w-4xl mx-auto px-4'>
				{/* Header */}
				<div className='mb-8'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Shopping Cart
					</h1>
					<p className='text-gray-600 mt-2'>
						{cartCount} {cartCount === 1 ? 'item' : 'items'} in your
						cart
					</p>
				</div>

				{cartCount && cartCount > 0 ? (
					<div className='space-y-6'>
						{/* Cart Items */}
						<div className='bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100'>
							{Object.values(cartDetails ?? {}).map((entry) => (
								<div key={entry.id} className='p-4'>
									<CartItem item={entry} />
								</div>
							))}
						</div>

						{/* Cart Summary */}
						<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
							<div className='flex items-center justify-between mb-4'>
								<span className='text-lg font-semibold text-gray-900'>
									Total
								</span>
								<span className='text-2xl font-bold text-gray-900'>
									{formattedTotalPrice}
								</span>
							</div>
							<CheckoutButton />
						</div>

						{/* Continue Shopping */}
						<div className='text-center'>
							<Link
								href='/shop'
								className='inline-flex items-center text-orange-600 hover:text-orange-700 font-medium'>
								← Continue Shopping
							</Link>
						</div>
					</div>
				) : (
					/* Empty Cart State */
					<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center'>
						<div className='text-6xl mb-4'>🛒</div>
						<h2 className='text-xl font-semibold text-gray-900 mb-2'>
							Your cart is empty
						</h2>
						<p className='text-gray-600 mb-6'>
							Add some shrimp to get started!
						</p>
						<Link
							href='/shop'
							className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200'>
							Start Shopping
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartPage;
