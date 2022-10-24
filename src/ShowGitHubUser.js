import { Routes, Route, useParams } from 'react-router-dom'
import { GitHubUser } from './GitHubUser'

export function ShowGitHubUser(){

    const {username} = useParams()

    return (
        <div>
            {!username && <GitHubUser username={username}/>}
        </div>
    )
}