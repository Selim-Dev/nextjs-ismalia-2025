import React from 'react'
import Header from '../components/Header'

const Page = () => {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
          <p className="text-gray-600">Welcome to your dashboard! Check out the sections below for users, revenue, and notifications.</p>
        </div>
      </div>
    </div>
  )
}

export default Page