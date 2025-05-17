import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "Pepito",
        email: "pepito2000@gmail.com",
    });

    const {username, email} = formState;

    const onInputChange = ( { target }:  React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value} = target;   
        setFormState({
            ...formState, 
            [ name ]:value,
        });
    }

  return (
    <>
    
        <h1>Simple Form</h1>
        <hr/>

        <input 
            type="text" 
            className="form-control mb-3"
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange}/>    
        
        {
            (username === 'Pepito2') && <Message/>
        }

        <input 
            type="text" 
            className="form-control mt-3"
            placeholder="example@gmail.com"
            name="email"
            value={email}
            onChange={ onInputChange}/>
    
    </>
  )
}
