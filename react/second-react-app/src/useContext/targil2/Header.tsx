import React from "react";
import { UserContext } from "./UserContext";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
    const context = React.useContext(UserContext);
    const { user } = context!;


  return <>
    <h2>{user?.username}</h2>
    <ThemeSwitcher />
  </>;
}
