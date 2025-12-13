import React, { createContext, useContext, useMemo, useState } from "react";

type ControlContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const ControlContext = createContext<ControlContextType | undefined>(undefined);

const ControlProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn]);

  return (
    <ControlContext.Provider value={value}>{children}</ControlContext.Provider>
  );
};

export const useControlContext = () => {
  const context = useContext(ControlContext);
  if (!context) {
    throw new Error("useControlContext must be used within a ControlProvider");
  }
  return context;
};

export default ControlProvider;
