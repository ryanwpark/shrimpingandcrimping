import React from 'react';

interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	itemCount?: number;
}

const SectionHeader = ({ title, subtitle, itemCount }: SectionHeaderProps) => {
	return (
		<div className='w-full max-w-7xl mx-auto px-6 py-8'>
			<div className='text-center space-y-3'>
				<h1 className='text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight'>
					{title}
				</h1>
				{subtitle && (
					<p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
						{subtitle}
					</p>
				)}
				{itemCount !== undefined && (
					<p className='text-sm text-gray-500 font-medium'>
						{itemCount} {itemCount === 1 ? 'product' : 'products'}{' '}
						available
					</p>
				)}
			</div>
			<div className='mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent'></div>
		</div>
	);
};

export default SectionHeader;
