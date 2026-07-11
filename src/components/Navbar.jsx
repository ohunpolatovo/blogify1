import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="w-full bg-transparent px-6 py-4 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="inline-flex items-center gap-2 text-lg font-semibold text-slate-950">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
            B
          </span>
          Blogify
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link to="/" className="transition hover:text-slate-950">Home</Link>
          <Link to="/posts" className="transition hover:text-slate-950">Posts</Link>
        </nav>

        <div className="inline-flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-full bg-violet-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-800"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
