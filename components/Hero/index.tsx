import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useContext } from "react";
import AccentColorContext, { accents } from "@/Context/AccentColorContext";
import { log } from "console";
export default function () {
  const { accentColor, updateAccentColor } = useContext(AccentColorContext);
  const [text, count] = useTypewriter({
    words: ["Developer", "Designer"],
    loop: true,
    delaySpeed: 1500,
  });
  const renderBackgroundView = (): JSX.Element => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 3, 1],
          opacity: [0.2, 0.4, 0.8, 1],
          borderRadius: ["20%", "20%", "50%", "80%"],
        }}
        transition={{
          duration: 2.5,
        }}
        className="relative flex justify-center items-center"
      >
        <div
          className={`absolute border border-${accentColor}-500 rounded-full h-[280px] w-[280px] mt-52 animate-ping`}
        ></div>
        <div className="absolute border border-red-400 rounded-full h-[380px] w-[380px] mt-52 animate-ping"></div>
        <div className="absolute border border-red-200 rounded-full h-[480px] w-[480px] mt-52 animate-ping"></div>
        <div className="absolute border border-red-500 rounded-full h-[280px] w-[280px] mt-52 animate-pulse"></div>
      </motion.div>
    );
  };
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <h1>
        <span>
          Hi, I am Ayush Maurya{" "}
          <span style={{ color: accentColor }}>{text}</span>
        </span>
        <Cursor cursorColor={accentColor}></Cursor>
      </h1>
      <button onClick={() => updateAccentColor(accents.RED)}>
        Set theme RED
      </button>
      <button onClick={() => updateAccentColor(accents.GREEN)}>
        Set theme GREEN
      </button>
      <button onClick={() => updateAccentColor(accents.BLUE)}>
        Set theme Blue
      </button>
      {/* {renderBackgroundView()} */}
    </div>
  );
}
