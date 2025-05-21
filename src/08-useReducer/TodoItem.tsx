import type { Todo } from "@/Types"

type Props = {
  todo:      Todo,
  onDelete : (arg:Todo) => void,
  onToggle : (arg:Todo) => void
}

export const TodoItem = ( { todo, onDelete, onToggle }:Props ) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
          <span
              className = {`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }`}>
                <input 
                  onChange={ () => onToggle(todo) }
                  className="form-check-input me-2 " 
                  type="checkbox" 
                  checked={todo.done} 
                />
                {todo.description}
          </span>
          <button 
              onClick={ () => onDelete( todo )  }
              className="btn btn-danger"
          >
              Delete
          </button>
      </li>
    </>
  )
} 
