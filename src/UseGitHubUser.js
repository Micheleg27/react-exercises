import { useEffect, useState } from "react"
import useSWR from 'swr'

export function useGitHubUser(username){

    const fetcher = (url) => fetch(url)
    .then((r) => r.json());

    const {data, err} = useSWR(`https://api.github.com/users/${username}`, fetcher)

    return (
        {
            users: data,
            err,
            load: !data && !err,
        }
    )
}