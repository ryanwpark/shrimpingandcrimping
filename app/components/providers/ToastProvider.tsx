'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import AddToCartToast from '../ui/AddToCartToast';

interface ToastContextType {
	showAddToCartToast: (product: {
		name: string;
		image?: string;
		price: number;
	}) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error('useToast must be used within a ToastProvider');
	}
	return context;
};

interface ToastProviderProps {
	children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
	const [toastData, setToastData] = useState<{
		isVisible: boolean;
		product?: {
			name: string;
			image?: string;
			price: number;
		};
	}>({
		isVisible: false,
	});

	const showAddToCartToast = (product: {
		name: string;
		image?: string;
		price: number;
	}) => {
		setToastData({
			isVisible: true,
			product,
		});
	};

	const hideToast = () => {
		setToastData({
			isVisible: false,
		});
	};

	return (
		<ToastContext.Provider value={{ showAddToCartToast }}>
			{children}
			<AddToCartToast
				isVisible={toastData.isVisible}
				onClose={hideToast}
				product={toastData.product}
			/>
		</ToastContext.Provider>
	);
};
