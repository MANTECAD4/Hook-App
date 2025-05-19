import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const onIncrement = useCallback(
      ( incrementator:number) => {
        setCounter(value => value+incrementator);
      },
      [  ],
    )
    

    return (
      <>
          <h1>useCallback Hook: { counter }</h1>

          <ShowIncrement increment={onIncrement}/>
      </>
    )
}
