import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Img from "../../assets/image.png"
function Hero() {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="space-y-6">
        <p>Hello I am</p>
        <h1 className="text-5xl tracking-widest font-bold">Joseph <br />Omondi</h1>
        <p className="text-white/50">Full Stack Developer</p>
       <div>
            <p>Find me on</p>
            <div className="flex gap-2">
                <Link to='https://www.github.com/Mikiejoe'>
                    <FaGithub size={24}/>
                </Link>
                <Link to='https://www.twitter.com/omoshjoe02'>
                    <FaTwitter size={24}/>
                </Link>
            </div>
       </div>
      </div>
      <div className=" mt-5">
        <img src={Img} alt="Joseph Omondi" className="w-96 object-c h-150"/>
        </div>
    </div>
  );
}

export default Hero;
