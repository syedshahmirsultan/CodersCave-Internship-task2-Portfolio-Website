import React from 'react';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';


const socialLinks = [
    {
     href:"https://www.linkedin.com/in/syedshahmirsultan/",
     alt:"Linkedin Image",
     socialPlatform:<FaLinkedinIn size={24} color={'slate'} />

    },
    {
        href:"https://github.com/syedshahmirsultan",
        alt:"Github Image",
        socialPlatform: <FaGithub size={24} color={'slate'}/>

    },
    {
        href:"#contact",
        alt:"Email Image",
        socialPlatform:<MdOutlineEmail  size={24} color={'slate'}/>

    },
    {
        href:"#about",
        alt:"Image of About me symbol ",
        socialPlatform:<IoIosPersonAdd size={24} color={'slate'}/>

    }
]

const Hero = () => {
    return (
        <div id="hero" className="mt-20 flex flex-col gap-y-8">
            <div className=" text-center space-y-4">
<p className='leading-loose text-2xl text-white'>LET&apos;S BUILD SOMETHING TOGETHER</p>
<h1 className="text-4xl md:text-7xl font-bold text-white leading-loose">Hi, I&apos;m <span className="text-yellow-400">Shahmir</span><br/> A Full-Stack Web Developer</h1>
<p className='leading-loose mt-4 text-2xl text-yellow-400 font-medium'>I&apos;m focused on building full stack responsive  web applications</p>
 <div className='flex gap-x-4  justify-center'>{socialLinks.map((item,index)=>{
    return (
      <Link key={index} href={item.href} className='mt-8'> <div className='w-12 h-12 bg-gray-100 hover:bg-yellow-300 rounded-full flex justify-center items-center animate-bounce '>
        {item.socialPlatform}
        </div></Link>
    )
 })}</div>
 </div>
 
 <Link href="https://www.linkedin.com/in/syedshahmirsultan/"><div className="flex justify-center mt-12"><Image src="/images/shahmirImage.jpg" width={350} height={350} alt="Image of Syed Shahmir Sultan"  className=" rounded-full mb-10 hover:animate-pulse "/>
 </div></Link>

        </div>
    );
}

export default Hero;
