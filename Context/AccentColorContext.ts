import { createContext, useContext, useState } from "react";
export const accents = {
  RED: "#e11d48",
  GREEN: "#059669",
  BLUE: "#4f46e5",
};
interface AccentColorContextProps {
  accentColor: string;
  updateAccentColor: (color: string) => void;
}

const AccentColorContext = createContext<AccentColorContextProps>({
  accentColor: accents.BLUE,
  updateAccentColor: (color: string) => {},
});

export default AccentColorContext;
