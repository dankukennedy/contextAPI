import { createContext, useState } from "react";
type ThemeType ='light'|'dark'

type ThemeContextType ={
    theme:ThemeType,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({theme:'light', toggleTheme: () =>{}})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}