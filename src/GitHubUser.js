import { useGitHubUser } from "./UseGitHubUser"

export function GitHubUser ({username = 'gianmarcotoso'}){

    const {data, load, err} = useGitHubUser(username)

    return (<div>
        {data && <div>GitHub username is: {data.name}</div>}
        {err && <div>{err.message}</div>}
        {load && <div>Loading...</div>}
    </div>)

    
}