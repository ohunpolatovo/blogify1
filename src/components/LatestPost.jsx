import React from "react";
import PostCard from "./PostCard";

function LatestPost() {
  return (
    <section className="w-full bg-white py-12 md:py-16 my-12 md:my-20 px-4 sm:px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col gap-10">
        <div className="w-full flex flex-row justify-between items-end border-b border-gray-100 pb-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a24] tracking-tight">
              Latest Posts
            </h2>
            <p className="text-[14px] md:text-base text-[#6c7281]">
              Check out our most recent articles
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-[#1a1a24] hover:bg-gray-50 transition-colors duration-200 shadow-sm framework-btn">
            <span>View All</span>
          </button>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PostCard
            image="/fon1.svg"
            category="Technology"
            date="Nov 20, 2025"
            title="The Future of Web Development"
            description="Exploring the latest trends and technologies shaping the future of web development in 2026."
          />
          <PostCard
            image="/fon2.svg"
            category="Productivity"
            date="Nov 18, 2025"
            title="Mastering Productivity"
            description="Proven strategies and tools to boost your productivity and achieve your goals faster."
          />
          <PostCard
            image="/fon3.svg"
            category="Design"
            date="Nov 15, 2025"
            title="Design Principles That Matter"
            description="Essential design principles every creator should know to build stunning user experiences."
          />
        </div>
      </div>
    </section>
  );
}

export default LatestPost;
