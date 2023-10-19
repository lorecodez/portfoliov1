import { getProject } from '@/sanity/schemas/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image'

type Props = {
    params: {project: string};
};

export default async function Project({ params }: Props) {

    const slug = params.project;
    const project = await getProject(slug);
    return (
        <div className='h-fit py-15'>
            <header className='flex justify-between items-center h-full pt-5'>
                <h1 className='primary-bg bg-clip-text text-transparent text-5xl font-extrabold drop-shadow h-ful py-2 ml-1'>{project.name}</h1>
                <a href={project.url} title='View Project' target='_blank' className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-blue-500 hover:text-blue-100 transition mr-1'>
                    View Project
                </a>
            </header>

            {/* content goes here */}
            <div className='text-lg text-grey-700 mt-5 mx-1'>
                <PortableText value={project.content}/>
            </div>
            {/* image goes here */}

            <picture className='h-400'>
                {
                project.image ? <Image 
                    src={project.image} 
                    alt={project.name} 
                    width={1920} 
                    height={400} 
                    className='mt-10 border-2 border-gray-700 obejct-cover rounded-xl'/> 
                    : <samp>Image not found</samp>
                }
            </picture>

        </div>
    );
}