import React from 'react';
import Social_media_s from './Social_media_s';
import Link from 'next/link';
import { FaEnvelope, FaPhone } from "react-icons/fa6"; 


export default function Footer() {
  return (
    <div className='h-fit bottom-0 items-center justify-center w-full '>
        <section className='flex flex-col items-center '>
            <footer className="w-full flex flex-col lg:flex-row items-center justify-center">
                <div className='w-1/3 h-[112px] flex-grow'>
                    <h3 className='font-bold text-center mt-4 h-fit'>Connect With Me</h3>
                    <Social_media_s/>
                </div>
                <div className='w-1/3'>
                    <h2 className='text-center font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent '>
                        Thanks For Visiting
                    </h2>
                    {/* <p></p> */}
                </div>
                <nav className='w-1/3 flex items-center justify-center flex-col h-fit'>
                    <h2 className='font-bold mt-4'>Navigate</h2>
                    {/* links go here */}
                    <menu className='grid grid-cols-2 gap-x-4 w-max gap-y-0 md:text-left text-center'>
                        <li className='hover:underline '><Link href='/about-me'>About Me</Link></li>
                        <li className='hover:underline '><Link href='/contact'>Contact</Link></li>
                        <li className='hover:underline '><Link href='/blog'>Blog</Link></li>
                        <li className='hover:underline '><Link href='https://www.dropbox.com/scl/fi/pmukc709z5phi7po7x1ih/lorenzo-washington-resume.docx?rlkey=dr0haej8jmvt2xug1is8g9cwp&dl=0'>Resume</Link></li>
                        <li className='hover:underline '><Link href='/services'>Services</Link></li>
                        <li className='hover:underline '><Link href='/minecraft'>MC Server</Link></li>    
                    </menu>
                </nav>
            </footer>
            <footer className="w-full flex flex-col items-center mt-3">
                <div className="w-full flex flex-row items-center justify-center">
                    {/* contact info */}
                    <FaPhone/> 
                    <a href='tel:+17758154240' className='w-fit text-center px-1'>
                        +1(775) 815-4240 &#x2022;
                    </a>
                    <FaEnvelope/> 
                    <a href='mailto:contact@lorenzowashington.com' className='wit-fit text-center px-1'>
                        contact@lorenzowashington.com
                    </a>
                </div>
                <div className="w-full text-center">
                    <span> © 2023 All rights reserved </span>
                    <Link href='/privacy' className='px-2 hover:underline'> Privacy Policy </Link>
                </div>
                
            </footer>
        </section>
    </div>
  )
}
