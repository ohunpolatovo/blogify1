import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

function LatestPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch("https://tevoj98108.pythonanywhere.com/api/v1/articles/");
        if (!response.ok) {
          throw new Error(`Backend error ${response.status}`);
        }

        const data = await response.json();
        const items = Array.isArray(data)
          ? data
          : Array.isArray(data.results)
          ? data.results
          : Array.isArray(data.data?.results)
          ? data.data.results
          : [];

        setPosts(items.slice(0, 3));
      } catch (err) {
        console.error("Latest posts fetch error:", err);
        setError(err.message || "Unable to load latest posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, []);

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
          <Link
            to="/posts"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-[#1a1a24] hover:bg-gray-50 transition-colors duration-200 shadow-sm"
          >
            <span>View All</span>
          </Link>
        </div>

        {loading && (
          <div className="text-sm text-slate-600">Loading latest posts...</div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            !loading && (
              <div className="col-span-full text-center text-slate-500">No latest posts available.</div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default LatestPost;
