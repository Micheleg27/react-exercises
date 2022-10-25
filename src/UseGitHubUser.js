import useSWR from 'swr'

export function useGitHubUser(username){

    const fetcher = (url) => fetch(url)
    .then((r) => r.json());

    const {data, err} = useSWR(username ? `https://api.github.com/users/${username}` : null ,  fetcher )

    return (
        {
            data,
            err,
            load: !data && !err,
        }
    )
}