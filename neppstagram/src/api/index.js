import axios from "axios";

const token = localStorage.getItem("access-token");

export const axiosInstance = axios.create({
  baseURL: "http://101.101.218.43",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
