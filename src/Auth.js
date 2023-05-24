import axios from "axios";

const API_URL = "https://reqres.in/api";

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {email, password});
        const {token} = response.data;
        localStorage.setItem('token', token);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
}

export const logout = () => {
    localStorage.removeItem('token');
}