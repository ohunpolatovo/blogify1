import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="logo.svg" alt="Logo" className="h-12 w-12 object-contain" />
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full sm:block sm:w-auto`}>
          <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-lg shadow-slate-200/40 sm:flex-row sm:items-center sm:border-0 sm:bg-transparent sm:shadow-none sm:p-0">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
              Home
            </Link>
            <Link to="/posts" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition">
              Posts
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" text="Login" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
