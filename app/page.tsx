import Link from 'next/link';
import Image from 'next/image';
import { ShrimpData } from './utils/ShrimpData';

export default function Home() {
	const featuredProducts = ShrimpData.filter(
		(product) => product.featured
	).slice(0, 3);

	return (
		<main className='min-h-screen bg-gradient-to-b from-orange-50 to-orange-100'>
			{/* Hero Section */}
			<section className='relative py-20 px-4'>
				<div className='max-w-6xl mx-auto text-center'>
					<div className='mb-8'>
						<Image
							src='/shrimplogo.png'
							alt='Shrimp Logo'
							width={120}
							height={120}
							className='mx-auto mb-6'
						/>
					</div>
					<h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-6'>
						Fresh Local
						<span className='text-orange-600'> Shrimp</span>
					</h1>
					<p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto'>
						Sustainably sourced, locally raised.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/shop'
							className='bg-orange-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-all hover:scale-105'>
							Shop Fresh Shrimp
						</Link>
						<Link
							href='/story'
							className='border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-orange-50 transition-all'>
							Our Story
						</Link>
					</div>
				</div>
			</section>

			{/* Featured Products Section */}
			<section className='py-16 px-4 bg-white'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 text-orange-600'>
						Shrimp of the Month
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{featuredProducts.map((product) => (
							<Link
								key={product.product_id}
								href={`/product/${product.product_id}`}
								className='bg-white rounded-xl border-2 border-orange-200 p-6 hover:shadow-lg hover:scale-105 transition-all group'>
								<div className='text-center'>
									<Image
										src={`/${product.image_url}`}
										alt={product.name}
										width={200}
										height={150}
										className='mx-auto rounded-lg mb-4'
									/>
									<h3 className='text-xl font-bold mb-2 text-gray-800'>
										{product.name
											.split(' ')
											.map((word, index) => (
												<span
													key={index}
													className={
														word.toLowerCase() ===
														'shrimp'
															? 'font-normal'
															: ''
													}>
													{word}
													{index <
													product.name.split(' ')
														.length -
														1
														? ' '
														: ''}
												</span>
											))}
									</h3>
									<div className='flex items-start justify-center mb-4'>
										<span className='text-sm font-medium text-orange-600'>
											$
										</span>
										<span className='text-3xl font-bold text-orange-600'>
											{Math.floor(product.price_single)}
										</span>
										<span className='text-sm font-medium align-top text-orange-600'>
											{((product.price_single % 1) * 100)
												.toFixed(0)
												.padStart(2, '0')}
										</span>
									</div>
									<span className='bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>
										Featured
									</span>
								</div>
							</Link>
						))}
					</div>
					<div className='text-center mt-12'>
						<Link
							href='/shop'
							className='text-orange-500 text-lg font-semibold hover:text-orange-600 transition-colors'>
							View All Products →
						</Link>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className='py-16 px-4 bg-orange-50'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-bold mb-8 text-gray-800'>
						Why Choose Us?
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<div className='p-6'>
							<div className='text-4xl mb-4'>🦐</div>
							<h3 className='text-xl font-bold mb-2 text-gray-800'>
								Healthy & Vibrant
							</h3>
							<p className='text-gray-600'>
								Premium quality aquarium shrimp, carefully bred
								for vitality
							</p>
						</div>
						<div className='p-6'>
							<div className='text-4xl mb-4'>💚</div>
							<h3 className='text-xl font-bold mb-2 text-gray-800'>
								Live Arrival Guaranteed
							</h3>
							<p className='text-gray-600'>
								Guaranteed live arrival with our expert
								packaging
							</p>
						</div>
						<div className='p-6'>
							<div className='text-4xl mb-4'> 😊</div>
							<h3 className='text-xl font-bold mb-2 text-gray-800'>
								Customer Service
							</h3>
							<p className='text-gray-600'>
								We&apos;re here to help you with any questions
								or concerns
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 px-4 bg-orange-500 text-white'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>
						Ready to Order?
					</h2>
					<p className='text-xl mb-8 opacity-90'>
						Fresh shrimp delivered to your door or local pick up.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link
							href='/shop'
							className='bg-white text-orange-500 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all'>
							Shop Now
						</Link>
						<Link
							href='/contact'
							className='border-2 border-white text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all'>
							Contact Us
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
