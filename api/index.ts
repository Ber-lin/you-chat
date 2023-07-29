import { Axios } from "axios";

export const bapi = new Axios({
  timeout: 15000,
  baseURL: "/api-blhx",
});
