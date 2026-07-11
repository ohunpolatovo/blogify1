import React from 'react'

 

function HeroPreview() {
  return (
    <div className="mt-12 flex justify-center lg:mt-0 lg:w-1/2">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white px-7 py-8 shadow-[0_40px_120px_-40px_rgba(79,70,229,0.35)] ring-1 ring-slate-200">
        <div className="pointer-events-none absolute -left-10 top-8 h-24 w-24 rounded-full bg-violet-100 blur-3xl" />
        <div className="pointer-events-none absolute -right-8 bottom-6 h-32 w-32 rounded-full bg-indigo-100 blur-3xl" />
        <div className="overflow-hidden rounded-2xl bg-slate-100">
          <img src='.src/assets/Hero.png' alt="Hero preview" className="h-80 w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default HeroPreview
