import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://aluraflix-api.onrender.com/'
})

export const search = async (url, data) => {
    const response = await api.get(url)
    data(response.data)
};

export const create = async (url, data) => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const remove = async (url, id) => {
    try {
        const deleteUrl = `${url}/${id}`;
        const response = await api.delete(deleteUrl);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};