"use client"

import Contact_form from '../../../components/Contact_form';
import Social_media from '@/components/Social_media';

export default function contact() {
    return (
        <div className='flex flex-col items-center h-full'>
            <Contact_form/>
            <div className='w-fit justify-center'>
                {/* <h1 className='text-center my-4'>Contact Info:</h1> */}
                <div className='flex flex-col pt-3'>
                    <a href='tel:+17758254240' className='w-fit px-3 font-bold'>Phone &#x2022; +1(775) 815-4240</a>
                    <a href='mailto:contact@lorenzowashington.com' className='w-fit px-3 font-bold'>Email &#x2022; contact@lorenzowashington.com</a>
                </div>
                <Social_media/>
            </div>
        </div>
    );
}