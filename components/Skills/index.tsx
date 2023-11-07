import AccentColorContext from "@/Context/AccentColorContext";
import { urlForSanity } from "@/sanity.helper";
import { ISkills, ISkill } from "@/typings";
import Image from "next/image";
import { useContext } from "react";

export default function ({ skillInfo }: { skillInfo: ISkills }) {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  return (
    <div className="flex flex-col p-10 bg-[#06121a] max-w-7xl ">
      <h1
        className="font-semibold uppercase"
        style={{
          color: accentColor,
        }}
      >
        Skills
      </h1>
      <h2 className="text-lg font-bold tracking-wide">{skillInfo.subtitle}</h2>
      <div className="mt-10 grid grid-cols-5 gap-4">
        {skillInfo.skillsList.map((skill: ISkill) => {
          return (
            <Image
              key={skill._id}
              width={100}
              height={100}
              className="relative rounded-full h-20 w-20 mx-auto object-cover shadow-2xl"
              src={urlForSanity(skill.skillImage).url()}
              alt={skill.skillTitle}
            ></Image>
          );
        })}
      </div>
    </div>
  );
}
