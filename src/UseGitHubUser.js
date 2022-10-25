import useSWR from 'swr';
import mutate from 'swr'

export function useGitHubUser(username){

    const fetcher = (url) => fetch(url)
    .then((r) => r.json());

    const {data, err, mutate} = useSWR(username ? `https://api.github.com/users/${username}` : null ,  fetcher )

    function refetchData(){
        mutate();
    }

    return (
        {
            data,
            err,
            load: !data && !err,
            onRefresh: refetchData
        }
    )
}