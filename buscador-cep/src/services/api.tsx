import axios from "axios";

// API de consulta
// number/json

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
})

export default api;