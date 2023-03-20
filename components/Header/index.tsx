import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useContext } from "react";
import AccentColorContext from "@/Context/AccentColorContext";
export default function () {
  const { accentColor } = useContext(AccentColorContext);
  const renderSocialIcons = (urls: string[]): JSX.Element => {
    return (
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {urls.map((url) => {
          return (
            <SocialIcon
              url={url}
              bgColor="transparent"
              fgColor={accentColor}
            ></SocialIcon>
          );
        })}
      </motion.div>
    );
  };

  const renderGetInTouch = (): JSX.Element => {
    return (
      <motion.div
        className="flex flex-row items-center cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <SocialIcon
          network="email"
          bgColor="transparent"
          fgColor={accentColor}
        ></SocialIcon>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
          Get in Touch
        </p>
      </motion.div>
    );
  };

  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5 xl:items-center">
      {renderSocialIcons([
        "https://www.youtube.com/watch?v=urgi2iz9P6U&t=650s",
        "https://www.youtube.com/watch?v=urgi2iz9P6U&t=650s",
        "https://www.youtube.com/watch?v=urgi2iz9P6U&t=650s",
      ])}
      {renderGetInTouch()}
    </header>
  );
}
