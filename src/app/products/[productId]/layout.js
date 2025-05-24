import React from 'react'

const ProductLayout = ({children}) => {
	return (
	<div>
		{children}
			<h2 className='bg-pink-300 px-4 py-4'>Nested Product Layout</h2>
	</div>
	)
}

export default ProductLayout