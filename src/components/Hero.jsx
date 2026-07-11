import React from 'react'
import { Link } from 'react-router-dom'
import HeroPreview from './HeroPreview'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-100 to-transparent" />
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center px-6 py-10 lg:flex-row lg:items-center lg:gap-16 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Blogify
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Create, Read,
            <span className="block text-violet-600">Inspire.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover stories written by amazing people. Share your knowledge and inspire others with your unique perspective.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/posts"
              className="inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-800"
            >
              Explore Posts
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Get Started
            </Link>
          </div>
        </div>

        <HeroPreview />
      </div>
    </section>
  )
}

export default Hero
