import axios from "axios";

const api = axios.create({
  baseURL: "https://queuetrack-order-tracking-system.onrender.com",
});

export default api;