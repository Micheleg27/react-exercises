import { useState, useEffect } from "react";
import { Link, Route, Outlet } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";
import { ShowGitHubUser } from "./ShowGitHubUser";

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
        {users.map((user, item) => (
                    <li key={item}>
                        <Link to={user} key={item} user={user}>{user}</Link>
                        <Outlet />
                    </li>
                ))}
        </ul>
        </div>
    )
}