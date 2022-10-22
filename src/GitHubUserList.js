import { useState, useEffect } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUserList ({username}){

    const [users, setUsers] = useState([])
    const [input, setInput] = useState()

    const saveInput = (e) => {
        setInput(e.target.value)
    }

    const addUsername = () => {
        setUsers([...users, input])
    }

    useEffect(()=>{
        if(users) {return () => console.log('mounted')}
    }, [])

    return (
        <div>
        
        <input value={input} onChange={saveInput}></input>
        <button onClick={addUsername}>Add Username</button>

        <ul>
        {users.map((item, index) => {
            return (
                <div>
                    <li key={index}> <GitHubUser username={item} /> </li>
                </div>
            )
        })}
        </ul>
        </div>
    )
}