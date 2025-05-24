import React from 'react'

export const generateMetadata = ({params})=>{

	return {
		title: `product ${params.productId}`
	}
}
const ProductDetails = ({params}) => {
	console.log("🚀 ~ ProductDetails ~ params:", params)
	return (
		<div>ProductDetails for product {params.productId}</div>
	)
}

export default ProductDetails
