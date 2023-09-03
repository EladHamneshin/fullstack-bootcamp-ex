import { useRef} from "react";


export default function StyleChanger() {
    const divsRef = useRef<HTMLDivElement[]>([])
 
  return <>
  <div ref={(el: HTMLDivElement)=> divsRef.current[0] = el} style={{backgroundColor: "red"}}>I'm red rectangle</div>
  <div ref={(el: HTMLDivElement)=> divsRef.current[1] = el} style={{backgroundColor: "blue"}}>I'm blue rectangle</div>
  <button onClick={()=>{
    divsRef.current.forEach((el) => el.style.backgroundColor = "white")
  }}>white background</button>
  <button onClick={()=>{
    const temp = divsRef.current[0].textContent;
    divsRef.current[0].textContent = divsRef.current[1].textContent;
    divsRef.current[1].textContent = temp;
  }}>swap text</button>
  </>;
}
