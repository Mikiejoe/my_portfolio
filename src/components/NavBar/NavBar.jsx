import React,{useState} from 'react'
import { FaHamburger } from 'react-icons/fa';
import { MdMenu, MdOutlineMenu, MdOutlineMenuOpen } from 'react-icons/md';
import { Link } from 'react-router-dom'
import ResponsiveSideBar from './ResponsiveSideBar';

function NavBar() {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    setOpen(!open)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [open,setOpen] = useState(false)
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

    <div className=" w-full overflow-x-hidden  ">
        
        <div className='bg-primary top-0 fixed z-[999] w-full px-8 py-2 md:px-32 shadow-lg'>
        <div className='flex justify-between items-center'>
          <h1 onClick={() => scrollToSection("home")} className='text-4xl self-center cursor-pointer font-mono pt-4 '>Portfolio</h1>
        <div className='md:hidden'>
        {open ? (
        <MdOutlineMenuOpen size={32} onClick={setMenuState} />
      ) : (
        <MdOutlineMenu size={32} onClick={setMenuState} />
      )}
        </div>
        <div className='md:flex hidden gap-4 items-end'>
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
        <div className='transition-all duration-500 md:hidden ease-in-out'>
        {open && <ResponsiveSideBar open={open} setOpen={setOpen} scrollToSection={scrollToSection}/>}
        </div>
        </div>
    </div>
  )
}

export default NavBar