import { useCounter } from "../hooks/useCounter"


export const CustomCounterHook = () => {

    const { counter, onIncrement, onDecrement, onReset } = useCounter(0);

    return (
        <>
            <h1>Counter with custom hook: {counter}</h1>
            <hr/>
            {/* On click manda como argumento el event por defecto (event) => onIncrement(event) */}
            <button onClick={onIncrement} className="btn btn-primary">+1</button>
            <button onClick={onReset} className="btn btn-success">reset</button>
            <button onClick={onDecrement} className="btn btn-danger">-1</button>
        </>
  )
}
