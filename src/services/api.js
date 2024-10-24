import axios from "axios";

const api = axios.create({
  baseURL: "https://brasilapi.com.br/api", // Defina a baseURL aqui
});

export default api;