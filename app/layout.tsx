import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/navbar';
import { Suspense } from 'react';
import { CartProvider } from './components/providers/CartProvider';
import { ToastProvider } from './components/providers/ToastProvider';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Crimping and Shrimping',
	description: 'Come and take it!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<link rel='icon' href='/shrimplogo.png' />
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<CartProvider>
					<ToastProvider>
						<header>
							<Navbar />
						</header>
						<hr />
						<Suspense>{children}</Suspense>
					</ToastProvider>
				</CartProvider>
			</body>
		</html>
	);
}
