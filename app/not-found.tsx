import React from 'react';
import Image from 'next/image';

const NotFound = () => {
	return (
		<div className='flex justify-center items-center h-[80vh]'>
			<Image
				src='/shrimp404.png'
				alt='404 Image'
				width={300}
				height={300}
			/>
			<div className='flex flex-col'>
				<h1 className='text-4xl font-bold mb-2'>404 - Not Found</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
			</div>
		</div>
	);
};

export default NotFound;
