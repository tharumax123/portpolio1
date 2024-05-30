import React from 'react'
import PersonImg from "../../assets/websiteimg/person2.jpg"
const Hero = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2
         place-items-center">
            {/*image section*/}
            <div>
<div>
    <img src= {PersonImg}alt='no this'/>
</div>
            </div>
            {/* description section*/}
            <div className='space-y-3'>
                <p className='text-primary'>Hello I'm Tharusha</p>
                <h1 className='text-5xl font-semibold'>Software Engineer</h1>
                <p>
                “Hello! I’m a recent under graduate with a degree in Computer Science. During my studies, I gained hands-on experience in Java, Python, and web development. I’m passionate about solving complex problems and collaborating with teams to build innovative software solutions. I’m excited to contribute my skills to a dynamic company like yours.”
                </p>
                <button className='uppercase bg-primary text-white py-2 px-6 hover:bg-primary/80 duration-300'>Hire me</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
