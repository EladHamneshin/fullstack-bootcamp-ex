import React from "react";
import { UserContext } from "./UserContext";



export default function Main() {
    const context = React.useContext(UserContext);
    const { user } = context!;

    const [showDetails, setShowDetails] = React.useState(false);

  return <div>   
        <h2>{user?.username}</h2>
        <div style={{visibility: showDetails? 'visible' : 'hidden'}}>
            <div>{user?.name}</div>
            <div>{user?.email}</div>
            <div>{user?.address.city}</div>
            <div>{user?.address.street}</div>
            <div>{user?.address.suite}</div>
        </div>
        <button onClick={()=>setShowDetails(prev=>!prev)}>{showDetails? 'hide' : 'show'}</button>
    </div>;
}
