import React, { FC } from "react";

interface ContextProps {
  auth: boolean;
  lang: string;
  theme: string;
}

export const AppContext = React.createContext<Partial<ContextProps>>({});

export const AuthProvider: FC = ({ children }) => {
  const props = {
    lang: "de",
    auth: true,
    theme: "light",
  };

  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};
