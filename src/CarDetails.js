import { useRef, useState } from "react"

export function CarDetails (initialData){

    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef()

    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [color, setColor] = useState('')

    const handleModel = (e) => {
        setModel(e.target.value)
    }

    


    return(
        <form>
            <input ref={modelRef} value={model} name='model' onChange={handleModel}></input>
            <input ref={yearRef} value={year} name='year'></input>
            <input ref={colorRef} value={color} name='color'></input>
        </form>
    )
}