import { message } from "antd";
import { Axios } from "axios";

export const bapi = new Axios({
  timeout: 15000,
  baseURL: "/blhx-api",
});

const api = new Axios({
  timeout: 15000,
  baseURL: "/api1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((req) => {
  req.data = JSON.stringify(req.data);
  return req;
});
api.interceptors.response.use((res) => {
  if (!/^(2|3)\d{2}$/.test(res.status + "")) {
   return Promise.reject(JSON.parse(res.data).message);
  }
  return JSON.parse(res.data);
});
api.interceptors.response.use(null, (reject) => {
  message.error(reject);
});

export { api };
