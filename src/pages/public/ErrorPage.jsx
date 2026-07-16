import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <img className="w-150" src="/errorImage.avif" alt="" />
        <p className="mt-4 text-xl text-gray-600">Sahifa topilmadi</p>
        <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
          Bosh sahifaga qaytish
        </Link>
      </div>
      {/* <Link to="/">Bosh sahifaga qaytish</Link> */}
    </>
  );
}

export default ErrorPage;
