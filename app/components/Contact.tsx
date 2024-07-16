import React from 'react';
import { GrLinkedin } from "react-icons/gr";
import Link from 'next/link'
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa6';






const socialLinks = [
    {
     href:"https://www.linkedin.com/in/syedshahmirsultan/",
     alt:"Linkedin Image",
     socialPlatform:<FaLinkedinIn size={24} color={'slate'} />

    },
    {
        href:"https://www.facebook.com/profile.php?id=100093155077830",
        alt:"Facebook Image",
        socialPlatform: <FaFacebook size={24} color={'slate'}/>

    },
    
]


const Contact = () => {
    return (
        <div id='contact' className='mt-96 flex flex-col bg-gray-200/30 p-8'>
         <p className='text-yellow-400  text-start text-2xl md:text-center mt-4 font-bold md:text-4xl'>CONTACT ME ON</p>
         <div className='flex gap-x-4 justify-start md:justify-center'>{socialLinks.map((item,index)=>{
    return (
      <Link key={index} href={item.href} className='mt-8'> <div className='w-12 h-12 bg-gray-100 hover:bg-yellow-300 rounded-full flex justify-center items-center  '>
        {item.socialPlatform}
        </div></Link>
    )
 })}</div>

 <div className="mt-8  text-md md:text-xl text-white flex justify-start md:justify-center font-medium ">
Email: <span className="text-yellow-400 ml-1">    syedshahmirsultan@gmail.com</span>
 </div>
        </div>
    );
}

export default Contact;
