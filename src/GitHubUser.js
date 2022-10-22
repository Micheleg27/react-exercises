import { useGitHubUser } from "./UseGitHubUser"

export function GitHubUser ({username}){

    const {err, load, data} = useGitHubUser(username)

    return (<div>
        {data && <div>GitHub username is: {data.name}</div>}
        {err && <div>{err.message}</div>}
        {load && <div>Loading...</div>}
    </div>)

    
}