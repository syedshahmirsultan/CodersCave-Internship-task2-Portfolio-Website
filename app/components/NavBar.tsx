import Link from 'next/link';
import React from 'react';
import HamburgerMenu from './HamBurger';



const navigation = [
    { title:"Home",
        href:"#hero",
},
{ title:"About",
    href:"#about",
},
{ title:"Skills",
href:"#skills",
},
{ title:"Projects",
href:"#projects",
},
{ title:"Experience",
href:"#experience",
},
{ title:"Contact",
href:"#contact",
}
]

const NavBar = () => {
    return (
        <nav className='fixed top-0 h-24 w-full'>
        <div className='flex justify-between'>
<Link href="/"><div className='ml-4 flex flex-col '>
<h1 className="text-left font-bold text-4xl md:text-6xl text-white leading-loose mt-2">SSS</h1>  
<p className="text-white font-semibold text-sm  leading-tight">Syed Shahmir Sultan</p>  
</div></Link>
<div className='md:flex gap-x-8 hidden mr-2 mt-8'>
{navigation.map((item,index) => {
    return (
<Link key={index} href={item.href} className='text-lg font-semibold  text-white overflow-hidden  group relative mr-4'>{item.title}
<span className='w-full h-[4px] bg-yellow-400 absolute overflow-hidden inline-block translate-x-[100%] left-0 bottom-[20px] group-hover:-translate-x-0 transition-transform duration-200'></span>
</Link>
    )
})
}
</div>
<HamburgerMenu/>
</div>

</nav>
    );
}

export default NavBar;



