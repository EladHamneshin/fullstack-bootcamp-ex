
import {Todo} from './Todo';

type Props = {todos: Todo[]} ;

export default function Todos(props: Props) {
  return <ul>
            {props.todos.map((todo)=>(<li key={todo.id}>{todo.title}</li>))}
        </ul>;
}
