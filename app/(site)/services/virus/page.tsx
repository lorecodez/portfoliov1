import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import virus from '@/app/(site)/images/virus.png'

export default function Virus() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-center text-3xl font-bold primary-bg drop-shadow pb-10 pt-4'>
        Virus & Malware Removal
      </h1>
      <div className='flex flex-col items-center'>
        <p className='px-2'>
          In my Virus and Malware Removal Service, I take pride in offering swift and personalized solutions to your digital security concerns. When you&apos;re facing a virus or malware infection, you don&apos;t have time to spare, and that&apos;s why I respond quickly to alleviate your stress. I understand that each infection is unique, and I tailor my approach to your specific needs. I take every precaution to back up your data, ensuring its safety during the removal process. With comprehensive scans, I leave no room for ambiguity, meticulously identifying and removing every trace of the infection with secure and effective methods. My service doesn&apos;t stop at removal; I&apos;m here to guide you on preventative measures to safeguard your digital world from future threats, whether it&apos;s through software updates, security protocols, or installing effective antivirus programs. Your digital security is my priority, and I am committed to providing you with a clean, secure, and protected digital environment.
        </p>
        <p className='text-center w-fit py-6 font-bold'>
          Call <a href='tel:+17758154240' className='underline'>+1(775) 815-4240</a> to get a <span className='underline'>Quote</span> or <Link href='/contact' className='hover:text-blue-600'> click here to send a message</Link>
        </p>
      </div> 
      <picture className='w-full bg-slate-900 flex justify-center'>
          <Image
            src={virus}
            alt='Computer Virus' 
            width={500} 
            height={500}
          />
      </picture>
    </div>
  )
}
