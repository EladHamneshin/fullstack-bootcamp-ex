import React, { createContext, useState, useEffect } from "react";

interface UserContextType {
  user: UserData | null;
  setUser: React.Dispatch<React.SetStateAction<UserData | null>> ;
}

interface UserContextProviderProps {
  children: React.ReactNode;
}

type UserData = {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
            geo: {
                lat: string;
                lng: string;
            };
        };
        phone: string;
        website: string;
        company: {
            name: string,
            catchPhrase: string
            bs: string
        };
}


async function getUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data[0]
}

export const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
  const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        getUsers().then((data) => setUser(data))
    }, [])


  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
