import React from "react";
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaPhoneSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="text-center space-y-8 bg-primary/50 w-full">
      <h1 className="text-4xl">Portfolio</h1>
      <div className="flex justify-center">
        <Link
          to="#about"
          onClick={() => scrollToSection("about")}
          className=" cursor-pointer h-full pb-2 px-2 flex items-end transition-all"
        >
          About
        </Link>
        |
        <Link
          to="#portfolio"
          onClick={() => scrollToSection("portfolio")}
          className="h-full cursor-pointer pb-2 px-2 flex items-end"
        >
          Projects
        </Link>
        |
        <Link
          to="#skills"
          onClick={() => scrollToSection("skills")}
          className="h-full cursor-pointer pb-2 px-2 flex items-end"
        >
          Skills
        </Link>
        |
        <Link
          to="#contact"
          onClick={() => scrollToSection("contact")}
          className="h-full cursor-pointer pb-2  px-2 flex items-end"
        >
          Contact
        </Link>
      </div>
      <div className="flex justify-center gap-4">
        <a href="tel:+254740510778" className="text-sm">
          <FaPhoneSquare size={28}/>
        </a>
        <a href="mailto:omoshjoe02@gmail.com" className="text-sm">
          <FaEnvelopeSquare size={28}/>
        </a>
        <a href="https://www.github.com/Mikiejoe" className="text-sm">
          <FaGithubSquare size={28}/>
        </a>
        <a href="https://www.twitter.com/omoshjoe02" className="text-sm">
          <FaTwitterSquare size={28}/>
        </a>
      </div>
      <div className="absolute right-0 bg-white h-[1px] w-full"></div>
      <p className="flex items-center justify-center py-4">Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
