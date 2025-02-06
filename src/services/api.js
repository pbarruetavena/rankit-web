import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/rankit', 
});

export const getUsers = async () => {
    const response = await api.get('/users'); 
    return response.data; 
};

export const createUser = async (user) => {
    const response = await api.post('/users', user); 
    return response.data; 
};
