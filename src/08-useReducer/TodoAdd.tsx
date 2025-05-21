import type { Todo } from "@/Types";
import { useState } from "react"


type Props = {
    onAddTodo: (arg:Todo) => void
}



export const TodoAdd = ({ onAddTodo }:Props) => {

    const [description, setDescription] = useState('');
    
    const onFormSubmit = ( event:React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        if(description.length<1) return;
        onAddTodo({
            id: new Date().getTime(),
            description,
            done:false
        });
        setDescription('');
    }
    return (
        <>
            <h4>Add TODO</h4>
            <hr/>
            <form
                onSubmit={ onFormSubmit }
            >
                <div className="row">

                    <div className="col-10 align-self-center">
                        <input 
                            onChange={ ({target}) => setDescription(target.value)}
                            type="text" 
                            placeholder="What needs to be done?"
                            name="description"
                            className="form-control"
                            value={description}
                        />
                    </div>
                    <div className="col-2 align-self-center">
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}