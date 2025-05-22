import { useState, type ReactNode } from "react"
import { UserContext } from "./UserContext"

type Props = {
    children:ReactNode
}


export const UserProvider = ( { children }:Props ) => {
  const [greet, setGreet] = useState('hola');
  return (
    <UserContext.Provider value = { {greet, setGreet } }>
        { children }
    </UserContext.Provider>
  )
}
