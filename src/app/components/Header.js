'use client'
import { useAuth } from '../store/useAuth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Header = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  
  const handleLogout = async () => {
    if (isLoggingOut) return // Prevent double clicks
    
    setIsLoggingOut(true)
    try {
      await logout()
      // Use replace instead of push to avoid back button issues
      router.replace('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }
  
  return (
    <header className="bg-white shadow-sm border-b px-6 py-4 mb-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Welcome, {user?.email}</span>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition disabled:opacity-50"
          >
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header