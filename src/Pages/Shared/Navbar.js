import React from "react";
import { GiGears } from 'react-icons/gi';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
      <>
        <li>
            <NavLink className='rounded-lg' to="/">Home</NavLink>
        </li>
        <li>
            <NavLink className='rounded-lg' to="/about">About</NavLink>
        </li>
        <li>
            <NavLink className='rounded-lg' to="/services">Services</NavLink>
        </li>
        <li>
            <NavLink className='rounded-lg' to="/contact">Contact</NavLink>
        </li>
      </>
  );
  return (
    <div class="navbar bg-base-100 shadow z-20 sticky top-0 lg:px-20">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-x-2"
          >
            {menuItems}
          </ul>
        </div>
        <p class="normal-case text-primary">
            <GiGears className="text-5xl"/>
        </p>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 gap-x-2">
            {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;