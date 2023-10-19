import React from 'react';
import { getPost } from '@/sanity/schemas/sanity-utils';
import Image from 'next/image';
import {BlogPost} from '@/typings';
import category from '@/sanity/schemas/category';
import { PortableText } from '@portabletext/react';
import {PortableTextBlock} from '@portabletext/types'
import { RichTextComponets } from '@/components/RichTextComponets';

type Props = {
    params: {slug: string};
};

type PortableText = PortableTextBlock;

export default async function post({ params }: Props) {


    const slug = params.slug;
    const post = await getPost(slug);
    console.log(slug);
    console.log(post);



  return (
    <article className='px-10 pb-28'>
        <section className='space-y-2 border border-gray-500 text-white'>
            <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
                <picture className='absolute top-0 w-full h-full opacity-10'>
                    <Image
                        className='object-cover object-center mx-auto'
                        src={post.mainImage}
                        alt={post.author.name}
                        fill
                    />
                </picture>
                <section className='p-5 bg-gray-500 w-full'>
                    <div className='flex flex-col justify-between gap-y-5 text-black'>
                        <div className='flex items-center justify-between w-full'>
                            <div>
                                <h1 className='text-4xl font-extrabold relative z-10'>
                                    {post.title}
                                </h1>

                                <p className='relative z-10'>
                                    {new Date(post._createdAt).toLocaleDateString()}
                                </p>
                            </div>

                            <div className='flex items-center space-x-2 justify-end'>
                                <Image
                                    className='rounded-full'
                                    src={post.author.image}
                                    alt=''
                                    height={40}
                                    width={40}
                                />
                                <div className='w-54 relative z-10'>
                                    <h3 className='text-lg font-bold'>
                                        {post.author.name}
                                    </h3>
                                    <div>
                                        {/* author bio */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center w-full justify-between'>
                            <p className='italic pt-18 w-2/3'>{post.description}</p>
                            <div className='flex md:flex-row flex-col items-center justify-end gap-2'>
                                {post.categories.map(category => (
                                <p key={category._id} className='bg-gray-100 rounded-lg text-gray-500 font-bold py-1 px-4 whitespace-nowrap text-center h-fit'>
                                    {category.title}
                                </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <PortableText value={post.body} onMissingComponent={false}/>
    </article>
  )
}
