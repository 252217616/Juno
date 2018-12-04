import axios from "axios"

export const postHttp = (url,params) => {
    return axios.post(url, params)
}
export const getHttp = (url,params) => {
    return axios.get(url, params)
}