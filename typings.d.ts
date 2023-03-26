interface SanityType {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export interface AboutInfo extends SanityType {
  _type: "aboutInfo";
  name: string;
  aboutSmall: string;
  email: string;
  role: string;
  location: string;
  profilePic: Image;
}
