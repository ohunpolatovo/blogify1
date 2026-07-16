import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
function Navbar() {
  return (
    <nav className="container">
      <div className="flex items-center justify-between py-4">
        <img src="logo.svg" alt="" className="cursor-pointer" />
        <div className="flex space-x-4 gap-8  items-center justify-center">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Button variant={"secondary"} text={"login"} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
