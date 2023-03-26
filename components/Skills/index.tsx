import AccentColorContext from "@/Context/AccentColorContext";
import Image from "next/image";
import { useContext } from "react";

export default function () {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  const skills = [
    "React",
    "React Native",
    "React",
    "React Native",
    "React",
    "React Native",
    "React",
    "React Native",
  ];
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
      <h2 className="text-lg font-bold tracking-wide">
        Learning and levaling up one day at a time 👨‍💻
      </h2>
      <div className="mt-10 grid grid-cols-5 gap-4">
        {skills.map((skill) => {
          return (
            <Image
              width={100}
              height={100}
              className="relative rounded-full h-20 w-20 mx-auto object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/9H1dbmoXDsNwLvIoiFNG1wuVphz_h1a2rz9Js5p_wMHw_LpC4gsy6Zzs_H_kdt5BzXiQCF-8pNhZlyg-8w=s220-rw"
              alt={skill}
            ></Image>
          );
        })}
      </div>
    </div>
  );
}
