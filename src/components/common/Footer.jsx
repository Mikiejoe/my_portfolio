import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {
  BsEnvelope,
  BsFacebook,
  BsGithub,
  BsMailbox,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";

function Footer() {
  const [year,setYear] = useState(null)
  const getYear = ()=>{
    const today = new Date()
    setYear(today.getFullYear());
  }
  useEffect(()=>{
    getYear()
  },[])
  return (
    <div id='contact' className='bg-primary text-white p-4'>
      
      <div className="flex items-center justify-center space-x-4">
          <Link to="https://x.com/omoshjoe02">
            <BsTwitterX size={28} />
          </Link>
          <Link to="https://github.com/Mikiejoe">
            <BsGithub size={28} />
          </Link>
          <BsFacebook size={28} />

          <Link to="mailto:omoshojoe02@gmail.com">
            <BsEnvelope size={28} />
          </Link>
          <BsWhatsapp size={28} />
        </div>
        <div className='text-center p-2'>
          &copy; {year} Michael Joseph
        </div>
      </div>
  
  )
}

export default Footer