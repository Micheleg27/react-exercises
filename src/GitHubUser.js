import { useGitHubUser } from "./UseGitHubUser"

export function GitHubUser ({username = 'gianmarcotoso'}){

    const {users, load, err} = useGitHubUser(username)

    return (<div>
        {users && <div>GitHub username is: {users.name}</div>}
        {err && <div>{err.message}</div>}
        {load && <div>Loading...</div>}
    </div>)

    
}