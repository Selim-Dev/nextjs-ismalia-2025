import React from 'react'
const ProductDetails = ({params}) => {
	console.log("🚀 ~ ProductDetails ~ params:", params)
	return (
		<div>ProductDetails for product {params.productId}</div>
	)
}

export default ProductDetails
