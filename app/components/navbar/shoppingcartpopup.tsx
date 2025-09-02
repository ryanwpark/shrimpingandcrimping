import React from 'react';
import Image from 'next/image';

const ShoppingCartPopup = () => {
	return (
		<button
			// onClick={() => setIsClicked(!isClicked)}
			type='submit'
			// onKeyDown={handleKeyPress}
		>
			<Image
				src='/shoppingcartlogo.png'
				alt='Shopping Cart'
				width={28}
				height={28}
			/>
		</button>
	);
};

export default ShoppingCartPopup;
