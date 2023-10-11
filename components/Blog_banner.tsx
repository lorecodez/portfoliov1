import React from 'react'

export default function Blog_banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold py-5 mb-10'>
        <div>
            <h1 className='text-7xl text-left'>Lorenzo&apos;s Blog</h1>
        </div>
        <p className='mt-5 text-gray-600 max-w-sm px-1'>
            New Project Features | The lastest in technology | Other hobbies & More!
        </p>
    </div>
  )
}
