import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function PublicLayout() {
  return (
    <>
      <header className="sticky top-0 left-0 w-full z-50 bg-white/50 backdrop-blur-md border-b border-gray-100/20">
        <Navbar />
      </header>
      <main className="grow w-full">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PublicLayout;
