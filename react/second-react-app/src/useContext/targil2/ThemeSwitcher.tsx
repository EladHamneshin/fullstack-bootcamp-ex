import React from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeSwitcher() {
    const context = React.useContext(ThemeContext);
    const { theme, setTheme } = context!;

  return <>
            <button onClick={()=>setTheme(prev=> prev === 'dark'? 'light': 'dark')}>switch theme</button>
        </>;
}
