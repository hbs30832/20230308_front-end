import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://101.101.218.43/",
});

export const signup = async (name, email, password) => {
  const { status } = await authAxios.post("/register", {
    name,
    email,
    password,
  });

  return status;
};

export const login = async (form) => {
  const res = await authAxios.post("/login", form);

  return res;
};
