import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://101.101.218.43/",
});

export const login = async (name, email, password) => {
  const { status } = await authAxios.post("/register", {
    name,
    email,
    password,
  });

  return status;
};
