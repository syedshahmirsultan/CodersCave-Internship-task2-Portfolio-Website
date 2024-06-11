import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default function Home() {
  return (
   <section className="w-full h-screen">
<div className="relative"><Image src="/images/backgroundImage.jpg" height={1000} width={1000} alt="Background Image" className="w-full h-full"/>
<div className="absolute inset-0 max-w-6xl mx-auto">
<NavBar/>
<Hero/>
</div>

</div>
   </section>
  );
}
