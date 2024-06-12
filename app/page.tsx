import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// export default function Home() {
//   return (
//    <section className="w-full h-12/12">
// <div className="relative"><Image src="/images/backgroundImage.jpg" height={1000} width={1000} alt="Background Image" className="w-full min-h-"/>
// <div className="absolute inset-0 max-w-6xl mx-auto">
// <NavBar/>
// <Hero/>
// </div>

// </div>
//    </section>
//   );
// }

export default function Home() {
  return (
    <section className="w-full h-[100%]">
      <div className="relative w-full h-[100%]">
        <div className="absolute inset-0">
          <Image src="/images/backgroundImage.jpg" layout="fill" objectFit="cover" alt="Background Image" className="-z-20" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <NavBar />
          <Hero />
          <About/>
          <Skills/>
          <Projects/>
          <Experience/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </section>
  );
}
