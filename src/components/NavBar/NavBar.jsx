import React from 'react'

function NavBar() {
  return (
    <div className="bg-primary flex justify-between">
        <h1 className='text-4xl self-center font-mono pt-4'>Portfolio</h1>
        <div className='flex gap-4 items-end'>
            <h1 className=' cursor-pointer h-full pb-2 px-2 hover:bg-secondary flex items-end transition-all'>About</h1>
            <h1 className='h-full cursor-pointer pb-2 px-2 hover:bg-secondary flex items-end'>Projects</h1>
            <h1 className='h-full cursor-pointer pb-2  px-2 hover:bg-secondary flex items-end'>Contact</h1>
        </div>
    </div>
  )
}

export default NavBar