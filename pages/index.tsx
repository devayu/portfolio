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
import { IAbout, IProjects, ISkills } from "@/typings";
import { fetchAboutInfo } from "@/utils/fetchAboutInfo";
import { fetchSkillInfo } from "@/utils/fetchSkillInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import AnimatedCursor from "react-animated-cursor";
import { hexToRgb } from "@/utils/themeUtil";
import AccentColorContext from "@/Context/AccentColorContext";
import { useContext } from "react";
type Props = {
  aboutInfo: IAbout;
  skillInfo: ISkills;
  projects: IProjects;
};
export default function Home({ aboutInfo, skillInfo, projects }: Props) {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  console.log(hexToRgb(accentColor));
  console.log(accentColor);

  return (
    // 040B11
    // bg-[#06121a]

    <div className="bg-[#040B11] text-[#FFFFFF] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header></Header>
      <section id="hero">
        <Hero aboutInfo={aboutInfo} skillInfo={skillInfo}></Hero>
      </section>
      {/* <section id="about">
        <About></About>
      </section> */}
      {/* <section id="work">
          <Experience></Experience>
        </section> */}
      <section id="projects">
        <Projects projects={projects}></Projects>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </div>
  );
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const aboutInfo: IAbout = await fetchAboutInfo();
  const skillInfo: ISkills = await fetchSkillInfo();
  const projects: IProjects = await fetchProjects();
  return {
    props: {
      aboutInfo,
      skillInfo,
      projects,
    },
    revalidate: 10,
  };
};
