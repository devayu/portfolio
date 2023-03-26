import { createContext, useContext, useState } from "react";
export const accents = {
  RED: "#E01A4F",
  GREEN: "#5FB49C",
  BLUE: "#4070F4",
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
