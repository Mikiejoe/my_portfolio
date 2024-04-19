import React from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";

function ResponsiveSideBar({ open,setOpen, scrollToSection }) {
  const setMenuState = ()=>{
    setOpen(!open)
  }

  const Links = [
    {
      name: "About",
      id: "about",
    },
    {
      name: "Projects",
      id: "portfolio",
    },
    {
      name: "Skills",
      id: "skills",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ]

  return (
    <div className={`bg-primary  drop-shadow-lg shadow-2xl rounded-s-lg h-fit px-8 right-[${open?"0px":"0"}] absolute z-10`}>
      <div className="flex flex-col gap-4 items-center py-4">
           {
              Links.map((link, index) => (
                <Link
                  key={index}
                  to={`#${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer h-full pb-2 px-2 flex items-end border-b-2 border-primary hover:border-secondary transition-all"
                >
                  {link.name}
                </Link>
              ))
           }
            
      </div>
          </div>
  );
}

export default ResponsiveSideBar;
