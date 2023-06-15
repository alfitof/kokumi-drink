import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-96">
        <button>ini button</button>
      </div>
    </div>
  );
}
