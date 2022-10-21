import { useEffect, useState } from "react"

export function GitHubUser ({ username }){
    
   const [data, setData] = useState(null);
   const [err, setError] = useState(null);
   const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        fetch(`https://api.github.com/users/${username}`)
            .then( response => response.json())
            .then( json => setData(json))
            .catch((err) => setError(err))
            .finally (() => setLoad(false))

    }, [username])


    return (<div>
        {data && <div>GitHub username is: {data.name}</div>}
        {err && <div>{err.message}</div>}
        {load && <div>Loading...</div>}
    </div>)

    
}