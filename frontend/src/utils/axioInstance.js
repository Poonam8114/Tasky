import axios from "axios"

const BASE_URL = "http://localhost:3000/api"

//const BASE_URL = "https://tasky-backend-e2cr.onrender.com"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export default axiosInstance
//create axios instance
  