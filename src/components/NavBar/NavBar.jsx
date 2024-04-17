import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-primary px-32 flex justify-between">
        <h1 className='text-4xl self-center font-mono pt-4'>Portfolio</h1>
        <div className='flex gap-4 items-end'>
            <Link to="#about" onClick={() => scrollToSection("about")} className=' cursor-pointer h-full pb-2 px-2 hover:bg-secondary flex items-end transition-all'>About</Link>
            <Link to="#portfolio" onClick={() => scrollToSection("portfolio")} className='h-full cursor-pointer pb-2 px-2 hover:bg-secondary flex items-end'>Projects</Link>
            <Link to="#skills" onClick={() => scrollToSection("skills")} className='h-full cursor-pointer pb-2 px-2 hover:bg-secondary flex items-end'>Skills</Link>
            <Link to="#contact" onClick={() => scrollToSection("contact")} className='h-full cursor-pointer pb-2  px-2 hover:bg-secondary flex items-end'>Contact</Link>
        </div>
    </div>
  )
}

export default NavBar