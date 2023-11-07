interface ISanity {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface IImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface IAbout extends ISanity {
  _type: "about";
  name: string;
  subtitle: string;
  email: string;
  role: string;
  location: string;
  socials: Socials[];
  profilePic: IImage;
}

export interface ISkills extends ISanity {
  _type: "skills";
  subtitle: string;
  skillsList: ISkill[];
}
export interface ISocials extends ISanity {
  _type: "social";
  socialTitle: string;
  socialUrl: string;
}
export interface IProjects extends ISanity {
  _type: "projects";
  title: string;
  projectList: IProject[];
}
export interface IProject extends ISanity {
  _type: "project";
  title: string;
  desc: string;
  codeLink: string;
  demoLink: string;
  techStack: ISkill[];
  projectImg: IImage;
}
export interface ISkill extends ISanity {
  skillTitle: string;
  skillImage: IImage;
}
