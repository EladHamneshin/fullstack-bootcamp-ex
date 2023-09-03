import React from "react";
import UserCard from "./UserCard";
import { User } from "./User";


async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

export default function UsersFromServer() {
   const [users, setUsers] = React.useState<User[]>([]); 

    React.useEffect(() => {
        getUsers().then((data) => setUsers(data));
    }, []);

  return <div>
            {users.map((user)=>(<UserCard key={user.id} user={user}/>))}
        </div>;
}
