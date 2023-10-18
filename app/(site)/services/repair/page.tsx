import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Repair from '@/app/(site)/images/repair.png'

export default function repair() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-3xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow pb-10 pt-4'>
        Desktop & Laptop Repiar
      </h1>
      <div className='flex flex-col items-center'>
        <p className='px-2'>
        In my Desktop and Laptop Repair Service, I&apos;m here to provide you with comprehensive solutions to all your computer issues. When your trusted devices encounter problems, I understand the urgency and frustration that can come with it. That&apos;s why I offer a fast and efficient response to get your technology back in working order swiftly. Whether it&apos;s hardware troubleshooting, software installation, configuration, or even data backup and recovery, I&apos;ve got you covered. I&apos;m committed to addressing your specific needs, ensuring that your computer or laptop is not just repaired, but optimized for peak performance. Your technology is a critical part of your daily life, and I&apos;m dedicated to ensuring it runs seamlessly, allowing you to focus on what matters most.
        </p>
        <p className='text-center w-fit py-6 font-bold'>
          Call <a href='tel:+17758154240' className='underline'>+1(775) 815-4240</a> to get a <span className='underline'>Quote</span> or <Link href='/contact' className='hover:text-blue-600'> click here to send a message</Link>
        </p>
      </div> 
      <picture className='w-full bg-slate-900 flex justify-center'>
          <Image
            src={Repair}
            alt='Repairing' 
            width={500} 
            height={500}
          />
      </picture>
    </div>
  )
}
