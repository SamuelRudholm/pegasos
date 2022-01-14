import React, { ReactNode } from "react";
import { AuthProvider } from "../authentication/FirebaseAuthProvider/FirebaseProvider";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};
