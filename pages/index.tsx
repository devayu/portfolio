import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className="bg-black text-white h-scree snap-y snap-mandatory overflow-scroll z-0">
      <Header></Header>
      <section id="hero" className="snap-center">
        <Hero></Hero>
      </section>
      <section id="hero2" className="snap-center">
        <Hero></Hero>
      </section>
    </div>
  );
}
