'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname  } from 'next/navigation'
	const navlinks = [
		{name: 'Login', href: '/login' },
		{name: 'Signup', href: '/signup' },
		{name: 'Forget Password', href: '/forget-password' }
	]

const AuthLayout = ({children}) => {
	const pathname = usePathname();
	const [input,setInput] = useState('');
	return (
		<>
		{/* <div>
			<input className='border p-4 bg-gray-300' type="text"  value={input} onChange={(e)=>setInput(e.target.value)} />
		</div> */}
		<div className='space-x-3'>
			{navlinks.map((it)=>{
	const isActive = pathname==it.href || (pathname.startsWith(it.href) && it.href !== "/") 
	console.log("🚀 ~ {navlinks.map ~ isActive:", isActive)

				return (<Link className={isActive ? "text-blue-500 font-bold mr-4 underline" : " mr-4"} key={it.href} href={it.href}>{it.name}</Link>)
			})}
		</div>
			{children}
		</>

	)
}

export default AuthLayout