import axios from "axios";

const app = axios.create({ baseURL: "http://localhost:4070" });
export default app;
