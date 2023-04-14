import { axiosInstance } from ".";

export const signup = async (name, email, password) => {
  const { status } = await axiosInstance.post("/users", {
    name,
    email,
    password,
  });

  return status;
};

export const login = async (form) => {
  const { data } = await axiosInstance.post("/users/signin", form);

  const { token } = data;

  // 로그인 성공시 jwt 값 헤더에 주입
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;

  // 로컬 스토리지에 저장
  localStorage.setItem("access-token", token);

  return token;
};
