import React from 'react'
import web1 from "../../assets/websiteimg/bookstore.jpg";
import web2 from "../../assets/websiteimg/food app.jpg";
import web3 from "../../assets/websiteimg/grocery.jpg";
import web4 from "../../assets/websiteimg/portpolio.jpg";
const ProjectsData = [

    {
        id:1,
        name:"Online Book Store",
        image:web1,
        link:"#",
    },
    {
        id:2,
        name:"Restaurent Web Page",
        image:web2,
        link:"#",
    },
    {
        id:3,
        name:"Grocery App",
        image:web3,
        link:"#",
    },
    {
        id:4,
        name:"Portpolio",
        image:web4,
        link:"#",
    },
]

const Projects = () => {
  return (
    <>
    <span id="project"></span>
    
    <div className="py-14 dark:bg-black dark:text-white">
<div className="container">
<header className="flex justify-between items-center  mb-8">
<div>
<h1 className="uppercase text-3xl font-bold">Featured Projects</h1>
<p>Lorem this thjgidf skkklos</p>
</div>
<div>

    <button className='bg-primary hover:bg-primary/80 duration-300  py-2  px-6 text-white'>View All</button>
</div>

</header>
{/*Card section*/}
<section>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{/*cards*/}
{
    ProjectsData.map(({id,name,image,link}
)=>(
<div>
    <div className="h-[340px] sm:h-[400px] w-full bg-dark/80 grid place-items-center p-3 sm:p-6">
        <img src={image} alt=""/>
    </div>
    <div className="pt-4 space-y-3">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div>
            <a href={link} className="text-primary uppercase">Know More
            </a>
        </div>
    </div>
</div>

    )

    )
}
</div>

</section>
</div>

    </div>
    </>
  )
}

export default Projects
