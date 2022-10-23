import { useEffect, useRef, useState } from "react"

export function CarDetails (initialData){
    const formRef = useRef()
    
    const [data, setData] = useState(initialData)
    
    function handleForm (e) {
        e.preventDefault();

        const data = {
            model: formRef.current.elements.model.value,
            year: formRef.current.elements.year.value,
            color: formRef.current.elements.color.value
        }

        setData(data)
    }

    useEffect(() => {setData(initialData)}, [ initialData ])
    useEffect(() => {console.log(data)}, [data])


    
    return (
        <form ref={formRef} onSubmit={handleForm}>
            <input defaultValue={initialData.model} placeholder="Insert Model..." name='model'></input>
            <input defaultValue={initialData.year} placeholder="Insert Year..." name='year'></input>
            <input defaultValue={initialData.color} placeholder="INsert Color..." name='color'></input>

            <button type='submit'>Submit</button>
        </form>
    )
}