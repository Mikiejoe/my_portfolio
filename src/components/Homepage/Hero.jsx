import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelopeSquare,
  FaGithub,
  FaGithubSquare,
  FaTwitter,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
// import Img from "../../assets/image.png";
function Hero() {
  return (
    <div className="flex items-center w-full overflow-hidden overflow-x-hidden h-full  relative md:px-32 px-8 justify-between">
      <div className="self-center bg-primary/70 flex flex-col h-full w-full absolute md:relative z-[2] space-y-2 justify-center">
        <p className="text-[1.5rem] text-white/80">Hello I am</p>
        <p className="text-[5rem] flex flex-col leading-[64px] tracking-[.5rem] font-[900]">
        <span>Joseph</span><span>Omondi</span>          
        </p>
        <p className="text-white/50">Full Stack Developer</p>
        <div>
          <p className=" mt-4">Find me on</p>
          <div className="flex gap-2">
            <a href="https:wa.me/254114400824?text='Hello'" className="text-sm">
              <FaWhatsappSquare size={40} />
            </a>
            <a href="mailto:omoshjoe02@gmail.com" className="text-sm">
              <FaEnvelopeSquare size={40} />
            </a>
            <a href="https://www.github.com/Mikiejoe" className="text-sm">
              <FaGithubSquare size={40} />
            </a>
            <a href="https://www.twitter.com/omoshjoe02" className="text-sm">
              <FaTwitterSquare size={40} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute h-fit md:relative top-0 right-0 z-[1] md:z-[1] items-center justify-center flex md:mt-[9rem]">
        <img
          src="https://avatars.githubusercontent.com/u/99811467?v=4"
          alt="Joseph Omondi"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
