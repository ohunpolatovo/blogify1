import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../../components/PostCard";
import posts from "../../data/posts";

function Posts() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col items-center text-center gap-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a24] tracking-tight">
          Explore Our Posts
        </h1>
        <p className="text-[#6c7281] text-base md:text-lg max-w-2xl">
          Discover amazing content from talented writers across various topics
        </p>
        <div className="w-full max-w-xl relative mt-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5636f3]/20 focus:border-[#5636f3] transition-all placeholder:text-gray-400 shadow-sm"
          />
        </div>
      </div>
      <div className="w-full max-w-7xl flex justify-center mb-10">
        <div className="inline-flex p-1.5 bg-[#f6f7fb] rounded-[14px] gap-1">
          <button className="px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-white text-[#1a1a24] shadow-sm transition-all">
            All
          </button>
          <button className="px-5 py-2 text-[14px] font-medium rounded-[10px] text-[#6c7281] hover:text-[#1a1a24] transition-all">
            Technology
          </button>
          <button className="px-5 py-2 text-[14px] font-medium rounded-[10px] text-[#6c7281] hover:text-[#1a1a24] transition-all">
            Productivity
          </button>
          <button className="px-5 py-2 text-[14px] font-medium rounded-[10px] text-[#6c7281] hover:text-[#1a1a24] transition-all">
            Design
          </button>
        </div>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}

export default Posts;
