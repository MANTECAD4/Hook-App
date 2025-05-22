import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
      const { greet} = useContext( UserContext );
  
  return (
    <>
        <h1>HomePage</h1>
        <hr/>
        <p>{greet}</p>
        
    </>
  )
}