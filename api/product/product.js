import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
});

function fetchProductById(id) {
    return axiosInstance.get(`/products/${id}`);
}

function fetchProductByKeyword(keyword) {
    return axiosInstance.get(`/products`, {
        params: {
            name_like: keyword
        }
    })
}

export {
    fetchProductById, fetchProductByKeyword
}