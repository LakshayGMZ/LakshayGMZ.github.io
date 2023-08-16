import {useCallback, useEffect, useMemo, useState} from 'react'
import HomePage from "./pages/Home.tsx";
import {SetThemeContext, ThemeContext} from "./context/ThemeContext.tsx";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const themeChangeEventListener = useCallback((event: { matches: any; }) => {
        const colorScheme = event.matches ? "dark" : "light";
        console.log(colorScheme); // "dark" or "light"
        setTheme(colorScheme);
    }, [])

    useEffect(() => {
        const themeCheck = window.matchMedia('(prefers-color-scheme: dark)');
        if (themeCheck.matches) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
        themeCheck.addEventListener('change', themeChangeEventListener);

        return () => themeCheck.removeEventListener('change', themeChangeEventListener);
    }, []);

    const MUI_theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: theme
                }
            }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={theme}>
            <SetThemeContext.Provider value={setTheme}>
                <ThemeProvider theme={MUI_theme}>
                    <CssBaseline/>
                    <HomePage/>
                </ThemeProvider>
            </SetThemeContext.Provider>
        </ThemeContext.Provider>
    )
}

export default App
