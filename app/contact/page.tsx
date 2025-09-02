'use client';
import React, { useState } from 'react';

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		orderDate: '',
		problemType: '',
		message: '',
	});
	const [pendingSubmit, setPendingSubmit] = useState(false);
	const [submitMessage, setSubmitMessage] = useState('');

	const problemOptions = [
		{ value: '', label: 'Select an issue...' },
		{ value: 'order-status', label: 'Order Status' },
		{ value: 'shipping', label: 'Shipping Issues' },
		{ value: 'product-quality', label: 'Product Quality' },
		{ value: 'payment', label: 'Payment Problems' },
		{ value: 'refund', label: 'Refund Request' },
		{ value: 'general', label: 'General Inquiry' },
		{ value: 'other', label: 'Other' },
	];

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setPendingSubmit(true);
		setSubmitMessage('');

		// Simulate form submission
		setTimeout(() => {
			setPendingSubmit(false);
			setSubmitMessage(
				'Message sent successfully! We&apos;ll get back to you soon.'
			);
			setFormData({
				name: '',
				email: '',
				orderDate: '',
				problemType: '',
				message: '',
			});
		}, 1500);
	};

	// Get today's date in YYYY-MM-DD format for max date validation
	const today = new Date().toISOString().split('T')[0];

	const isFormValid =
		formData.name && formData.problemType && formData.message;

	return (
		<div className='min-h-screen bg-gray-50 py-12'>
			<div className='max-w-2xl mx-auto px-6'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h1 className='text-3xl font-bold text-gray-900 mb-4'>
						Get in Touch
					</h1>
					<p className='text-lg text-gray-600 leading-relaxed'>
						Having trouble with your shrimp order? We&apos;re here
						to help! Fill out the form below and we&apos;ll get back
						to you as soon as possible.
					</p>
				</div>

				{/* Contact Form */}
				<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-8'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						{/* Name Field */}
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Full Name *
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 border-2 border-orange-200 rounded-xl px-4 py-2 transition-all focus:outline-2 focus:outline-orange-200 hover:drop-shadow-sm focus:drop-shadow-sm outline-transparent'
								placeholder='Enter your full name'
							/>
						</div>

						{/* Email Field */}
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Email Address *
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 border-2 border-orange-200 rounded-xl px-4 py-2 transition-all focus:outline-2 focus:outline-orange-200 hover:drop-shadow-sm focus:drop-shadow-sm outline-transparent'
								placeholder='Enter your email address'
							/>
						</div>

						{/* Order Date Field */}
						<div>
							<label
								htmlFor='orderDate'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Order Date (Optional)
							</label>
							<input
								type='date'
								id='orderDate'
								name='orderDate'
								value={formData.orderDate}
								onChange={handleChange}
								max={today}
								className='w-full px-4 py-3 border-2 border-orange-200 rounded-xl px-4 py-2 transition-all focus:outline-2 focus:outline-orange-200 hover:drop-shadow-sm focus:drop-shadow-sm outline-transparent'
							/>
						</div>

						{/* Problem Type Dropdown */}
						<div>
							<label
								htmlFor='problemType'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Issue Type *
							</label>
							<select
								id='problemType'
								name='problemType'
								value={formData.problemType}
								onChange={handleChange}
								required
								className='w-full px-4 py-3 border-2 border-orange-200 rounded-xl px-4 py-2 transition-all focus:outline-2 focus:outline-orange-200 hover:drop-shadow-sm focus:drop-shadow-sm outline-transparent'>
								{problemOptions.map((option) => (
									<option
										key={option.value}
										value={option.value}>
										{option.label}
									</option>
								))}
							</select>
						</div>

						{/* Message Field */}
						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Message *
							</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								required
								rows={6}
								className='w-full px-4 py-3 border-2 border-orange-200 rounded-xl px-4 py-2 transition-all focus:outline-2 focus:outline-orange-200 hover:drop-shadow-sm focus:drop-shadow-sm outline-transparent'
								placeholder='Please describe your issue or question in detail...'
							/>
						</div>

						{/* Submit Button */}
						<div className='text-center pt-4'>
							<button
								type='submit'
								disabled={!isFormValid || pendingSubmit}
								className='inline-flex items-center px-8 py-3 bg-orange-300 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2'>
								{pendingSubmit ? (
									<>
										<svg
											className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
										</svg>
										Sending...
									</>
								) : (
									'Send Message'
								)}
							</button>
						</div>

						{/* Submit Message */}
						{submitMessage && (
							<div className='text-center mt-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
								<p className='text-green-700 font-medium'>
									{submitMessage}
								</p>
							</div>
						)}
					</form>
				</div>

				{/* Additional Info */}
				<div className='mt-12 text-center text-gray-600'>
					<div className='space-y-2'>
						<p className='text-sm'>
							Need immediate help? Email us directly at{' '}
							<a
								href='mailto:support@crimpingandshrimping.com'
								className='text-orange-600 hover:text-orange-700 font-medium'>
								support@crimpingandshrimping.com
							</a>
						</p>
						<p className='text-xs text-gray-500'>
							We typically respond within 24 hours during business
							days
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
