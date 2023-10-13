import React from 'react'
import {PortableTextBlock} from 'sanity';
import Image from 'next/image';
import Link from 'next/link';
import category from '@/sanity/schemas/category';
import {BlogPost} from '@/typings';
import { getBlogPosts } from '@/sanity/schemas/sanity-utils';

// type BlogPost = {
//   _id: string;
//   _createdAt: Date;
//   name: string;
//   slug: string;
//   image: string;
//   url: string;
//   content: PortableTextBlock[];

// }

type Props = {
  posts: BlogPost[];
};


export default async function BlogList() {

  
  const posts = await getBlogPosts();

  posts? posts.map((post: BlogPost) => (console.log(post.title +':'+ post.categories))) : console.log('fetch error');

  return (
    <section id='blog-list' className='w-full h-full'>
      <hr className='border-slate-900 mb-10' />
      <menu className='w-full h-full grid lg:grid-cols-2 md:gird-cols-2 gap-8'>
        {posts.map(post => (
          <Link key={post._id} href={`/posts/${post.slug}`} className='group cursor-pointer flex-col justify-center w-'>
            <div className=' w-full h-80 drop-shadow group-hover:scale-105 transition-transform duration-200 ease-out flex justify-center'>
              <Image
                className='object-cover h-80 w-full rounded-lg border border-grey-500 lg:object-center'
                src={post.mainImage}
                alt={post.author.name}
                width={750} 
                height={10}
              />
              
              <div className='bottom-0 z-10 w-full absolute bg-opacity-30 bg-black rounded-lg drop-shadow text-white p-3 flex justify-between'>
                <div>
                  <p className='font-bold'>
                    {post.title}
                  </p>
                  <p>
                    {/* {new Date{post._createdAt}.toLocaleDateString{"en-US", {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      }
                    }} */}
                    {/* {post._createdAt.toLocaleDateString()} */}
                    {new Date(post._createdAt).toLocaleDateString()}
                  </p>
                  
                </div>
                <div className='flex flex-row md:gap-y-2 gap-x-2 items-center'>
                    {post.categories.map(category => (
                      <div key={category} className='bg-gray-100 rounded-lg text-gray-500 font-bold py-1 px-4 whitespace-nowrap hover:bg-blue-500 hover:text-blue-100 transition mr-1 text-center h-fit'>
                        <p>{category.title}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className='mt-5 flex-1'>
              <p className='underline text-lg font-bold'>{post.title}</p>
              <p className='line-clamp-2 text-gray-500'>{post.description}</p>
            </div>
          </Link>
        ))}
      </menu>
    </section>
  )
}
