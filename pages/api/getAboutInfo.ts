import { sanityClient } from "@/sanity.helper";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
type AboutInfoData = {
  aboutInfo: AboutInfo;
};
type AboutInfo = {
  name: string;
};
const query = groq`*[_type=='about'] {
    ...,
    socials[]->
  }`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AboutInfoData>
) {
  const aboutInfo: AboutInfo = await sanityClient.fetch(query);
  res.status(200).json({ aboutInfo });
}
