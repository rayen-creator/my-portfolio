"use client";
import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type ThemeContextValue = [boolean, Dispatch<SetStateAction<boolean>>];

const Context = createContext<ThemeContextValue>([true, () => {}]);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <Context.Provider value={[darkMode, setDarkMode]}>
      {children}
    </Context.Provider>
  );
}

export function useThemeContext() {
  return useContext(Context);
}