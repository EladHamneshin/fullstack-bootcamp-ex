import React, { createContext, useState } from 'react';

type Theme = "dark" | "light";

interface TextContextType {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

type Props = {
    children: React.ReactNode;
}

export const ThemeContext = createContext<TextContextType | null>(null);

const ThemeContextProvider: React.FC<Props> = (props) => {
    const [theme, setTheme] = useState< Theme>('light');
    return (
        <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;