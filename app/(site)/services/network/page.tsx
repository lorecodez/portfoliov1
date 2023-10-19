import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Network from '@/app/(site)/images/network.jpg';

export default function network() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-3xl font-bold primary-bg drop-shadow pb-10 pt-4'>
        Home Network Configuration
      </h1>
      <div className='flex flex-col items-center'>
        <section>
          <p className='px-2'>
            In my Home Network Service, I offer comprehensive solutions to ensure that your digital world at home runs seamlessly. From setting up and configuring your Wi-Fi network for optimal coverage to troubleshooting connectivity issues, I&apos;m here to make your home network experience hassle-free. I&apos;ll assess your unique requirements, address any security concerns, and provide expert guidance on optimizing network performance. Your home network is the backbone of your connected life, and I&apos;m dedicated to ensuring it&apos;s robust, secure, and tailored to your specific needs. With my help, you can enjoy uninterrupted connectivity and make the most of your digital devices within the comfort of your home.
          </p>
        </section>
        <p className='text-center w-fit py-6 font-bold'>
          Call <a href='tel:+17758154240' className='underline'>+1(775) 815-4240</a> to get a <span className='underline'>Quote</span> or <Link href='/contact' className='hover:text-blue-600'> click here to send a message</Link>
        </p>
      </div> 
      <picture className='w-full bg-slate-900 flex justify-center'>
          <Image
            src={Network}
            alt='router' 
            width={500} 
            height={500}
          />
      </picture>
    </div>
  )
}
