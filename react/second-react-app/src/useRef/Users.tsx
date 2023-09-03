import React from "react";
import { UserType } from "./types/User";
import User from "./User";

export default function Users() {
    const users: UserType[] = [{name: "moshe", age: 30, email:"moshe@gmail.com"}, {name: "david", age: 40, email:"david@gmail.com"}, 
    {name: "yossi", age: 50, email:"yossi@gmail.com"}, {name: "avi", age: 60, email:"avi@gmail.com"}];

    const usersRef = React.useRef(users);
    const newUserRef = React.useRef<UserType>({name: "", age: 0, email: ""});
    const usersDivsRef = React.useRef<HTMLDivElement>(null);

  return<>
          <div ref={usersDivsRef}>
            {usersRef.current.map((user)=>(<User user={user}/>))}
        </div>
        <form>
            <input type="text" placeholder="name" onChange={(event)=> newUserRef.current.name = event.target.value}/>
            <input type="number" placeholder="age" onChange={(event)=> newUserRef.current.age = +event.target.value} />
            <input type="email" placeholder="email" onChange={(event)=> newUserRef.current.email = event.target.value} />
            <button onClick={(event)=>{ 
                event.preventDefault();
                usersRef.current.push(newUserRef.current);
                if(usersDivsRef.current){
                    //TODO: add the new user to the div
                }
            }}>add user</button>
        </form>
  </> 

}