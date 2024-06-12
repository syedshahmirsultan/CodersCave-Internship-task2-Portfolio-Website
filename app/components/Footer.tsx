import Link from 'next/link';
import React from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Footer = () => {
    return (
        <section className="flex justify-center mx-auto mt-12 pb-4 animate-bounce">
         <Link href="#hero"> <div className='w-12 h-12 flex justify-center items-center place-self-center bg-gray-200 rounded-full'>
          <MdOutlineKeyboardDoubleArrowUp size={30} color={'blue'} />
          </div>  </Link>
        </section>
    );
}

export default Footer;
