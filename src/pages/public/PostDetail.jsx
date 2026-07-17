import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://tevoj98108.pythonanywhere.com/api/v1/articles/${id}/`);
        if (!response.ok) {
          throw new Error(`Unable to load post (${response.status})`);
        }

        const data = await response.json();
        const article = data.data ?? data;
        setPost(article);
      } catch (err) {
        setError(err.message || "Post could not be loaded.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center text-slate-600">Loading post...</div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center bg-white shadow-sm rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-[#1a1a24] mb-4">Post not found</h2>
          <p className="text-[#6c7281] mb-6">{error || "The post you are looking for does not exist."}</p>
          <Link
            to="/posts"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-[#5636f3] text-white font-semibold hover:bg-[#4532c3] transition"
          >
            Back to Posts
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
        <div className="relative w-full aspect-video bg-gray-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-5 left-5 bg-[#5636f3] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
            {post.category?.name ?? post.category}
          </span>
        </div>
        <div className="p-8 md:p-12">
          <p className="text-sm text-[#6c7281] uppercase tracking-[0.24em] mb-4">
            {new Date(post.created_at ?? post.date ?? post.published_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a24] mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-[#475569] leading-relaxed mb-8">
            {post.content ?? post.description}
          </p>
          <Link
            to="/posts"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-[#5636f3] text-white font-semibold hover:bg-[#4532c3] transition"
          >
            Back to Posts
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PostDetail;
