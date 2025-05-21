import { useTodo } from "@/hooks/useTodo";
import { TodoList, TodoAdd } from "./index.ts";


export const TodoApp = () => {

    const {
        counterTodos,
        completed,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todos,
    } = useTodo();    

    return (
        <>
            <h1>TodoApp - {completed}/{counterTodos} completed</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo = { handleDeleteTodo }
                        onToggleTodo = { handleToggleTodo } 
                    />
                </div>
                <div className="col-5">
                    <TodoAdd onAddTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    );
}
