import { IAbout } from "@/typings";

export const fetchAboutInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAboutInfo`
  );
  const data = await res.json();
  const aboutInfo: IAbout = data.aboutInfo[0];
  console.log(aboutInfo);
  return aboutInfo;
};
