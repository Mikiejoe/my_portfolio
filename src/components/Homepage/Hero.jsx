import React from "react";
import {
  BsGithub,
  BsTwitterX,
  BsWhatsapp,
  BsLinkedin
} from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";

function Hero() {
  const name = "< Joseph Omondi />";
  return (
    <div
      id="home"
      className="text-white bg-primary/70  relative flex justify-between w-full items-center bg-gray-00 h-full"
    >
      <div className="z-[999] bg-primary/70 md:px-24 flex flex-col justify-center w-full py-[60px] pt-[120px] pl-4 h-full ">
        <p className="text-xl">
          Hello, I am
          <br />
          <br />
          <span className="md:text-6xl text-3xl font-bold">{name}</span>
          <br />
          <br />
          Find me on:
        </p>
        <div className="flex mt-4 space-x-4">
          <Link to="https://x.com/omoshjoe02">
            <BsTwitterX size={28} />
          </Link>
          <Link to="https://github.com/Mikiejoe">
            <BsGithub size={28} />
          </Link>
          <Link to={"https://www.linkedin.com/in/joseph-michael-445111235/"}>
            <BsLinkedin size={28} />
          </Link>

          <Link to="mailto:omoshojoe02@gmail.com">
            <MdMail size={28} />
          </Link>
          <Link to="https://wa.me/254114400824">
            <BsWhatsapp size={28} />
          </Link>
        </div>
      </div>
      <div className="absolute left-0 top bg-red-500 w-screen h-full ">
        <img
          src="/codebg.jfif"
          alt=""
          className="w-screen h-full  object-cover"
        />
      </div>
    </div>
  );
}

export default Hero;
