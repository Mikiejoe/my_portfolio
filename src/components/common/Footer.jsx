import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BsEnvelope,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsMailbox,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";
import { MdMail } from "react-icons/md";

function Footer() {
  const [year, setYear] = useState(null);
  const getYear = () => {
    const today = new Date();
    setYear(today.getFullYear());
  };
  useEffect(() => {
    getYear();
  }, []);
  return (
    <div id="contact" className="bg-primary text-white p-4">
      <div className="flex items-center justify-center space-x-4">
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
      <div className="text-center p-2">&copy; {year} Michael Joseph</div>
    </div>
  );
}

export default Footer;
