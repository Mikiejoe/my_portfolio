import React, { useEffect, useState } from "react";
import { FaCross, FaX } from "react-icons/fa6";
import { MdCancel, MdMenu, MdOutlineCancel } from "react-icons/md";
import { TbMultiplier05X } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  const showNavbar = () => {
    setIsVisible(!isVisible);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    document.title =
      "Joseph Omondi - " + id.charAt(0).toUpperCase() + id.slice(1);
    setIsVisible(!isVisible);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.hash.startsWith("#")) {
      scrollToSection(location.hash.split("#")[1]);
    }
  }, []);

  return (
    <div
      onClick={showNavbar}
      className={`w-full fixed top-0 left-0 ${
        isFixed ? "fixed top-0 left-0 shadow-lg" : ""
      }`}
    >
      <div className=" p-4 bg-primary flex">
        <div className="hidden md:flex justify-center w-full items-center">
          <div className="text-white flex space-x-4">
            <Link
              to="/#home"
              onClick={() => scrollToSection("home")}
              className={`border-b-2 border-transparent  hover:border-secondary hover:text-secondary p-2`}
            >
              Home
            </Link>
            <Link
              to="/#about"
              onClick={() => scrollToSection("about")}
              className={`border-b-2 border-transparent hover:border-secondary hover:text-secondary p-2`}
            >
              About
            </Link>
            <Link
              to="/#projects"
              onClick={() => scrollToSection("projects")}
              className={`border-b-2 border-transparent hover:border-secondary hover:text-secondary p-2`}
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              onClick={() => scrollToSection("contact")}
              className={`border-b-2 border-transparent hover:border-secondary hover:text-secondary p-2`}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex space-x-2 transition-all ease-in text-white md:hidden">
          <div className="w-12">
            {isVisible ? (
              <FaX onClick={showNavbar} size={24} />
            ) : (
              <MdMenu onClick={showNavbar} size={28} />
            )}
          </div>
          <h1 className="text-lg font-bold text-secondary">Joseph Omondi</h1>
        </div>
      </div>
      <div
        className={`text-white h-[91vh] ${
          isVisible ? "left-[0]" : "left-[-110%]"
        } bg-primary w-screen z-[9999] absolute transition-all ease-in duration-500 flex flex-col md:hidden px-4`}
        onScroll={showNavbar}
      >
        <Link
          to="/"
          onClick={() => {
            setIsVisible(!isVisible);
            scrollToSection("home");
          }}
          className={`border-b-2 border-transparent  hover:border-secondary hover:text-secondary p-2`}
        >
          Home
        </Link>
        <Link
          to="#"
          onClick={() => {
            setIsVisible(!isVisible);
            scrollToSection("about");
          }}
          className={`border-b-2 border-transparent hover:border-secondary hover:text-secondary p-2`}
        >
          About
        </Link>
        <Link
          to="#"
          onClick={() => {
            setIsVisible(!isVisible);
            scrollToSection("projects");
          }}
          className={`border-b-2 border-transparent hover:border-secondary hover:text-secondary p-2`}
        >
          Projects
        </Link>
        <Link
          to="#"
          onClick={() => {
            setIsVisible(!isVisible);
            scrollToSection("contact");
          }}
          className={`border-b-2 border-transparent hover:border-secondary hover:text-secondary p-2`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
