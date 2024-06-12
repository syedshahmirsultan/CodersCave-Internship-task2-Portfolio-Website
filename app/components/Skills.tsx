import React from 'react';
import Image from 'next/image'
const skillsData = [
    {
       src:"/images/html.png",
       name: "HTML 5"
    },
    {
        src:"/images/css.png",
        name: "CSS 3"
     },
     {
        src:"/images/javascript.png",
        name: "JAVASCRIPT"
     },
     {
        src:"/images/typescript.png",
        name: "TYPESCRIPT"
     },
     {
        src:"/images/nextjs.png",
        name: "NEXT.JS"
     },
     {
        src:"/images/react.png",
        name: "REACT"
     },
     {
        src:"/images/node.png",
        name: "NODE.JS"
     },
     {
        src:"/images/python.png",
        name: "PYTHON"
     },
     {
        src:"/images/fastapi.png",
        name: "FASTAPI"
     },
     {
        src:"/images/poetry.png",
        name: "POETRY"
     },
     {
        src:"/images/sanity.png",
        name: "SANITY"
     },
     {
        src:"/images/sql.png",
        name: "SQL"
     },
     {
        src:"/images/postgresql.png",
        name: "POSTGRESQL"
     },
     {
        src:"/images/github1.png",
        name: "GITHUB"
     },
     {
        src:"/images/tailwind.png",
        name: "TAILWIND CSS"
     },
     {
        src:"/images/stripe.png",
        name: "STRIPE"
     },
     {
        src:"/images/kindeAuth.png",
        name: "KINDE AUTH"
     }
]

const Skills = () => {
    return (
        <section id='skills' className='mt-96 flex flex-col bg-gray-200/30 p-8'>
         <p className='text-yellow-400 text-start font-bold text-2xl mb-8'>SKILLS</p>
         <h1 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-widest mt-2">What I Can Do </h1>
         <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-x-8 gap-y-12 mt-12">
 {skillsData.map((item,index)=>{
    return (
        <div className="flex flex-col space-y-4 items-start md:items-center md:flex-row justify-between p-[24px] md:p-8 bg-transparent shadow-md hover:scale-110 duration-300 w-full">
         <Image src={item.src} height={60} width={60} alt={`Image of ${item.name}`} className="w-16 h-16 lg:w-[40%] lg:h-[90%] rounded-2xl"/>
           <h2 className="text-md md:text-xl text-white flex items-center font-semibold ">{item.name}</h2> </div>
    )
 })
}
         </div>
        </section>
    );
}

export default Skills;
