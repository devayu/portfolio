import Head from "next/head";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { GetStaticProps } from "next";
import { AboutInfo } from "@/typings";
import { fetchAboutInfo } from "@/utils/fetchAboutInfo";
type Props = {
  aboutInfo: AboutInfo;
};
export default function Home({ aboutInfo }: Props) {
  return (
    // 040B11
    // bg-[#06121a]
    <div className="bg-[#040B11] text-[#FFFFFF] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header></Header>
      <section id="hero">
        <Hero {...aboutInfo}></Hero>
      </section>
      <section id="about">
        <About></About>
      </section>
      {/* <section id="work">
        <Experience></Experience>
      </section> */}
      <section id="projects">
        <Projects></Projects>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </div>
  );
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const aboutInfo: AboutInfo = await fetchAboutInfo();
  return {
    props: {
      aboutInfo,
    },
    revalidate: 10,
  };
};
