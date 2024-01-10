import { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("");

  const setNewColor = (newColor) => {
    setCurrentColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ currentColor, setNewColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(ColorContext);
};
