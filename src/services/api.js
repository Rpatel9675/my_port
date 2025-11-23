import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Add a request interceptor to include the token
API.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
});

export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const bookAppointment = (formData) => API.post('/appointments', formData);
export const getMyAppointments = () => API.get('/appointments/my');
export const updateProfile = (formData) => API.put('/auth/profile', formData);
export const chatQuery = (message) => API.post('/chatbot/query', { message });

export default API;
