"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types/Project';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

export default function Project_list({projects}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(6);

    //get current projects
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id ='projects-list'>
        <menu className='mt-5 grid lg:grid-cols-3 md:gird-cols-2 gap-8'>
          {currentProjects.map((project) => (
            <Link 
            href={
              project.slug == 'minecraft' ? '/minecraft' : `/projects/${project.slug}`
            } 
            key={project._id} 
            className='border-2 border-grey-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition'>
              {project.image && (
              <Image 
                src={project.image} 
                alt={project.name} 
                width={750} 
                height={300} 
                className='object-cover rounded-lg border border-grey-500'/>
              )}
              <div className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
                {project.name}  
              </div>
            </Link>
          ))}
        </menu>
        <Pagination 
          projectsPerPage={projectsPerPage} 
          totalProjects={projects.length} 
          currentPage={currentPage} 
          paginate={paginate}/>
    </section>
  );
}
