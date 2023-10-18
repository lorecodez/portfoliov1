import React from 'react';
import { getPost } from '@/sanity/schemas/sanity-utils';
import Image from 'next/image';
import {BlogPost} from '@/typings';

type Props = {
    params: {slug: string};
};

export default async function post({ params }: Props) {


    const slug = params.slug;
    const post = await getPost(slug);
    console.log(slug);
    console.log(post);

    return params.slug;

//   return (
//     <article className='px-10 pb-28'>
//         <section className='space-y-2 border border-gray-500 text-white'>
//             <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
//                 <picture className='absolute top-0 w-full h-full opacity-10'>
//                     <Image
//                         className='object-cover object-center mx-auto'
//                         src={post.mainImage}
//                         alt={post.author.name}
//                         fill
//                     />
//                 </picture>
//                 <section className='p-5 bg-grey w-full'>
//                     <div className='flex flex-col md:flex-row justify-between gap-y-5'>
//                         <div>
//                             <h1 className='text-4xl font-extrabold'>
//                                 {post.title}
//                             </h1>

//                             <p>
//                                 {new Date(post._createdAt).toLocaleDateString()}
//                             </p>
//                         </div>
//                         <div className='flex items-center space-x-2'>
//                             <Image
//                                 className='rounded-full'
//                                 src={post.author.image}
//                                 alt={post.author.name}
//                                 height={40}
//                                 width={40}
//                             />
//                             <div className='w-54'>
//                                 <h3 className='text-lg font-bold'>
//                                     {post.author.name}
//                                 </h3>
//                                 <div>
//                                     {/* author bio */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </section>
//     </article>
//   )
}
