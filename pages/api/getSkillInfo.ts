import { sanityClient } from "@/sanity.helper";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
type SkillInfoData = {
  skillInfo: SkillInfo;
};
type SkillInfo = {
  name: string;
};
const query = groq`*[_type=='skills'] {
    ...,
    skillsList[]->
  }`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SkillInfoData>
) {
  const skillInfo: SkillInfo = await sanityClient.fetch(query);
  res.status(200).json({ skillInfo });
}
