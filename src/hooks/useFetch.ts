import { useEffect, useState } from "react";
import type { PokeAPI, useFetchType } from "../Types/index.ts";

const initialState: useFetchType = {
    data: null,
    isLoading: true,
    hasError: false,
    error: null
}

const localCache: { [key:string]: PokeAPI } = {};

export const useFetch = ( url:string ) => {

    const [state, setState] = useState(initialState);

    useEffect(() => {
        getFetch();
    }, [url]);
    
    const getFetch =  async ()  => {

        if (localCache[url] ){
            console.log('Using cache...');
            setState({
                ...initialState,
                data:localCache[url],
                isLoading:false
            });
            return;
        } 

        setState(initialState);

        await new Promise( resolve => setTimeout(resolve, 1500));
        
        const resp = await fetch(url);

        if (!resp.ok){
            setState({
                ...initialState,
                isLoading:  false,
                hasError:   true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });   
            console.log('trono');
            return;
        }
        const  data:PokeAPI  = await resp.json();
        setState({
            ...initialState,
            data,
            isLoading:false,
        });
        localCache[url] = data;

    }

    return {
        ...state
    } 
}
