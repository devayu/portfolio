import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useContext } from "react";
import AccentColorContext, { accents } from "@/Context/AccentColorContext";
import Image from "next/image";
import { log } from "console";
import { SocialIcon } from "react-social-icons";
export default function () {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  const dummytext =
    "As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.";
  return (
    <div className="p-10 grid grid-cols-2 items-center justify-center max-w-7xl h-screen">
      <div className="relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
          }
          className="rounded-lg h-500 w-400 mx-auto object-cover"
          height={500}
          width={400}
          alt="dummy image"
        ></Image>
      </div>
      <div className="flex flex-col">
        <h2
          className="font-semibold uppercase"
          style={{
            color: accentColor,
          }}
        >
          About me
        </h2>
        <p className="text-lg font-bold tracking-wide">
          I am Software Engineer based in India 📍
        </p>
        <p className="mt-4">{dummytext}</p>
      </div>
    </div>
  );
}
