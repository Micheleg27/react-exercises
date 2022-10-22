import { useState } from "react"

export function useCounter ({initialValue = 0, counterOne = 1}){

    const [count, setCounter] = useState(initialValue)

    const incrementCount = () => {
        setCounter(count + counterOne)
    }
    const decrementCount = () => {
        setCounter(count - counterOne)
    }
    const resetCount = () => {
        setCounter(initialValue)
    }

    return {
        count: count,
        onIncrement: incrementCount,
        onDecrement: decrementCount,
        onReset: resetCount
    }

}