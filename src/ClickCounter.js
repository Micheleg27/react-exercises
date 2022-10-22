import React, { useEffect, useState } from "react";

export function ClickCounter ({initialValue = 0, incrementOne = 1}, props) {

    const [count, setCount] = useState(initialValue)

    const incrementCount = () => {
        setCount(count + incrementOne)
    }

    useEffect(() => {
        props.onCounterChange(count);
    }, 
    
    [count, props]);

    return      <div>
                    <button onClick={incrementCount}>Click Counter</button>
                    <h1>Count: {count}</h1>
                </div>
}