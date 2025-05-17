import { useForm } from "../hooks/useForm";
import type { User } from "../Types/User";

const initialState:User = {
    username: '',
    email: '',
    password: '',
}

export const SimpleFormCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm( initialState );

    const { email, username, password } = formState;

    return (
        <>
        
            <h1>Simple Form Custom Hook</h1>
            <hr/>
            {/* <form> */}

                <input 
                    type="text" 
                    className="form-control mb-3"
                    placeholder="Username"
                    name="username"
                    value={username}
                    autoComplete="username"
                    onChange={onInputChange}/>    

                <input 
                    type="text" 
                    className="form-control mt-3"
                    placeholder="example@gmail.com"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={ onInputChange}/>

                <input 
                    type="password" 
                    className="form-control mt-3"
                    placeholder="Password"
                    name="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={ onInputChange }/>

                <button onClick={ onResetForm } className="btn btn-danger mt-2">Reset</button>
            
            {/* </form> */}
        </>
    )
}
