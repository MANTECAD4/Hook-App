import { useEffect, useState } from "react";
import type { PokeAPI } from "../Types/PokeApi";
import type { useFetchType } from "../Types/useFetchType";


const initialState: useFetchType = {
    data: null,
    isLoading: true,
    hasError: false,
    error: null
}

export const useFecth = ( url:string ) => {

    const [state, setState] = useState(initialState);

    useEffect(() => {
        getFetch();
    //   setState({
    //     ...state,
    //     data: getFetch()

    //   });
      
    }, [url]);
    

    const getFetch =  async ()  => {
        
        const resp = await fetch(url);
        const  data:PokeAPI  = await resp.json();
        console.log(data.name);
        return data;

    }

    return {

    } 
}
