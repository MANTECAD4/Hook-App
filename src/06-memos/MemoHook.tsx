import { useCounter } from "@/hooks"
import { useMemo, useState } from "react";

const heavyStuff = ( iterationNumber:number = 100) => {

    for (let index = 0; index < iterationNumber; index++) {
        console.log('Here we go...' + iterationNumber);       
    }

    return `${iterationNumber} iterations executed.`;

}

export const MemoHook = () => {

    const [show, setShow] = useState(true);

    const {counter, onIncrement} = useCounter(1000);

    const memorizedValue = useMemo( () => heavyStuff( counter ) ,[counter]);
    return (
        <>
        
            <h1>Counter: <small>{counter}</small></h1>
            <hr/>

            <h4>{ memorizedValue }</h4>
            <button 
                onClick={onIncrement}
                className="btn btn-primary me-2">+1</button>

            <button 
                className="btn btn-outline-primary"
                onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
