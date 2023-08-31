
import  { useState, useEffect } from 'react';

export default function Footer() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {setInterval(() => setDateState(new Date()), 1000)});
  
    return (
    <div><h4>Elad Hamneshin</h4>
    <p>
      {dateState.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
      })}
      {" , "}
      {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false,
      })}
    </p>
    </div>

  )
}