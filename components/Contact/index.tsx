import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useContext } from "react";
import AccentColorContext, { accents } from "@/Context/AccentColorContext";
import Image from "next/image";
import { log } from "console";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { getHoverClassName } from "@/utils/themeUtil";
type Inputs = {
  name: string;
  email: string;
  message: string;
};
export default function () {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:${email}?subject=Checked Out your portfolio&body=Hi, My name is ${data.name}, ${data.message}`;
  };
  const projects = [
    {
      name: "Dummy project",
      projectLink: "projectlink.com",
      githubLink: "https://github.com/devayu/cryptogenie",
      imgUrl: "imgUrl.com",
      description:
        "My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player.",
      techStack: ["Next.js", "Node.js", "Next.js"],
    },
    {
      name: "Dummy project",
      projectLink: "projectlink.com",
      githubLink: "https://github.com/devayu/cryptogenie",
      imgUrl: "imgUrl.com",
      description: "description",
      techStack: ["Next.js", "Node.js"],
    },
  ];
  const email = "ayushmaurya.work@gmail.com";
  return (
    <div className="p-10 items-center justify-center max-w-7xl">
      <div className="flex flex-col">
        <h2
          className="font-semibold uppercase"
          style={{
            color: accentColor,
          }}
        >
          Contact
        </h2>
        <p className="text-lg font-bold tracking-wide">
          Don't be shy! Say Hello 👋
        </p>
      </div>
      <div className="flex gap-10">
        <div className="flex items-center gap-3 mt-10">
          <div className="rounded-full bg-gray-900 w-12 h-12 flex items-center justify-center pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={accentColor}
              className="w-7 h-7"
            >
              <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
              <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold">Mail</p>
            <a
              href={`mailto:${email}`}
              className={`text-sm ${getHoverClassName(accentColor)}`}
            >
              {email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-10">
          <div className="rounded-full bg-gray-900 w-12 h-12 flex items-center justify-center pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={accentColor}
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-sm">Noida, India</p>
          </div>
        </div>
      </div>
      <form
        className="flex flex-col space-y-2 w-fit mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex space-x-2">
          <input
            placeholder="Name"
            type="text"
            className="contactInput"
            {...register("name")}
          ></input>
          <input
            placeholder="Email"
            type="email"
            className="contactInput"
            {...register("email")}
          ></input>
        </div>
        <textarea
          placeholder="Message"
          className="contactInput"
          {...register("message")}
        ></textarea>
        <button
          type="submit"
          className=" py-2 px-10 rounded-md text-lg font-bold"
          style={{
            backgroundColor: accentColor,
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
