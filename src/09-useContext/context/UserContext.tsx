import { createContext, type Dispatch, type SetStateAction } from "react";


type UserContextType = {
  greet: string;
  setGreet: Dispatch<SetStateAction<string>>;
};

export const UserContext = createContext<UserContextType>(
    {greet:'', setGreet: () => {}}
);