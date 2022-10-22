import { useState } from "react"

export function useForm(){

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPass(e.target.value)
    }

    return{
        username: username,
        password: pass,
        onUser: handleUsername,
        onPass: handlePassword
    }
}