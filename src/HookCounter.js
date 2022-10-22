import { useCounter } from "./useCounter";


export function HookCounter(initialValue){
    const {count, onIncrement, onDecrement, onReset} = useCounter(initialValue)

    return      <div>
                    <button onClick={onIncrement}>Increment</button>
                    <button onClick={onDecrement}>Decrement</button>
                    <button onClick={onReset}>Reset</button>
                    <h1>Count: {count}</h1>
                </div>

}