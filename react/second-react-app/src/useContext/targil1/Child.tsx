import React from "react";
import { TextContext } from "./TextContext";

export default function Child() {
    const context = React.useContext(TextContext);
    const { text, setText } = context!;

    React.useEffect(() => {
        setText(prev => prev + ' world')
    }, [])

    return <div>{text}</div>;
}
