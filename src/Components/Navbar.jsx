import React, { useState } from "react";
import Group3 from "/images/Group 3.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="py-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <img src={Group3} alt="" />
          <span>JobPortal</span>
        </a>
        {/* Nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* signup and login btn */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">
            Log In
          </Link>
          <Link
            to="/sign-up"
            className="py-2 px-5 border rounded text-white bg-blue"
          >
            Log In
          </Link>
        </div>
        {/* mobile menu */}
        <div className="md:hidden block ">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <IoMdCloseCircle className="w-5 h-5 text-primary" />
            ) : (
              <FaBars className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>
      {/* nav items for mobiles */}
      <div
        className={`bg-black px-4 py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li className="text-white py-1">
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
