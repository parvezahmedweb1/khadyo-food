import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiMenu, HiShoppingCart } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import logo from "../../images/logo2.png";
const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="bg-home">
      <div className="container mx-auto flex justify-between items-center py-4 ">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu-list">
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Menu</a>
            </li>
            <li>
              <a href="/#">Shop</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Review</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block cart">
          <HiShoppingCart size={25} />
        </div>
        {/* mobile menu */}
        <div
          onClick={() => setNavOpen(!navOpen)}
          className="block md:hidden z-10 cursor-pointer"
        >
          {navOpen ? <IoMdClose size={25} /> : <HiMenu size={25} />}
        </div>

        <ul
          onClick={() => setNavOpen(!navOpen)}
          className={
            navOpen
              ? "absolute left-[0] top-[-0] py-4 px-4 bg-slate-100/90 w-full h-screen transition-all delay-100"
              : "absolute left-[0] top-[-100%]"
          }
        >
          <div>
            <img src={logo} alt="" />
          </div>
          <li className="my-4 flex justify-center">
            <a href="/#">Home</a>
          </li>
          <li className="my-4 flex justify-center">
            <a href="/#">Menu</a>
          </li>
          <li className="my-4 flex justify-center">
            <a href="/#">Shop</a>
          </li>
          <li className="my-4 flex justify-center">
            <a href="/#">Blog</a>
          </li>
          <li className="my-4 flex justify-center">
            <a href="/#">Review</a>
          </li>
          <li className="my-4 flex justify-center">
            <a href="/#">Contact</a>
          </li>
          <div className="border py-3 rounded-md bg-indigo-300 flex justify-center">
            <HiShoppingCart className="" size={25} />
          </div>
          <div className="flex justify-around my-6">
            <FaFacebook size={25} />
            <FaInstagram size={25} />
            <FaGithub size={25} />
            <FaLinkedinIn size={25} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
