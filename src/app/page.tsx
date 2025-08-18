import Image from "next/image";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="px-4">
      <Intro />
      <Skills />
      </div>
    </div>
  );
}
