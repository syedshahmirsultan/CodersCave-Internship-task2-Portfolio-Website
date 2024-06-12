import React from 'react';
import Image from 'next/image'
const Projects = () => {
    return (
        <section id='projects' className='mt-96 flex flex-col bg-gray-200/30 p-8'>
           
         <p className='text-yellow-400 text-start font-bold text-2xl mb-8'>PROJECTS</p>
         <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest mt-2">What I've Built </h1>
         <div className="flex flex-col md:space-y-12 mt-16 w-full h-auto">
            <div className=" flex flex-col space-y-12 md:space-y-0 md:flex-row md:gap-x-8 w-full h-full">
            <Image src="/images/EcommerceWebsite.png" width={500} height={500} alt="Ecommerce Website" className=" w-full lg:w-1/2 h-full"/>
            <Image src="/images/BlogWebsite.png" width={500} height={500} alt="Blog Website" className="w-full lg:w-1/2 h-full p-4"/>
            </div>
            <div className=" flex flex-col space-y-12 md:space-y-0 md:flex-row md:gap-x-8   w-full h-full mt-12"> 
                <Image src="/images/BlogWebsite-landingPage.png" width={500} height={500} alt="Blog Website Landing Page" className=" w-full lg:w-1/2 h-full"/>
            <Image src="/images/FoodWebsite.png" width={500} height={500} alt="Food Website" className=" w-full lg:w-1/2 h-full"/>
         </div></div>
        </section>
    );
}

export default Projects;
