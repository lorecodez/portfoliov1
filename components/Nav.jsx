'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

export default function Nav() {

  const [navBar, setNavBar] = useState(false);

  return (
    <header className='w-full flex flex-col items-center justify-center transition'>
      <div className='lg:hidden self-end mr-1'>
        <button onClick={() => setNavBar(!navBar)} className='outline-none hover:bg-blue-500 rounded-lg bg-gray-100 transition h-fit w-fit'>
          {navBar ? <FaXmark size='40px' className='button-hover'/> : <FaBars size='40px' className='button-hover' />}
        </button>
      </div>
      <nav className={`flex lg:flex-row ${navBar ? 'flex-col transition' : 'hidden lg:flex transition'} justify-between items-center lg:w-full w-fit`}>
        <Link href='/' onClick={() => setNavBar(!navBar)}  className='  lg:mb-0 mb-2 text-center bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-2xl font-bold drop-shadow hover:scale-105 transition'>
          Home
        </Link>
        <Link href='/services' onClick={() => setNavBar(!navBar)} className=' lg:my-0 my-2  text-center text-2xl font-bold drop-shadow hover:scale-105 transition'>
          Services
        </Link>
        <Link href='/blog' onClick={() => setNavBar(!navBar)} className=' lg:my-0 my-2 text-center text-2xl font-bold drop-shadow hover:scale-105 transition'>
          Blog
        </Link>
        <Link href='/about-me' onClick={() => setNavBar(!navBar)} className=' lg:my-0 my-2 text-center text-2xl font-bold drop-shadow hover:scale-105 transition'>
          About Me
        </Link>
        <Link href='/contact' onClick={() => setNavBar(!navBar)} className=' lg:my-0 my-2 text-center text-2xl font-bold drop-shadow hover:scale-105 transition'>
          Contact
        </Link>
      </nav>
    </header>
  )

}

