import React from 'react'

const ReviewDetails = ({params}) => {
	return (
		<div>Review {params.reviewId} for the product {params.productId}</div>
	)
}

export default ReviewDetails