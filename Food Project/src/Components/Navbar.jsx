import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../Img/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const middleNav = [
    { title: "AllFood", link: "search", active: true },
    { title: "Korean", link: "korean" },
    { title: "Italian", link: "italian" },
    { title: "other", link: "french" },
  ];

  return (
    <div className="container mx-auto p-6 px-4 md:px-6">
      <div className="flex flex-row items-center justify-between space-x-2">
        {/* right nav/ logo */}
        <div className="img">
          <Link to={"/"}>
            <h1 className="flex items-center text-2xl font-bold">
              <img src={logo} alt="" className="w-20" />
              chop<span className="text-2xl text-brightYellow">R</span>ite
            </h1>
          </Link>
        </div>
        {/* center nav */}
        <div className="hidden md:flex md:flex-row md:space-x-6 ">
          {middleNav.map((navItem, i) => (
            <li className="list-none" key={i}>
              <Link
                to={`/${navItem.link}`}
                className={navItem.active ? "text-black" : "text-gray-600"}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </div>

        {/* right button */}
        <div className="hidden md:inline-block btn">
          <Link to="/snacks">
            <li className=" list-none p-3 px-6 rounded bg-brightYellow text-white ">
              Snacks
            </li>
          </Link>
        </div>

        {/* mobile menu-icon */}
        <span
          className="md:hidden text-black text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AiOutlineMenu />
        </span>

        {/* mobile menu nav */}
        {menuOpen ? (
          <div className=" absolute z-10 w-1/2 right-0 top-0 flex flex-col items-center space-y-12 bg-brightYellow h-screen md:hidden">
            <li
              className="list-none mt-6 text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <AiOutlineClose />
            </li>
            {middleNav.map((navItem, i) => (
              <li className="list-none text-2xl" key={i}>
                <Link to={navItem.link} className="text-white">
                  {navItem.title}
                </Link>
              </li>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
