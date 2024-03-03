import React from 'react'
import { Button } from './ui/button'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-[60px] px-5'>
      <img src="/assets/images/logo.png" className='w-[250px]' alt="" />
        <ul className='flex justify-center items-center'>
            <li className=' px-5 py-2 text-xl'><a href="#">Home</a></li>
            <li className=' px-5 py-2 text-xl'><a href="#">Properties for Sale</a></li>
            <li className=' px-5 py-2 text-xl'><a href="#">Contact Me</a></li>
        </ul>

        <div></div>
    {/* <Button className='text-xl' variant={'link'}>Sign in</Button> */}
    </nav>
  )
}

export default Navbar