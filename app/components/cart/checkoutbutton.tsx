import { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

type Status = 'idle' | 'loading' | 'redirect-error' | 'no-items';

export default function CheckoutButton() {
	const [status, setStatus] = useState<Status>('idle');
	const { redirectToCheckout, cartCount, totalPrice } = useShoppingCart();

	async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		if (cartCount && cartCount > 0) {
			setStatus('loading');
			try {
				const result = await redirectToCheckout();
				if (result?.error) {
					console.error(result);
					setStatus('redirect-error');
				}
			} catch (error) {
				console.error(error);
				setStatus('redirect-error');
			}
		} else {
			setStatus('no-items');
		}
	}

	return (
		<article className='mt-3 flex flex-col'>
			<div className='text-red-700 text-xs mb-3 h-5 text-center'>
				{totalPrice && totalPrice < 2000 // Changed to cents (20.00 * 100)
					? 'You must have at least $20.00 in your basket'
					: status === 'redirect-error'
					? 'Unable to redirect to Stripe checkout page'
					: status === 'no-items'
					? 'Please add some items to your cart'
					: null}
			</div>
			<button
				onClick={handleClick}
				className='bg-orange-50 hover:bg-orange-500 hover:text-white transition-colors duration-500 text-orange-500 py-3 px-5 rounded-md w-full disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-white'
				disabled={
					(totalPrice !== undefined && totalPrice < 3000) ||
					(cartCount !== undefined && cartCount > 20) ||
					status === 'no-items'
				}>
				{status !== 'loading' ? 'Proceed to checkout' : 'Loading...'}
			</button>
		</article>
	);
}
