import React from "react";
import { User } from "./User";
import {Todo} from './Todo';
import Todos from "./Todos";

type Props = {user: User};


async function getUserTodos(userId: number) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data.filter((todo: Todo) => todo.userId === userId).slice(0, 5);
}

export default function UserCard(props: Props) {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    return <div className="user" onClick={(event) => {
        getUserTodos(props.user.id).then((data) => setTodos(data));
    } }>
    <div>{props.user.id}</div>
    <div>{props.user.name}</div>
    <div>{props.user.email}</div>
    {<Todos todos={todos}/>}
    </div>;
}