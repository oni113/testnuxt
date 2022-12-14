import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
});

function fetchProductById(id) {
    return axiosInstance.get(`/products/${id}`);
}

export {
    fetchProductById
}