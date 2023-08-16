import React, {createContext, SetStateAction, useReducer, useState} from "react";

export const ThemeContext = createContext("light");
export const SetThemeContext = createContext(() => {});
