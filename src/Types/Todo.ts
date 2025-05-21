export type Todo = {
    id:     number,
    description:   string,
    done:   boolean,
}

export type AddTodoAction = {
    type:    'ADD',
    payload: Todo,
}

export type DeleteTodoAction = {
    type:    'DELETE',
    payload: Todo,
}

export type ToggleTodoAction = {
    type:    'TOGGLE',
    payload: Todo,
}

export type Action = (AddTodoAction | DeleteTodoAction | ToggleTodoAction);