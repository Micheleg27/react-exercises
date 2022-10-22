import { useForm } from "./useForm";

export function HookForm(){
    const {username, password, onUser, onPass} = useForm();



    return (
        <div>
            <input onChange={onUser} value={username} name='username' type='text' placeholder="Insert Username..."></input>
            <input onChange={onPass} value={password} name='password' type='password' placeholder="Insert Password..."></input>
            <h1>User: {username} <br /> Pass: {password}</h1>
        </div>
    )

}