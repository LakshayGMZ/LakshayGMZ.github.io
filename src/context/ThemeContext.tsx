import React, {createContext} from "react";

export const ThemeContext = createContext("light");
export const SetThemeContext = createContext((e: any) => e);
