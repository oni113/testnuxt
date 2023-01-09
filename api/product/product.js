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

function fetchCartItems() {
    return axiosInstance.get('/carts');
}

function createCartItem(cartItem) {
    return axiosInstance.post('/carts', cartItem);
}

export {
    fetchProductById, 
    fetchProductByKeyword,
    fetchCartItems,
    createCartItem
}