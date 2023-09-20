 import axios from "axios";

 //89226010/json/

 const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
 });

 export default api;