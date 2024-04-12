import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
function Hero() {
  return (
    <div className="h-[50vh] flex items-center py-6">
      <div className="">
        <p>Hello I am</p>
        <h1 className="text-5xl font-bold">Joseph</h1>
        <h1 className="text-5xl font-bold">Omondi</h1>
        <p className="text-white/50">Full Stack Developer</p>
       <div>
            <p>Find me on</p>
            <div className="flex gap-2">
                <Link to='https://www.github.com/Mikiejoe"'>
                    <FaGithub size={24}/>
                </Link>
                <Link to='https://www.twitter.com/omoshjoe02"'>
                    <FaTwitter size={24}/>
                </Link>
            </div>
       </div>
      </div>
    </div>
  );
}

export default Hero;
