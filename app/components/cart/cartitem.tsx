import { useShoppingCart } from 'use-shopping-cart';
import { formatCurrencyString } from 'use-shopping-cart';
import Image from 'next/image';

interface CartItemProps {
	item: {
		id: string;
		name: string;
		quantity?: number;
		price: number;
		image?: string;
	};
}

export default function CartItem({ item }: CartItemProps) {
	const { name, quantity, price, image } = item;
	const { removeItem } = useShoppingCart();

	const removeItemFromCart = () => {
		removeItem(item.id);
	};

	return (
		<div className='flex items-center gap-3'>
			{/* Product Image */}
			{image ? (
				<div className='w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0'>
					<Image
						src={image}
						alt={name}
						width={48}
						height={48}
						className='w-full h-full object-cover'
					/>
				</div>
			) : (
				<div className='w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl'>
					🦐
				</div>
			)}

			{/* Product Info */}
			<div className='flex-1 min-w-0'>
				<h4 className='font-medium text-gray-900 text-sm truncate'>
					{name}
				</h4>
				<p className='text-xs text-gray-500'>Qty: {quantity}</p>
			</div>

			{/* Price */}
			<div className='text-sm font-semibold text-gray-900'>
				{formatCurrencyString({ value: price, currency: 'USD' })}
			</div>

			{/* Remove Button */}
			<button
				onClick={removeItemFromCart}
				className='hover:bg-red-50 hover:text-red-600 transition-colors rounded-full duration-200 p-1.5 text-gray-400'>
				<svg
					width='16'
					height='16'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>
		</div>
	);
}
