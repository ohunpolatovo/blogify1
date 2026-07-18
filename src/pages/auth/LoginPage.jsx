import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = {
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
    };

    try {
      const res = await fetch("https://tevoj98108.pythonanywhere.com/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        const message =
          data?.detail || data?.error || data?.message || "Login failed";
        throw new Error(typeof message === "string" ? message : JSON.stringify(message));
      }

      const accessToken = data?.access || data?.token || data?.key || data?.data?.access;
      if (!accessToken) {
        throw new Error("Token was not returned from server");
      }

      localStorage.setItem("access", accessToken);
      navigate("/admin");
    } catch (submitError) {
      console.error(submitError);
      setError(submitError?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f6ff] px-6 py-10 flex items-center justify-center">
      <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="mx-auto max-w-xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3 text-slate-900">
              <img src="/Link.svg" alt="Blogify logo" className="h-10 w-auto" />
              
            </div>

            <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
              ← Back to Home
            </Link>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-white p-10 shadow-[0_35px_80px_rgba(15,23,42,0.08)]">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">Login</p>
              <h1 className="mt-4 text-4xl font-bold text-slate-950">Welcome Back</h1>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your credentials to access your account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  ref={passwordRef}
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Signing in..." : "Login"}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don&apos;t have an account? <span className="font-semibold text-indigo-600">Sign up</span>
            </p>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-lg flex-col items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-5xl  from-violet-600 via-indigo-600 to-blue-600 p-8 shadow-[0_35px_80px_rgba(99,102,241,0.35)]">
            <div className="rounded-[36px] bg-white/10 p-6 backdrop-blur-xl">
              <img src="/login.svg" alt="Login illustration" className="w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 left-1/2 w-full max-w-90 -translate-x-1/2 rounded-[28px] p-6 text-center shadow-2xl">
              <p className="text-lg font-semibold text-slate-950">Start Your Journey</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Join thousands of creators sharing their stories on Blogify.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
