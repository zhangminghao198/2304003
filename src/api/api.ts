import { axios } from './http'

export const indexApi = (data?: any) => {
    return axios.get('/index-infos', data)
}

export const flApi = (data?: any) => {
    return axios.get('/categories', data)
}