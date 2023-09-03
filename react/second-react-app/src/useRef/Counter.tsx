import {useRef} from "react";


export default function Counter() {
    const counterDivRef = useRef<HTMLDivElement>(null);


    return <>
    <div ref={counterDivRef}>0</div>
    <button onClick={() => {
        if(counterDivRef.current){
            let counter = Number(counterDivRef.current.innerText);
            counterDivRef.current.innerText = String(++counter);
        }        
        }}>add one</button>
        <button onClick={() => {
             if(counterDivRef.current)
             counterDivRef.current.innerText = "0";
        }}>
            reset
        </button>
    </>;
}
