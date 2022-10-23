import { useState, useCallback } from "react";

export function useCounter ({initialValue = 0, counterOne = 1}){

    const [count, setCounter] = useState(initialValue)

    const incrementCount = useCallback (function incrementCount(){
        setCounter((count) => count + counterOne)
    }, [])

    
    const decrementCount = useCallback (function decrementCount() {
        setCounter((count) => count - counterOne)
    }, [])


    const resetCount = useCallback (function resetCount() {
        setCounter(initialValue)
    }, [])

    return {
        count: count,
        onIncrement: incrementCount,
        onDecrement: decrementCount,
        onReset: resetCount
    }

}