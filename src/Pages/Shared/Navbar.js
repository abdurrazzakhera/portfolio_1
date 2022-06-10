import React from "react";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a>Service</a>
      </li>
      <li>
        <a>Skills</a>
      </li>
      <li>
        <a href="#portfolio">Projects</a>
      </li>
      <li>
        <a
          className="btn btn-primary text-black font-bold"
          href="https://drive.google.com/uc?export=download&id=1fW05sXluoe-H_KpdQtpABA3fTyfuPJ2B"
          download
        >
          RESUME
        </a>
      </li>
    </>
  );
  return (
    <div class=" sticky top-0 z-50 lg:px-8 navbar bg-base-100">
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
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">ABDUR RAZZAK</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
