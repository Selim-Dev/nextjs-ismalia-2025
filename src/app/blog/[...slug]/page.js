import React from 'react'
async function getBlogData(){
	await new Promise(resolve=>setTimeout(resolve,2000))
	return "Blog"
}
const BlogDetails = async ({params}) => {
		const blogData  = await getBlogData();

	console.log("🚀 ~ BlogDetails ~ params:", params.slug)
	return (
		<div>BlogDetails</div>
	)
}

export default BlogDetails