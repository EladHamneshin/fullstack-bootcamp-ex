import React from "react";
import { ThemeContext } from "./ThemeContext";

export default function Headline() {
    const context = React.useContext(ThemeContext);
    const { theme, setTheme } = context!;

  return <h1 style={theme === 'dark'? {backgroundColor: 'black', color: "white"}: {backgroundColor: 'white', color: "black"}}>
            Headline
    </h1>;
}