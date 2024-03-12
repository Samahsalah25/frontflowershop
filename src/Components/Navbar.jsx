import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className=" bg-pink-400 p-4  w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://img.freepik.com/free-vector/rose-business-logo-template-flower-design-beauty-brands-vector_53876-156286.jpg?t=st=1709797118~exp=1709800718~hmac=868f6b9dc3aee96720c9a1d9fa7d1da0172376003e58bdfce1bf6dc68c262a44&w=740"
            alt="Nature House Logo"
            className="h-8 mr-2 rounded-full"
          />{" "}
          {/* Your logo image */}
          <div className="text-white font-bold text-xl">Nature House</div>
        </div>
        <ul className="flex space-x-4 cursor-pointer">
          <li>
            <NavLink
              to="/home"
              exact
              activeClassName="font-bold text-black-500"
              className="text-white hover:text-black-500"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Products"
              activeClassName="font-bold text-black-500"
              className="text-white hover:text-black-500"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="font-bold text-black-500"
              className="text-white hover:text-black-500"
            >
              About
            </NavLink>
          </li>
          <li
            className="text-white cursor-pointer hover:text-black-500"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("id");
              navigate("/Login");
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
