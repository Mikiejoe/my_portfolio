import React, { useEffect, useState } from "react";
import { FaCross, FaX } from "react-icons/fa6";
import { MdCancel, MdMenu, MdOutlineCancel } from "react-icons/md";
import { TbMultiplier05X } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation()

  const isCurrentLocation = (id)=>{
    const l = `#${id}`;
    return l===location.hash;
  }

  const showNavbar = () => {
    setIsVisible(!isVisible);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    setIsVisible(!isVisible);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
 
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
  
  
      if (window.scrollY > 60) { // Change 100 to your desired scroll position
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', showNavbar);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);
  const Links = [
    {
      name: "Home",
      id: "home",
    },

    {
      name: "About",
      id: "about",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];
  return (
    <div onClick={showNavbar} className={`w-full fixed top-0 left-0 ${isFixed ? 'fixed top-0 left-0 shadow-lg' : ''}`}>
      <div className=" p-4 bg-primary flex">
        <div className="hidden md:flex justify-center w-full items-center">
          <div className="text-white space-x-4">
            {Links.map((link, index) => (
              <Link
                key={index}
                to={`#${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`border-b-2 border-transparent ${isCurrentLocation(link.id) ? "border-secondary":"border-transparent"} hover:border-secondary hover:text-secondary p-2`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 text-white md:hidden">
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
        {Links.map((link, index) => (
          <Link
            key={index}
            to={`#${link.id}`}
            onClick={() => scrollToSection(link.id)}
            className={`border-b-2 border-transparent ${isCurrentLocation(link.id) ? "border-secondary":"border-transparent"} hover:border-secondary hover:text-secondary p-2`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
