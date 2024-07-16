import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
    return (
        <div id='projects' className='mt-96 flex flex-col bg-gray-200/30 p-8'>
            {/* Section title */}
            <p className='text-yellow-400 text-start font-bold text-2xl mb-8'>PROJECTS</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-widest mt-2">What I&apos;ve Built</h1>
            
            {/* Projects container */}
            <div className="flex flex-col space-y-12 mt-16 w-full h-auto">
                
                {/* Row 1 */}
                <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:gap-x-8 w-full h-full">
                    {/* Project card 1 */}
                    <div className='relative group'>
                        <Image src="/images/EcommerceWebsite.png" width={500} height={500} alt="Ecommerce Website" className="w-full h-full"/>
                        <div className='hover:bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200'/>
                        <div className='absolute hidden group-hover:inline-block top-0 left-0 h-full w-full bg-opacity-80 bg-blue-700 backdrop-2xl text-white justify-center items-center text-center duration-200 p-5'>
                            <h2 className="text-xl md:text-2xl text-white font-bold mt-1 md:mt-8">Full-Stack Ecommerce Website</h2>
                            <div className="flex mt-8 justify-center gap-x-4 md:gap-x-8">
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://github.com/syedshahmirsultan/Full-Stack-Ecommerce-Website">Code</Link>
                                </button>
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://shahmir-full-stack-ecommerce-website.vercel.app/">Demo</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Project card 2 */}
                    <div className='relative group'>
                        <Image src="/images/BlogWebsite.png" width={500} height={500} alt="Blog Website" className="w-full h-full"/>
                        <div className='hover:bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200'/>
                        <div className='absolute hidden group-hover:inline-block top-0 left-0 h-full w-full bg-opacity-80 bg-blue-700 backdrop-2xl text-white justify-center items-center text-center duration-200 p-5'>
                            <h2 className="text-xl md:text-2xl text-white font-bold mt-1 md:mt-8">Blog Website</h2>
                            <div className="flex mt-8 justify-center gap-x-4 md:gap-x-8">
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://github.com/syedshahmirsultan/CodersCave-Internship-task1-Blog-Website">Code</Link>
                                </button>
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://shahmir-blog-website.vercel.app/">Demo</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Row 2 */}
                <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:gap-x-8 w-full h-full">
                    {/* Project card 3 */}
                    <div className='relative group'>
                        <Image src="/images/BlogWebsite-landingPage.png" width={500} height={500} alt="Blog Website Landing Page" className="w-full h-full"/>
                        <div className='hover:bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200'/>
                        <div className='absolute hidden group-hover:inline-block top-0 left-0 h-full w-full bg-opacity-80 bg-blue-700 backdrop-2xl text-white justify-center items-center text-center duration-200 p-5'>
                            <h2 className="text-xl md:text-2xl text-white font-bold mt-1 md:mt-8">Blog Website Landing Page</h2>
                            <div className="flex mt-8 justify-center gap-x-4 md:gap-x-8">
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://github.com/syedshahmirsultan/Blog_Website_LandingPage">Code</Link>
                                </button>
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://shahmir-blog-website-landing-page.vercel.app/">Demo</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Project card 4 */}
                    <div className='relative group'>
                        <Image src="/images/FoodWebsite.png" width={500} height={500} alt="Food Website" className="w-full h-full"/>
                        <div className='hover:bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200'/>
                        <div className='absolute hidden group-hover:inline-block top-0 left-0 h-full w-full bg-opacity-80 bg-blue-700 backdrop-2xl text-white justify-center items-center text-center duration-200 p-5'>
                            <h2 className="text-xl md:text-2xl text-white font-bold mt-1 md:mt-8">Food Website Landing Page</h2>
                            <div className="flex mt-8 justify-center gap-x-4 md:gap-x-8">
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://github.com/syedshahmirsultan/Food-Website">Code</Link>
                                </button>
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://shahmir-food-website.vercel.app/">Demo</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Row 3 */}
                <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:gap-x-8 w-full h-full">
                    {/* Project card 5 */}
                    <div className='relative group'>
                        <Image src="/images/TodoApp.png" alt="Todo App" width={500} height={500} className='w-full h-full'/>
                        <div className='hover:bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200'/>
                        <div className='absolute hidden group-hover:inline-block top-0 left-0 h-full w-full bg-opacity-80 bg-blue-700 backdrop-2xl text-white justify-center items-center text-center duration-200 p-5'>
                            <h2 className="text-xl md:text-2xl text-white font-bold mt-1 md:mt-8">Todo App</h2>
                            <div className="flex mt-8 justify-center gap-x-4 md:gap-x-8">
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://github.com/syedshahmirsultan/Full-Stack-TodoApp/tree/main">Code</Link>
                                </button>
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://github.com/syedshahmirsultan/Full-Stack-TodoApp/blob/main/README.md">Demo</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Project card 6 */}
                    <div className='relative group'>
                        <Image src="/images/OnlineMarketplace.png" width={500} height={500} alt="Online Marketplace" className="w-full h-full"/>
                        <div className='hover:bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200'/>
                        <div className='absolute hidden group-hover:inline-block top-0 left-0 h-full w-full bg-opacity-80 bg-blue-700 backdrop-2xl text-white justify-center items-center text-center duration-200 p-5'>
                            <h2 className="text-xl md:text-2xl text-white font-bold mt-1 md:mt-8">Full-Stack Online Marketplace Website</h2>
                            <div className="flex mt-8 justify-center gap-x-4 md:gap-x-8">
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://github.com/syedshahmirsultan/Full-Stack-Online-Marketplace-Website">Code</Link>
                                </button>
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://shahmir-online-marketplace.vercel.app/">Demo</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:gap-x-8 w-full h-full">
                    {/* Project card 7 */}
                    <div className='relative group'>
                        <Image src="/images/LandingPage.png" width={500} height={500} alt="Landing Page Website" className="w-full h-full"/>
                        <div className='hover:bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200'/>
                        <div className='absolute hidden group-hover:inline-block top-0 left-0 h-full w-full bg-opacity-80 bg-blue-700 backdrop-2xl text-white justify-center items-center text-center duration-200 p-5'>
                            <h2 className="text-xl md:text-2xl text-white font-bold mt-1 md:mt-8">Landing Page Website</h2>
                            <div className="flex mt-8 justify-center gap-x-4 md:gap-x-8">
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://github.com/syedshahmirsultan/Panaverse-LandingPage">Code</Link>
                                </button>
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://shahmir-panaversewebsite-landing-page.vercel.app/">Demo</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Project card 8 */}
                    <div className='relative group'>
                        <Image src="/images/LiveInPakistan.png" width={500} height={500} alt="LiveInPakistan Website" className="w-full h-full"/>
                        <div className='hover:bg-black/20 top-0 left-0 absolute w-full h-full group-hover:hidden duration-200'/>
                        <div className='absolute hidden group-hover:inline-block top-0 left-0 h-full w-full bg-opacity-80 bg-blue-700 backdrop-2xl text-white justify-center items-center text-center duration-200 p-5'>
                            <h2 className="text-xl md:text-2xl text-white font-bold mt-1 md:mt-8">Live In Pakistan Website</h2>
                            <div className="flex mt-8 justify-center gap-x-4 md:gap-x-8">
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://github.com/syedshahmirsultan/Website">Code</Link>
                                </button>
                                <button className="text-white bg-black px-2 py-1 md:px-4 md:py-2 rounded-lg">
                                    <Link href="https://shahmir-website.vercel.app/">Demo</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;

