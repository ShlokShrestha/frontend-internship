import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-700 text-white py-5" >
      <div className="text-center ">
        <Link to="/" className="mx-5 font-semiBold text-lg">Home</Link>
        <Link to="/add-post" className="mx-5 font-semiBold text-lg">Add Post</Link>
      </div>
    </div>
  );
};

export default Navbar;
