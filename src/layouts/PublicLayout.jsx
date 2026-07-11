import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function PublicLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <Outlet />
      </main>
      <footer />
    </>
  )
}

export default PublicLayout    
