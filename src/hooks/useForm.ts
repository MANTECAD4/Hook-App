import { useState } from "react";
import type { User } from '../Types/User'

export const useForm = ( initialState:User ) => {

    const [formState, setFormState] = useState( initialState );

    const onInputChange = ( { target }:  React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value} = target;   
        setFormState({
            ...formState, 
            [ name ]:value,
        });
    }

    const onResetForm = () => 
    {
        setFormState(initialState);

    }
    

    return {
        formState,
        onInputChange,
        onResetForm,
    };
}