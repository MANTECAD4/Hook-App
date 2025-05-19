import { useState } from "react"


export const useCounter = ( initialState:number = 1) => {

    const [counter, setCounter] = useState(initialState);

    const onIncrement = ():void => {
        setCounter( counter + 1 );
    }

    const onDecrement = ():void => {
        if (counter <= 1) return;
        setCounter( counter - 1 );
    }

    const onReset = ():void => {
        setCounter( initialState );
    }

    return {
        counter,
        onDecrement,
        onIncrement,
        onReset,
    }
}