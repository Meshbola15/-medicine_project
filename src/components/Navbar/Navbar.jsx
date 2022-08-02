import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full py-3 px-6 flex items-center justify-between shadow-lg sticky top-0 font-[poppins] z-10 bg-white ">
      <h1 className="text-3xl font-[Montserrat] uppercase text-gray-700 backdrop:shadow-lg">
        Medicine
      </h1>

      <div className="space-x-4 ">
        <NavLink to="/"className="NavLinks">Home</NavLink>
        <NavLink to="/edit" className="NavLinks">Edit</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
