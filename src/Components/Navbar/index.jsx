import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <span className="animate-slidein [--slidein-delay:300ms] opacity-0 self-center text-2xl font-semibold whitespace-nowrap text-white">
          LOGO
        </span>

        <div className="animate-slidein [--slidein-delay:300ms] opacity-0 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            to="/"
            className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm px-4 py-2 text-center hover:scale-110 duration-300"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
