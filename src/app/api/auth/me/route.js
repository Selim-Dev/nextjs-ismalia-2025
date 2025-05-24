import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth-token')?.value
    
    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }
    
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your-secret-key'
    )
    
    const { payload } = await jwtVerify(token, secret)
    
    return NextResponse.json({
      id: payload.userId,
      email: payload.email
    })
    
  } catch (error) {
    console.error('Auth verification error:', error)
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
}