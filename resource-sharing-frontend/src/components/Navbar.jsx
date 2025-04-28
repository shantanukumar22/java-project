import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">
        Resource Sharing
      </Link>
      <div className="space-x-4">
        <Link to="/resources" className="hover:underline">
          Resources
        </Link>
        <Link to="/requests" className="hover:underline">
          Requests
        </Link>
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link to="/register" className="hover:underline">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
