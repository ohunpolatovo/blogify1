import React, { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://tevoj98108.pythonanywhere.com/api/v1/articles/");
        if (!response.ok) {
          throw new Error(`Backend error ${response.status}`);
        }

        const data = await response.json();
        let items = [];

        if (Array.isArray(data)) {
          items = data;
        } else if (Array.isArray(data.results)) {
          items = data.results;
        } else if (Array.isArray(data.data?.results)) {
          items = data.data.results;
        } else {
          throw new Error("Unexpected response from backend");
        }

        setPosts(items);
      } catch (err) {
        console.error("Posts fetch error:", err);
        setError(err.message || "Unable to load posts from backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

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

      {loading && (
        <div className="mb-8 text-sm text-slate-600">Loading posts from backend...</div>
      )}

      {error && (
        <div className="mb-8 w-full max-w-7xl rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-700">
          {error}
        </div>
      )}

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
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id ?? post.title}
              id={post.id}
              image={post.image}
              category={post.category?.name ?? post.category}
              date={new Date(post.created_at ?? post.date ?? post.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              title={post.title}
              description={post.content ?? post.description}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-slate-500">No posts available.</div>
        )}
      </div>
    </section>
  );
}

export default Posts;
