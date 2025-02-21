import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer"
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col
    overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7x1 w-full"> 
          <FloatingNav navItems = {navItems}/>
          <Hero />
          <Grid />
          <RecentProject />
          <Experience />
          <Footer />
      </div>
    </main>
  );
}
