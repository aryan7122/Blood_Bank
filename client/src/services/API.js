import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
});
// || 'https://blood-back-server.onrender.com' || 'http://localhost:8081/api/v1/auth'
// || 'http://localhost:8081/api/v1/auth' || ''

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;