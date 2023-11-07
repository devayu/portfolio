import { sanityClient } from "@/sanity.helper";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
type ProjectsData = {
  projects: Project;
};
type Project = {
  name: string;
};
const query = groq`*[_type=='projects'] {
    ...,
    "projectList": projectList[]-> {
        ...,
        "techStack": techStack[]->
      }
  }`;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectsData>
) {
  const projects: Project = await sanityClient.fetch(query);
  res.status(200).json({ projects });
}
