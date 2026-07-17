import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layoutlar
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";

// Sahifalar (Public)
import Home from "./pages/public/Home";
import Posts from "./pages/public/Posts";
import PostDetail from "./pages/public/PostDetail";
import ErrorPage from "./pages/public/ErrorPage";
import LoginPage from "./pages/auth/LoginPage";

// Sahifalar (Admin)
import Dashboard from "./pages/admin/Dashboard";
import CreatePost from "./pages/admin/CreatePost";
import UpdatePost from "./pages/admin/UpdatePost";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <Home />, // Home sahifasi
        },
        {
          path: "posts", // /posts
          element: <Posts />, // Posts sahifasi
        },
        {
          path: "posts/:id", // /posts/:id
          element: <PostDetail />, // PostDetail sahifasi
        },
        {
          path: "login", // /login
          element: <LoginPage />, // Login sahifasi
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />, // Dashboard sahifasi
        },
        {
          path: "create-post", // /admin/create-post
          element: <CreatePost />, // CreatePost sahifasi
        },
        {
          path: "update-post", // /admin/update-post
          element: <UpdatePost />, // UpdatePost sahifasi
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />, // ErrorPage sahifasi
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
