import Image from "next/image";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="px-4">
      <Intro />
      <Skills />
      <Work />
      <Projects limit={4} showMoreLink />
      <Contact />
      </div>
    </div>
  );
}
