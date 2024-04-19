import React from 'react'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  
  }
  return (
    <div id="contact" className='bg-primary/5 pt-[70px] my-12 px-8 md:px-32'>
      <hr className='mb-8'/>
      <h1 className='text-center text-2xl mb-4'>Lets Get in Touch</h1>
      <form  onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex gap-2 h-12'>
        <input type="text" placeholder="First Name" className='w-full p-2 outline-none rounded-md text-primary'/>
        <input type="text" placeholder="Last Name" className='w-full p-2 outline-none rounded-md text-primary'/>
        </div>
        <input className='flex gap-4 h-12 w-full text-primary rounded-md outline-none p-2' type="email" placeholder="Email"/>
        <textarea placeholder="Message" className='w-full text-primary outline-none p-2 rounded-md'></textarea>
        <input className='flex bg-secondary text-center items-center outline-none cursor-pointer justify-center rounded-md h-12 w-full p-2' type="submit" value="Send" onClick={handleSubmit}></input>
      </form>
      <hr className='mt-8' />
    </div>
  )
}

export default Contact