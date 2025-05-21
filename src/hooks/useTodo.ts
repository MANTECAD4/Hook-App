import {  useEffect, useMemo, useReducer } from "react"
import type  {Action, Todo}  from "@/Types/Todo";
import { todoReducer } from "@/08-useReducer";

export const useTodo = () => {

        const init = () => {
            const rawData = localStorage.getItem('todos');
            if(!rawData) return [];
            const data = JSON.parse(rawData);
            return data;
        }
    
        const [todos, dispatch] = useReducer(todoReducer, [], init);
    
        useEffect(() => {
            const data = JSON.stringify(todos);
            localStorage.setItem('todos', data);
        }, [todos]);
    
        const handleNewTodo = ( todo:Todo ) => {
    
            const addTodoAction:Action = {
                type:'ADD',
                payload:todo
            }
            dispatch(addTodoAction);
        }
    
        const handleDeleteTodo = ( todo:Todo ) => {
    
            const deleteTodoAction:Action = {
                type:'DELETE',
                payload:todo
            }
            dispatch(deleteTodoAction);
        }
    
        const handleToggleTodo = ( todo:Todo ) => {
            const deleteTodoAction:Action = {
                type:'TOGGLE',
                payload:todo
            }
            dispatch(deleteTodoAction);
        }
    
        const completed = useMemo(() => todos.filter(todo => todo.done === true).length, [todos]);
    
        return {
            counterTodos: todos.length,
            completed,
            handleDeleteTodo,
            handleNewTodo,
            handleToggleTodo,
            todos,
        }
}