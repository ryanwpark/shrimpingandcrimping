import { useShoppingCart } from 'use-shopping-cart';
import CartItem from './cartitem';
import CheckoutButton from './checkoutbutton';
import Link from 'next/link';

interface ShoppingCartProps {
	onClose?: () => void;
}

export default function ShoppingCart({ onClose }: ShoppingCartProps) {
	const { cartCount, cartDetails, formattedTotalPrice } = useShoppingCart();

	return (
		<div className='bg-white flex flex-col w-80 max-h-96 py-4 px-4 shadow-lg rounded-xl border border-gray-100 overflow-hidden'>
			{/* Header */}
			<div className='flex items-center justify-between mb-4 pb-3 border-b border-gray-100'>
				<h3 className='text-lg font-semibold text-gray-900'>
					Shopping Cart
				</h3>
				<span className='text-sm text-gray-500'>
					{cartCount} {cartCount === 1 ? 'item' : 'items'}
				</span>
			</div>

			{cartCount && cartCount > 0 ? (
				<>
					{/* Cart Items - Scrollable */}
					<div className='flex-1 overflow-y-auto space-y-3 mb-4 max-h-48'>
						{Object.values(cartDetails ?? {}).map((entry) => (
							<CartItem key={entry.id} item={entry} />
						))}
					</div>

					{/* Total */}
					<div className='border-t border-gray-100 pt-3 mb-4'>
						<div className='flex items-center justify-between'>
							<span className='font-semibold text-gray-900'>
								Total:
							</span>
							<span className='text-lg font-bold text-gray-900'>
								{formattedTotalPrice}
							</span>
						</div>
					</div>

					{/* Actions */}
					<div className='space-y-2'>
						<CheckoutButton />
						<Link
							href='/cart'
							onClick={onClose}
							className='block w-full text-center py-2 text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors'>
							View Full Cart
						</Link>
					</div>
				</>
			) : (
				<div className='text-center py-8'>
					<div className='text-4xl mb-3'>🛒</div>
					<p className='text-gray-600 mb-4'>Your cart is empty</p>
					<Link
						href='/shop'
						className='inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm'>
						Start Shopping
					</Link>
				</div>
			)}
		</div>
	);
}
