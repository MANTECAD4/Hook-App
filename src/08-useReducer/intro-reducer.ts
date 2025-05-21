import type  {Todo, Action}  from "@/Types/Todo";

const initialState:Todo[] = [{
    id:     1,
    description:   'Conquistar el mundo',
    done:   false,
}];


const todoReducer = ( state:Todo[] = initialState, action:Action ):Todo[] => {

    if (!action) return state;

    switch (action.type.toLowerCase()) {
        case 'add':
            return [...state, action.payload];
    
        default:
            console.log(`Action ${action.type} not recognized.`);
            return state;
    }
     
}
const newTodo = {
    id:     2,
    description:   'Destruir Puebla',
    done:   false,
}

const addTodo = {
    type:    'add',
    payload: newTodo,
}
let todos = todoReducer(initialState, addTodo);
console.log(todos);