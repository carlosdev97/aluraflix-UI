import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const search = async (url, data) => {
    const response = await api.get(url)
    data(response.data)
}