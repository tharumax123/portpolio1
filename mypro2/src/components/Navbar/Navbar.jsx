import React from 'react'
import DarkMode from './DarkMode';

 export const NavLinks =[
    {
      id:1,
      name:"Home",
      link:"/#",  
    },
    {
        id:2,
        name:"Projects",
        link:"/#project",  
      },
      {
        id:3,
        name:"About",
        link:"/#about",  
      },
      {
        id:4,
        name:"Contact",
        link:"/#contact",  
      },
]

const Navbar = () => {
  return (
    <div className="shadow-md w-full dark:bg-black dark:text-white">
    <div className="container py-2 sm:py-0">
        <div className="flex justify-between items-center">
            <div>
<span className="text-3xl
 font-bold">Portfolio</span>
            </div>
            <div   sm:block>
<ul className='flex items-center gap-6'>
    {
        NavLinks.map(({id,name,link})=>(
<li  key={id}>
<a className='inline-block text-lg font-medium py-3 hover:text-primary
 transition-all duration-400'
 href={link}>{name}</a>
</li>
        ))
    }
    
</ul>
            </div>
            <DarkMode/>
        </div>
    </div>
    </div>
  );
};

export default Navbar
