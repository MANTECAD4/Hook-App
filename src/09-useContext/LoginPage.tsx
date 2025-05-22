import { useContext } from "react"
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { greet, setGreet } = useContext( UserContext );
    return (
      <>
          <h1>LoginPage</h1>
          <hr/>
          <p>{greet}</p>

          <button 
          onClick={ () => setGreet('Hola desde el login')}
            className="btn btn-primary mt-2"
          > Set greet 
          </button>
          
      </>
    )
}