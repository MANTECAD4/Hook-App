import type { Todo } from "@/Types"
import { TodoItem } from "./TodoItem"

type Props = {
    todos:Todo[],
    onDeleteTodo : (arg:Todo) => void,
    onToggleTodo : (arg:Todo) => void,
}
export const TodoList = ( { todos = [], onDeleteTodo, onToggleTodo }:Props  ) => {
  return (
    <>
        <h4>TODOS</h4>
        <hr/>
        <ul className="list-group">
            {
                (todos.length > 0) 
                ? todos.map( todo => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} onDelete = { onDeleteTodo } 
                        onToggle = {onToggleTodo}
                    />
                ))
                :<li className="list-group-item d-flex justify-content-between">
                    <span 
                        className="align-self-center">
                            No todos found
                    </span>
                </li>
            }
        </ul>
    </>
  )
}
