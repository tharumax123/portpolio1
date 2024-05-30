import React from 'react'
import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'


const SkillsData= [

    {
        id:1,
        name:"UI Design",
        icon:(
            <FaCameraRetro  className='text-5xl text-primary group-hover:text-white duration-300'/>
        ),
        link: "#",
        description:"Design Beautiful UI for mobile and web apps",
    },

{
    id:2,
    name:"Back End Development",
    icon:(
        <GiNotebook className='text-5xl text-primary group-hover:text-white duration-300'/>
    ),
    link: "#",
    description:"Use New technologies for backend development",
},
{
    id:3,
    name:"Data Base Management",
    icon:(
        <SlNote className='text-5xl text-primary group-hover:text-white duration-300'/>
    ),
    link: "#",
    description:"Use New Database System for Database development",
},
];
const Skills = () => {


  return (
    <>
    <span id="about"></span>
    
    <div className="dark:bg-black dark:text-white py-14">
      <div className="container">
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
    {
        SkillsData.map((skill)=>(

<div className='group space-y-3 bg-dark p-4
hover:bg-primary duration-300 text-white py-14' >  
    <div>{skill.icon}</div>
    <h1 className='text-2xl font-bold'>{skill.name}</h1>
    <p>{skill.description}</p>
    <a href={skill.link} className='inline-block text-lg font-semibold py-3
     group-hover:text-white duration-300 text-primary'>
        {" "}
        Learn More</a>
</div>
        ) ) }

</div>
      </div>
    </div>
    </>
  );
};

export default Skills
