import type { Action, Todo } from "@/Types";

export const todoReducer = ( initialState:Todo[], action:Action ) => {

    if(!action) return initialState;

    switch (action.type) {
        case 'ADD':
            return [...initialState,action.payload];
        case 'DELETE':
            return initialState.filter(todo => todo.id !== action.payload.id);
        case 'TOGGLE':
            return initialState.map( (todo) => {
                return (todo.id === action.payload.id) ? {...todo, done: !todo.done }: todo;
            });
        default:
            return initialState;
    }
}