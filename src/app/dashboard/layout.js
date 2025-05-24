'use client'
import { useAuth } from '../store/useAuth'
import { useEffect, useState } from 'react'

export default function Layout({children, users, revenue, notifications, login }) {
  const { isAuthenticated, checkAuth } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const initAuth = async () => {
      await checkAuth()
      setIsLoading(false)
    }
    initAuth()
  }, [])
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }
  
  if (!isAuthenticated) {
    return <div>{login}</div>
  }
  
  return (
    <>
      <div>{children}</div>
      <div className="min-h-screen bg-gray-50 pb-6">
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          <div className="col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow">{users}</div>
            <div className="bg-white rounded-lg shadow">{revenue}</div>
          </div>
          <div className="col-span-2 bg-white rounded-lg shadow">
            {notifications}
          </div>
        </div>
      </div>
    </>
  )
}