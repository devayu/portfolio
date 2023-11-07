import AccentColorContext from "@/Context/AccentColorContext";
import { IProject } from "@/typings";
import { getHoverClassName } from "@/utils/themeUtil";
import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/projectItem.module.scss";
const ProjectItem = ({
  title,
  desc,
  demoLink,
  codeLink,
  projectImg,
  techStack,
}: IProject) => {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  return (
    <div className="grid grid-cols-12 bg-gray-800 gap-10 relative items-center">
      <div className={styles.project_content}>
        <div>
          <p>project overline</p>
          <h3>{title}</h3>

          <div className={styles.project_description}>
            <p>{desc}</p>
          </div>

          <ul>
            {techStack.map((tech) => {
              return <li>{tech.skillTitle}</li>;
            })}
          </ul>
          <div>
            <Link
              href={codeLink}
              target="_blank"
              className={`flex gap-2 justify-start ${getHoverClassName(
                accentColor
              )}`}
            >
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
              href={demoLink}
              target="_blank"
              className={`flex gap-2 justify-start ${getHoverClassName(
                accentColor
              )}`}
            >
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
      <div className={styles.project_image}>
        <Image
          src={
            "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
          }
          className="rounded-lg h-500 w-400 object-cover"
          height={500}
          width={400}
          alt="dummy image"
        ></Image>
      </div>
    </div>
  );
};

export default ProjectItem;
