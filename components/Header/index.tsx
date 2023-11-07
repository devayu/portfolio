import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useContext } from "react";
import AccentColorContext, { accents } from "@/Context/AccentColorContext";
import { getHoverClassName } from "@/utils/themeUtil";

export default function () {
  const { accentColor } = useContext(AccentColorContext);

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
        <p className="uppercase hidden md:inline-flex text-sm text-[#FFFFFA]">
          Get in Touch
        </p>
      </motion.div>
    );
  };
  const renderNavMenus = (): JSX.Element => {
    const navItems = ["Home", "About", "Project", "Contact"];
    return (
      <div className="flex gap-10 font-semibold" style={{}}>
        {navItems.map((navItem) => {
          return (
            <nav>
              <a href="" className={getHoverClassName(accentColor)}>
                {navItem}
              </a>
            </nav>
          );
        })}
      </div>
    );
  };

  return (
    <header className="bg-[#06121a] sticky top-0 flex items-center justify-between z-20 p-5 px-10 xl:items-center shadow-lg">
      <h1 className="font-bold tracking-wider text-xl">
        devayu<span style={{ color: accentColor }}>.</span>
      </h1>
      {renderNavMenus()}
    </header>
  );
}
