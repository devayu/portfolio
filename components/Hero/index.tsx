import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useContext } from "react";
import AccentColorContext, { accents } from "@/Context/AccentColorContext";
import Image from "next/image";
import { log } from "console";
import { SocialIcon } from "react-social-icons";
import Skills from "../Skills";
import { IAbout, ISkills, ISocials } from "@/typings";
import { urlForSanity } from "@/sanity.helper";
import "./Hero.module.css";
import Orbits from "../Orbits";
import { hexToRgb } from "@/utils/themeUtil";
import AnimatedCursor from "react-animated-cursor";
export default function ({
  aboutInfo,
  skillInfo,
}: {
  aboutInfo: IAbout;
  skillInfo: ISkills;
}) {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  const renderBackgroundView = (): JSX.Element => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.4, 0.2, 0.1],
          borderRadius: ["20%", "20%", "50%", "80%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative flex justify-center items-center"
      >
        <div className="absolute border border-[#fffffa] rounded-full h-[280px] w-[280px] mt-52 animate-pulse">
          <div
            className="relative rounded-full h-[50px] w-[50px] mt-10"
            style={{
              backgroundColor: accents.BLUE,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.BLUE)}
          ></div>
        </div>
        <div className="absolute border border-[#fffffa] rounded-full h-[380px] w-[380px] mt-52 animate-pulse">
          <div
            className="absolute rounded-full h-[50px] w-[50px] mt-70"
            style={{
              backgroundColor: accents.GREEN,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.GREEN)}
          ></div>
        </div>
        <div className="absolute border border-[#fffffa] rounded-full h-[480px] w-[480px] mt-52 animate-pulse">
          <div
            className="rounded-full h-[50px] w-[50px] mt-60 ml-10"
            style={{
              backgroundColor: accents.RED,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.RED)}
          ></div>
        </div>
      </motion.div>
    );
  };
  const renderSocialIcons = (socials: ISocials[]): JSX.Element => {
    return (
      <motion.div
        className="flex flex-row items-center mt-5"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              url={social.socialUrl}
              bgColor="transparent"
              fgColor={accentColor}
              key={social._id}
              className="rounded-full hover:bg-gray-900"
            ></SocialIcon>
          );
        })}
      </motion.div>
    );
  };

  const renderProfileSection = (): JSX.Element => {
    return (
      <div className="flex flex-col w-full h-5/6">
        <div className="flex flex-1 justify-between p-10">
          <div className="flex flex-col max-w-2xl justify-center">
            <div>
              <h1
                className="text-5xl font-bold tracking-wide"
                style={{
                  color: accentColor,
                }}
              >
                {aboutInfo.role}
              </h1>
              <h2 className="mt-2 text-lg text-left">
                {`Hi, I am ${aboutInfo.name}. ${aboutInfo.subtitle}`}
              </h2>
            </div>
            <div className="-ml-3.5">
              {renderSocialIcons(aboutInfo.socials)}
            </div>
          </div>
          {/* <motion.div
            animate={{ rotate: 360 }} // Target rotation angle (360 degrees)
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }} // Set loop to Infinity
          >
            <div className="relative flex items-center border border-[#fffffa24] rounded-full h-[280px] w-[280px] animate-pulse">
              <div
                className="absolute rounded-full h-[40px] w-[40px] -bottom-5 left-20"
                style={{
                  backgroundColor: accents.RED,
                  cursor: "pointer",
                }}
                onClick={() => updateAccentColor(accents.RED)}
              ></div>
              <div
                className="absolute rounded-full h-[40px] w-[40px] top-20 -right-5"
                style={{
                  backgroundColor: accents.BLUE,
                  cursor: "pointer",
                }}
                onClick={() => updateAccentColor(accents.BLUE)}
              ></div>
              <div
                className="absolute rounded-full h-[40px] w-[40px] top-10"
                style={{
                  backgroundColor: accents.GREEN,
                  cursor: "pointer",
                }}
                onClick={() => updateAccentColor(accents.GREEN)}
              ></div>
              <Image
                className="relative rounded-full h-40 w-40 mx-auto object-cover"
                src={urlForSanity(profilePic).url()}
                width={100}
                height={100}
                alt="profile image"
              ></Image>
            </div>
          </motion.div> */}
          <Orbits profilePic={aboutInfo.profilePic}></Orbits>
        </div>
        <Skills skillInfo={skillInfo}></Skills>
      </div>
    );
  };
  return (
    <div className="flex items-center h-screen max-w-7xl mx-auto xl:items-center">
      {renderProfileSection()}
    </div>
  );
}
