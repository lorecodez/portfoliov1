import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PC from '../../images/PC.jpg'

export default function builds() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow pb-10 pt-4'>
        Custom PC Builds
      </h1>
      <div className='flex flex-col items-center'>
        <p>
          Looking for something specific, maybe a little more powerful than what is on the market, I can build you a system tailored to your specific needs. Anything from number-crunching in Excel, to gaming, to running professional video editing software. You can supply your own parts, or I can help pick them for you, I will work with you to build you the best system possible for your needs. Whether you are ready to buy, just shopping around or want to see what I can offer.
        </p>
        <p className='text-center w-fit py-6 font-bold'>
          Call <a href='tel:+17758154240' className='underline'>+1(775) 815-4240</a> to get a <span className='underline'>Quote</span> or <Link href='/contact' className='hover:text-blue-600'> click here to send a message</Link>
        </p>
      </div>
      <picture className='w-full bg-slate-900 flex justify-center'>
          <Image
            src={PC}
            alt='Custom PC' 
            width={500} 
            height={500}
          />
      </picture>
    </div>
  )
}
