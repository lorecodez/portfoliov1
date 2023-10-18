import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Data from '../../images/Data.jpg'

export default function data() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow pb-10 pt-4'>
        Data Transfer
      </h1>
      <div className='flex flex-col items-center'>
        <p className='px-2'>
          In the world of web development and computer services, data transfer is a critical aspect of many projects. Whether you&apos;re moving data from an old website to a new one, transitioning to a new software system, or simply ensuring the secure migration of your important information, My Data Transfer Service offers a seamless and secure solution for all your data migration needs.
        </p>
        <p className='text-center w-fit py-6 font-bold'>
          Call <a href='tel:+17758154240' className='underline'>+1(775) 815-4240</a> to get a <span className='underline'>Quote</span> or <Link href='/contact' className='hover:text-blue-600'> click here to send a message</Link>
        </p>
      </div> 
      <picture className='w-full bg-slate-900 flex justify-center'>
          <Image
            src={Data}
            alt='Hard Drive' 
            width={500} 
            height={500}
          />
      </picture>
    </div>
  )
}
