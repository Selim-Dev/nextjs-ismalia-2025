import { NextResponse } from 'next/server'

// Mock posts data
let posts = [
  { id: 1, title: 'Welcome to our blog', content: 'This is the first post', author: 'Admin' },
  { id: 2, title: 'Next.js is awesome', content: 'Learning Next.js features', author: 'John' },
]

// GET - Public (anyone can read posts)
export async function GET() {
  return NextResponse.json({ posts })
}

// POST - Protected (only authenticated users can create)
export async function POST(req) {
  try {
    const { title, content } = await req.json()
    
    // This route is protected by middleware
    // If we reach here, user is authenticated
    
    const newPost = {
      id: posts.length + 1,
      title,
      content,
      author: 'Current User', // In real app, get from JWT
      createdAt: new Date().toISOString()
    }
    
    posts.push(newPost)
    
    return NextResponse.json({ 
      message: 'Post created successfully!',
      post: newPost 
    }, { status: 201 })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}