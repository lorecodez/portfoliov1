
import { FaEnvelope } from "react-icons/fa6"; 
import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact_form() {
    const form = useRef();

    const sendEmail = (e) => {
    //   e.preventDefault();
  
      emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            alert('Message sent.')
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <section>
            <form ref={form} onSubmit={sendEmail} >
                <fieldset className='flex flex-col border-2 items-center px-2 w-fit'>
                    <legend className='p-2 flex flex-row gap-2 items-center'>
                        <FaEnvelope/>
                        <h1 className='text-3xl font-bold'>
                            Send me a message
                        </h1>
                    </legend>
                    <label>Name</label>
                    <input type="text" name="user_name" placeholder="Your Full Name" className='border-2 whitespace-nowrap rounded-lg px-1'/>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder='Your Email' className='border-2 whitespace-nowrap rounded-lg px-1'/>
                    <label>Message</label>
                    <textarea name="message" className='border-2 whitespace-nowrap rounded-lg'/>
                    <input type="submit" value="Send" className='font-bold m-4 hover:scale-105 text-gray-500 hover:bg-blue-600 transition py-3 px-4  whitespace-nowrap rounded-lg bg-gray-100'/>
                </fieldset>
            </form>
        </section>
  )
}
