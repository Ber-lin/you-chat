import { message } from "antd";
import { Axios } from "axios";

export const bapi = new Axios({
  timeout: 15000,
  baseURL: "/blhx-api",
});

const api = new Axios({
  timeout: 15000,
  baseURL: "/api-v1",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((req) => {
  const type = Object.prototype.toString
    .call(req.data)
    .slice(8, -1)
    .toLowerCase();
  if (type !== "formdata") {
    req.headers["Content-Type"] = "application/json";
    req.data = JSON.stringify(req.data);
  }
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
