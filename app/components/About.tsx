import React from 'react';
import Image from 'next/image'

const About = () => {
    return (
        <section  id='about' className="mt-96 flex flex-col lg:flex-row lg:justify-between space-y-12 lg:space-y-1 bg-gray-100/20 p-8 pr-4 w-full">
            <div className="flex flex-col space-y-2 w-full md:w-[65%]">
        <p className='text-yellow-400 text-start font-bold text-2xl mb-8'>ABOUT</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 tracking-widest mt-24">WHO  I AM </h1>
          <p className="text-lg font-medium text-gray-100 tracking-widest mt-8 p-4 mr-8">
          I am a dedicated Full-Stack Developer with a passion for AI. My expertise spans a wide range of technologies, allowing me to create state-of-the-art web applications.

<br/><br/><span className="font-semibold text-lg ">𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 𝐈 𝐰𝐨𝐫𝐤 𝐰𝐢𝐭𝐡:</span><br/><br/>

● 𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝: HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS<br/>
● 𝐁𝐚𝐜𝐤𝐞𝐧𝐝: Node.js, FastAPI, Python<br/>
● 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬: SQL, Postgres, Drizzle ORM, SQLModel<br/>
● 𝐓𝐨𝐨𝐥𝐬 & 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬: Stripe, Sanity, Poetry, Kinde Auth<br/><br/>

I am committed to continuously learning and integrating the latest technologies into my projects. This approach not only enhances my work but also deepens my expertise in cutting-edge development tools.

<br/><br/>By leveraging my skills and knowledge, I strive to deliver innovative and high-quality solutions in web development. What sets me apart is my dedication to staying at the forefront of technological advancements and applying them creatively in my projects.⁤</p>  </div>
       
    <div className="lg:w-[35%] w-full p-2 bg-gray-100 mt-12 lg:mt-0 hover:scale-105 duration-200">
        <Image src="/images/aboutme.png" width={200} height={200} alt="Imae of Laptop" className='h-full w-full rounded-lg '/>
        </div>   
        </section>
    );
}

export default About;
