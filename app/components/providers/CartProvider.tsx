'use client';

import { CartProvider as ShoppingCartProvider } from 'use-shopping-cart';
import { ReactNode } from 'react';

interface CartProviderProps {
	children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
	return (
		<ShoppingCartProvider
			mode='payment'
			cartMode='client-only'
			stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
			currency='USD'
			successUrl='/success'
			cancelUrl='/shop'
			shouldPersist>
			{children}
		</ShoppingCartProvider>
	);
}
