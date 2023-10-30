// I want to make a settings context for my application

import React, { createContext, useState } from "react";

export type SettingsContextState = {
  language: 0 | 1;
  setLanguage: React.Dispatch<React.SetStateAction<0 | 1>>;
};

type SettingsProviderProps = {
  children: React.ReactNode;
};

export const SettingsContext = createContext<SettingsContextState | undefined>({
  language: 1,
  setLanguage: () => {},
});

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [language, setLanguage] = useState<0 | 1>(
    (parseInt(localStorage.getItem("language") as string) as 0 | 1) || 0
  );

  return (
    <SettingsContext.Provider value={{ language, setLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

// export const useSettings = () => useContext(SettingsContext);
