import React, { useContext } from "react";
import styles from "../../styles/orbits.module.scss";
import Image from "next/image";
import { IAbout, IImage } from "@/typings";
import { urlForSanity } from "@/sanity.helper";
import AccentColorContext, { accents } from "@/Context/AccentColorContext";
const Orbits = ({ profilePic }: { profilePic?: IImage }) => {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  return (
    <div className={styles.orbit}>
      <div className={styles.center_image}>
        {profilePic && (
          <Image
            className="relative rounded-full h-40 w-40 mx-auto object-cover"
            src={urlForSanity(profilePic).url()}
            width={100}
            height={100}
            alt="profile image"
          ></Image>
        )}
      </div>
      <ul>
        <li>
          <div
            className="absolute rounded-full h-[40px] w-[40px] -bottom-5 left-20"
            style={{
              backgroundColor: accents.RED,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.RED)}
          ></div>
        </li>
        <li>
          <div
            className="absolute rounded-full h-[40px] w-[40px] top-20 -right-5"
            style={{
              backgroundColor: accents.BLUE,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.BLUE)}
          ></div>
        </li>
        <li>
          <div
            className="absolute rounded-full h-[40px] w-[40px] top-10"
            style={{
              backgroundColor: accents.GREEN,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.GREEN)}
          ></div>
        </li>
        <li>
          <div
            className="absolute rounded-full h-[40px] w-[40px] top-10"
            style={{
              backgroundColor: accents.GREEN,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.GREEN)}
          ></div>
        </li>
        <li>
          <div
            className="absolute rounded-full h-[40px] w-[40px] top-10"
            style={{
              backgroundColor: accents.GREEN,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.GREEN)}
          ></div>
        </li>
        <li>
          <div
            className="absolute rounded-full h-[40px] w-[40px] top-10"
            style={{
              backgroundColor: accents.GREEN,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.GREEN)}
          ></div>
        </li>
        <li>
          <div
            className="absolute rounded-full h-[40px] w-[40px] top-10"
            style={{
              backgroundColor: accents.GREEN,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.GREEN)}
          ></div>
        </li>
        <li>
          <div
            className="absolute rounded-full h-[40px] w-[40px] top-10"
            style={{
              backgroundColor: accents.GREEN,
              cursor: "pointer",
            }}
            onClick={() => updateAccentColor(accents.GREEN)}
          ></div>
        </li>
      </ul>
    </div>
  );
};

export default Orbits;
