import React, { useRef } from "react";
import Child from "./Child";
import { TextContext } from "./TextContext";


export default function Father() {
    const context = React.useContext(TextContext);
    const {text, setText } = context!;

    const temp = useRef<string>('');

    return <>
            <Child/>
            <input type="text" onChange={(event)=>temp.current =event.target.value} />
            <button onClick={()=>setText(temp.current)}>click me</button>
           </>;
}
