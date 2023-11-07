import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useContext } from "react";
import AccentColorContext, { accents } from "@/Context/AccentColorContext";
import Image from "next/image";
import { log } from "console";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { IProjects } from "@/typings";
import { getHoverClassName } from "@/utils/themeUtil";
import ProjectItem from "../ProjectItem";
export default function ({ projects }: { projects: IProjects }) {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  return (
    <div className="p-10 items-center justify-center max-w-7xl">
      <div className="flex flex-col">
        <h2
          className="font-semibold uppercase"
          style={{
            color: accentColor,
          }}
        >
          Projects
        </h2>
        <p className="text-lg font-bold tracking-wide">subtitle text 🧩</p>
      </div>
      <div>
        {projects?.projectList.map((project, index) => {
          return (
            <div className="flex flex-1 bg-[#06121a] gap-10 p-3 rounded-lg">
              <Image
                src={
                  "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
                }
                className="rounded-lg h-500 w-400 object-cover"
                height={500}
                width={400}
                alt="dummy image"
              ></Image>
              <div className="flex flex-col justify-between">
                <h2 className="uppercase font-semibold">{project.title}</h2>
                <p className={`text-[#ebebeb]`}>{project.desc}</p>
                <div className="mt-2">
                  <p className="font-semibold text-sm">Tech Stack</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {project?.techStack.map((tech) => (
                      <div className="rounded-lg bg-[#040B11] p-2">
                        {tech.skillTitle}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-10 mt-2">
                  <Link
                    href={project?.codeLink}
                    target="_blank"
                    className={`flex gap-2 justify-start ${getHoverClassName(
                      accentColor
                    )}`}
                  >
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={project?.demoLink}
                    target="_blank"
                    className={`flex gap-2 justify-start ${getHoverClassName(
                      accentColor
                    )}`}
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
