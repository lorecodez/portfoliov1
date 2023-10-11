import React from 'react'

export default function Pagination({ projectsPerPage, totalProjects, currentPage, paginate }) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
        <menu className='w-full h-fit flex flex-row gap-1 items-center justify-center'>
            {pageNumbers.map(number => (
                <li key={number} className={number === currentPage ? ' rounded-lg font-bold m-3 text-center whitespace-nowrap bg-blue-500 text-blue-100 transition' : ' border-gray-500 bg-gray-100 rounded-lg text-gray-500 font-bold m-3 text-center h-fit whitespace-nowrap hover:bg-blue-500 hover:text-blue-100 transition'}>
                    <a onClick={() => paginate(number)} href='#projects-list' className='p-2'> {number} </a>
                </li>
            ))}
        </menu>
    </nav>
  )
}
