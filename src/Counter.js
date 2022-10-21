import { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter ({initVal = 0}) {

    let [cont, setCont] = useState(initVal)

    function handleCont () {
        setInterval(() => {
            setCont(cont => cont + 1)
        }, 1000)
    }


    useEffect(() => {
        handleCont()

        return () => {
            console.log('CounterFunc has unmounted')
        }
    }, [])

    return (
        <div>
           <h1><CounterDisplay count={cont}/></h1>
        </div>
    )
}