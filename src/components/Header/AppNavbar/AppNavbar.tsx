import { Navbar, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

function NavList() {
  return (
    <div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
        <Link to="/" className="flex items-center font-black hover:text-tertiary transition-colors">
          Home
        </Link>
        <Link to="/about" className="flex items-center font-black hover:text-tertiary transition-colors">
          About
        </Link>
        <Link to="/projects" className="flex items-center font-black hover:text-tertiary transition-colors">
          Projects
        </Link>
        <Link to="/contact" className="flex items-center font-black hover:text-tertiary transition-colors">
          Contact
        </Link>
          </div>
  );
}

export default function AppNavbar() {

  return (
    <Navbar className="my-auto mx-auto max-w-screen-2xl px-3 py-6">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 font-black hover:text-tertiary cursor-pointer py-1.5"
        >
          Gerard
        </Typography>
        <div>
          <NavList />
        </div>
      </div>
    </Navbar>
  );
}
