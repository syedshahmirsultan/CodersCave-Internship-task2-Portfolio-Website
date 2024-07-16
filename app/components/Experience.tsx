import React from 'react';
import Image from 'next/image';

const Experience = () => {
    return (
        <div id='experience' className='mt-96 flex gap-y-12 flex-col bg-gray-200/30 p-8'>
            <p className='text-yellow-400 text-start font-bold text-2xl mb-8'>EXPERIENCE</p>
            <div className='flex flex-col md:flex-row mt-2 gap-y-4 md:gap-x-8'>
                <Image src="/images/internship.png" height={180} width={180} alt="CodersCave Logo" className=""/>
                <div className="flex flex-col space-y-1">
                    <h1 className="text-2xl font-bold text-yellow-400 uppercase mt-2">WEB DEVELOPMENT Intern</h1>
                    <div className="flex gap-x-2">
                        <p className="text-xl font-medium text-white">CodersCave .</p>
                        <p className="text-xl font-medium text-white">Internship</p>
                    </div>
                    <p className="text-lg font-medium text-yellow-400">Jun 2024 - July 2024 . 1 mo</p>
                    <p className="text-lg font-medium text-white ml-2">Remote</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row mt-2 gap-y-4 md:gap-x-8'>
                <Image src="/images/growintern.png" height={180} width={180} alt="Growintern Logo" className=""/>
                <div className="flex flex-col space-y-1">
                    <h1 className="text-2xl font-bold text-yellow-400 uppercase mt-2">Full-Stack Web Development Intern</h1>
                    <div className="flex gap-x-2">
                        <p className="text-xl font-medium text-white">Growintern .</p>
                        <p className="text-xl font-medium text-white">Internship</p>
                    </div>
                    <p className="text-lg font-medium text-yellow-400">July 2024 - August 2024 . 1 mo</p>
                    <p className="text-lg font-medium text-white ml-2">Remote</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;

