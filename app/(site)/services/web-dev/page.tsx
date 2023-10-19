import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dev from '@/app/(site)/images/dev.jpg'


export default function web_dev() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-3xl font-bold primary-bg drop-shadow pb-10 pt-4'>
        Web Development
      </h1>
      <div className='flex flex-col items-center'>
        <p className='px-2'>
          In my Web Development Service, I bring your digital visions to life. Whether you&apos;re a small business looking to establish an online presence, an individual pursuing a personal website, or seeking to upgrade your existing site, I&apos;ve got you covered. With a keen eye for design, user experience, and functionality, I craft websites that not only look great but also perform exceptionally. From custom website design to e-commerce solutions, responsive development, and ongoing maintenance, I&apos;m committed to creating a digital space that reflects your unique identity and serves your goals. Your success in the online realm is my passion, and I&apos;m here to ensure that your website stands out in the ever-evolving digital landscape.
        </p>
        <p className='text-center w-fit py-6 font-bold'>
          Call <a href='tel:+17758154240' className='underline'>+1(775) 815-4240</a> to get a <span className='underline'>Quote</span> or <Link href='/contact' className='hover:text-blue-600'> click here to send a message</Link>
        </p>
      </div> 
      <picture className='w-full bg-slate-900 flex justify-center'>
          <Image
            src={Dev}
            alt='Development' 
            width={500} 
            height={500}
          />
      </picture>
    </div>
  )
}
