import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/" className="inline-flex items-center">
        <BookOpenIcon className="h-6 w-6 text-red-500" />
        <p className="ml-2 text-xl font-bold tracking-wide text-gray-700">
          Book<span className="text-red-500">Shop </span>
        </p>
      </Link>

      <div></div>
    </div>
  );
};

export default Navbar;
