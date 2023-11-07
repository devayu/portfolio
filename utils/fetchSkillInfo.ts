import { ISkills } from "@/typings";

export const fetchSkillInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillInfo`
  );
  const data = await res.json();
  const skillInfo: ISkills = data.skillInfo[0];
  return skillInfo;
};
