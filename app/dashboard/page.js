"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    razorpayId: '',
    razorpaySecret: '',
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login')
    }
  }, [status, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Save logic (e.g., send to backend or Firebase)
    alert("Data Saved!");
  }

  return (
    <div className="min-h-screen bg-[#0c0a1b] text-white flex items-center justify-center px-4 py-12">
      <div className="bg-[#1a172c] p-8 rounded-2xl shadow-lg max-w-md w-full glass">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">Name</label>
            <input
              name="name"
              type="text"
              className="w-full px-4 py-2 bg-[#0c0a1b] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              className="w-full px-4 py-2 bg-[#0c0a1b] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">Username</label>
            <input
              name="username"
              type="text"
              className="w-full px-4 py-2 bg-[#0c0a1b] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">Razorpay ID</label>
            <input
              name="razorpayId"
              type="text"
              className="w-full px-4 py-2 bg-[#0c0a1b] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.razorpayId}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-300">Razorpay Secret</label>
            <input
              name="razorpaySecret"
              type="password"
              className="w-full px-4 py-2 bg-[#0c0a1b] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.razorpaySecret}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
