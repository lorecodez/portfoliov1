

import Image from 'next/image';
import { getProjects } from '@/sanity/schemas/sanity-utils';
import { Project } from '@/types/Project';
import Link from 'next/link';
import '../globals.css';
import Social_media from '../../components/Social_media';
import Project_list from '../../components/Project_list';
import monitor from '/monitor.png';


export default async function Home() {
const projects = await getProjects();
projects ? projects.map((project: Project) => (console.log(project.name))) : console.log('fetch error');


  return (
    <div>
      <div className=' w-full h-fit '>
        <div className='h-[380px] max-h-[453px] max-w-full flex justify-center bg-monitor bg-contain bg-center m-0 bg-no-repeat font-mono'>
          {/* <Image src={monitor} alt='' fill className=' -z-10 relative m-0'/> */}
          <h1 className='font-mono lg:text-4xl md:text-3xl text-2xl font-extrabold relative w-[max-content] h-fit py-2 text-center mt-32 before:absolute before:inset-0 before:animate-typewriter before:bg-white 
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black after:drop-shadow'>
            <code>
            &gt;<span className='primary-bg'>Lorenzo Washington</span>
            </code>
          </h1>
        </div>
        <p className='mt-3 text-2xl text-slate-900 text-center hover:text-blue-500'>
          <Link href='/services'>Web Development & Computer Services</Link>
        </p>
        <Social_media/>
        <hr className='hidden'/>
        <h2 className='mt-24 font-bold text-3xl'>
          My Projects
        </h2>
        {/* projects component goes here */}
        <Project_list projects={projects}/>
      </div>
    </div>
  );
}
