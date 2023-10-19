import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Support from '@/app/(site)/images/support.jpg';

export default function support() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-3xl font-bold primary-bg drop-shadow pb-10 pt-4'>
        Technical Support
      </h1>
      <div className='flex flex-col items-center'>
        <section>
          <h3 className='font-bold text-2xl text-center p-2'>Remote Technical Support</h3>
          <p className='px-2'>
            In my Remote Technical Support Service, I bring the power of technology right to your fingertips. When technical issues arise, I understand that waiting for on-site assistance isn&apos;t always an option. That&apos;s why I offer remote support, providing a quick, efficient, and secure solution to your computer problems. Whether it&apos;s software glitches, network issues, or troubleshooting, I&apos;m just a call or message away. I&apos;ll remotely access your system, diagnose the problem, and provide real-time guidance or fixes. My goal is to minimize downtime, maximize convenience, and ensure that your technology is up and running smoothly, so you can get back to what you do best. Your digital world is my concern, and I&apos;m here to keep it running seamlessly from afar.
          </p>
        </section>
        <section className='my-2'>
        <h3 className='font-bold text-2xl text-center p-2'>On-Site Technical Support</h3>
          <p className='px-2'>
            In my Onsite Technical Support Service, I bring hands-on expertise directly to your doorstep. When technology hiccups require a physical presence, I&apos;m ready to step in and provide immediate assistance. Whether it&apos;s setting up a network, troubleshooting hardware issues, or configuring complex systems, I&apos;m there to ensure that your technology runs smoothly. My aim is to reduce downtime, enhance efficiency, and deliver personalized solutions that meet your specific needs. Your convenience and peace of mind are paramount, and I&apos;m here to make sure your technology is operating at its best with on-site support.
          </p>
        </section>
        <p className='text-center w-fit py-6 font-bold'>
          Call <a href='tel:+17758154240' className='underline'>+1(775) 815-4240</a> to get a <span className='underline'>Quote</span> or <Link href='/contact' className='hover:text-blue-600'> click here to send a message</Link>
        </p>
      </div> 
      <picture className='w-full bg-slate-900 flex justify-center'>
          <Image
            src={Support}
            alt='Support' 
            width={500} 
            height={500}
          />
      </picture>
    </div>
  )
}
