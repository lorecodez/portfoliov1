import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa6';

function Social_media() {
  return (
    <div className='flex flex-row items-center gap-3 w-full justify-center mt-9'>
        <Link href='https://www.linkedin.com/in/lorenzowashington-abb274122'><FaLinkedin size='30px' className='hover:scale-105 transition'/></Link>
        <Link href='https://github.com/lorecodez'><FaGithub size='30px' className='hover:scale-105 transition'/></Link>
        <Link href='https://twitter.com/lorecodez'><FaTwitter size='30px' className='hover:scale-105 transition'/></Link>
        <Link href='https://www.instagram.com/lorecodez/'><FaInstagram size='30px' className='hover:scale-105 transition'/></Link>
        <Link href='https://www.facebook.com/lorecodez'><FaFacebook size='30px' className='hover:scale-105 transition'/></Link>   
    </div>
    
  )
}

function Social_media_s() {
  return (
    <>
      <h3 className='text-bold'>Stay Contected</h3>
      <div className='flex flex-row items-center gap-3 w-fit justify-start mt-4 '>
          <Link href='https://www.linkedin.com/in/lorenzowashington-abb274122'><FaLinkedin size='30px' className='hover:scale-105 transition'/></Link>
          <Link href='https://github.com/lorecodez'><FaGithub size='30px' className='hover:scale-105 transition'/></Link>
          <Link href=''><FaTwitter size='20px' className='hover:scale-105 transition'/></Link>
          <Link href=''><FaInstagram size='20px' className='hover:scale-105 transition'/></Link>
          <Link href=''><FaFacebook size='20px' className='hover:scale-105 transition'/></Link>   
      </div>
    </>
    
  )
}

export default Social_media;
