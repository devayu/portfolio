import React, { useState } from "react";
import AccentColorContext, { accents } from "./AccentColorContext";

interface AccentColorProviderProps {
  children: React.ReactNode;
}

const AccentColorProvider = ({ children }: AccentColorProviderProps) => {
  const [accentColor, setAccentColor] = useState<string>(accents.BLUE);

  const updateAccentColor = (color: string) => {
    setAccentColor(color);
  };

  return (
    <AccentColorContext.Provider value={{ accentColor, updateAccentColor }}>
      {children}
    </AccentColorContext.Provider>
  );
};

export default AccentColorProvider;
