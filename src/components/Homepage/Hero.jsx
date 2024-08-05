import React from "react";
import {
  BsEnvelope,
  BsFacebook,
  BsGithub,
  BsMailbox,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";
import { GiMailbox } from "react-icons/gi";
import { Link } from "react-router-dom";

function Hero() {
  const name = "< Joseph Omondi />"
  return (
    <div id="home" className="text-white relative flex justify-between w-full items-center bg-gray-00 h-full">
      <div className="z-[999] bg-primary/70 flex flex-col justify-center w-full py-[60px] pt-[120px] pl-4 md:px-10 h-full ">
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
          <Link target="blank" to="https://x.com/omoshjoe02">
            <BsTwitterX size={28} />
          </Link>
          <Link target="blank" to="https://github.com/Mikiejoe">
            <BsGithub size={28} />
          </Link>
          <BsFacebook size={28} color="#0000ff"/>

          <Link target="blank" to="mailto:omoshojoe02@gmail.com">
            <BsEnvelope size={28} color="#ff0000"/>
          </Link>
          <BsWhatsapp color="#00ff00" size={28} />
        </div>
      </div>
      <div className="absolute left-0 top bg-red-500 w-screen h-full ">
        <img src="/codebg.jfif" alt="" className="w-screen h-full  object-cover" />
      </div>
    </div>
  );
}

export default Hero;
