import axios from "axios";

const BASEURL = "http://localhost:5000";
// axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config, _onRejected) {
    config.headers['auth-token'] = localStorage.getItem('token') || '';
    return config;
});

export const addUser = (data) => axios.post(`${BASEURL}/api/user`, data);
export const getUser = (data) => axios.get(`${BASEURL}/api/user`, data);
export const updateUser = (data) => axios.put(`${BASEURL}/api/user`, data);
export const getAllUsers = (data) => axios.get(`${BASEURL}/api/getallusers`, data);