import React from 'react'

export const simulateApiCall = ()=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			const responseStatus = Math.random() < 0.5 ? 200 : 400;
			responseStatus === 200 ? resolve(responseStatus) : reject(responseStatus)
		},1000)
	})
}
const ReviewDetails = async ({params}) => {
	const status = await simulateApiCall();
	if(status!==200){
		throw new Error("something went wrong");

	}
	return (
		<div>Review {params.reviewId} for the product </div>
	)
}

export default ReviewDetails