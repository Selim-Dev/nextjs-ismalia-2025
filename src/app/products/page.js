import React from 'react'
import Link from 'next/link';

const products = [
	{id:1, title: "First Product"},
	{id:2, title: "Second Product"},
	{id:3, title: "Third Product"},
	{id:4, title: "Fourth Product"},
]
const ProductsPage = () => {
	return (
		<div>
			<h1>Products List</h1>
			{
				products.map((product)=>(<h2 key={product.id}>
					<Link href={`/products/${product.id}`} >{product.title}</Link>
				</h2>))
			}
		</div>
	)
}

export default ProductsPage