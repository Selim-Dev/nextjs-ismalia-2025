import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Define protected routes
  const protectedRoutes = [
    '/posts/create',
    '/api/posts',
  ]
  
  // Check if current route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )
  
  // Only check authentication for protected routes
  if (isProtectedRoute) {
    // For POST requests to /api/posts (creating posts)
    if (pathname === '/api/posts' && request.method !== 'POST') {
      return NextResponse.next() // Allow GET requests (reading posts)
    }
    
    const token = request.cookies.get('auth-token')?.value
    
    // if (!token) {
    //   if (pathname.startsWith('/api/')) {
    //     return NextResponse.json(
    //       { error: 'Authentication required' },
    //       { status: 401 }
    //     )
    //   }
    //   return NextResponse.redirect(new URL('/login', request.url))
    // }
    
    try {
      // Use jose instead of jsonwebtoken for Edge Runtime
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || 'your-secret-key'
      )
      
      await jwtVerify(token, secret)
      return NextResponse.next()
      
    } catch (error) {
      console.error('Invalid token:', error)
      
      // if (pathname.startsWith('/api/')) {
      //   return NextResponse.json(
      //     { error: 'Invalid token' },
      //     { status: 401 }
      //   )
      // }
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/posts/create',
    '/api/posts',
  ]
}