import axios from "axios";


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/',
})

export const getUserRepositories = (username: string) => {
    return githubApi.get(`/users/${username}/repos`)
}