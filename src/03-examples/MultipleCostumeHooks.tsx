import { useFetch, useCounter } from "../hooks/index.ts";
import { PokemonCard } from "./PokemonCard.tsx";

export const MultipleCustomHooks = () => {
  
  const {counter, onDecrement, onIncrement, onReset} = useCounter(1);
  
  const url:string = `https://pokeapi.co/api/v2/pokemon/${ counter }`;
  
  const { data, error, hasError, isLoading } = useFetch(url);
  

  return (
    <>
    
      <h1 className="">Pokemon {counter } Info</h1>
      
      <hr/>
      <section style={{height: 200}}>

        { hasError && <pre>Error: {error!.code} - {error!.message || 'Deescription not found'}</pre> }
        { isLoading && !hasError
          ? <p>Loading...</p> 
          : <PokemonCard 
              id={counter}
              name={data?.name} 
              sprites={data?.sprites}/>
          // <pre>Pokemon: {data?.name}</pre>
        }


      </section>
        <button 
          disabled = { isLoading } 
          onClick = { onDecrement } 
          className="btn btn-primary me-2"
          >Previous</button>
        
        <button 
          disabled = { isLoading } 
          onClick = { onReset } 
          className="btn btn-primary me-2"
          >Reset</button>
        
        <button 
          disabled = { isLoading } 
          onClick = { onIncrement } 
          className="btn btn-primary"
          >Next</button>

    </>
  )
}


