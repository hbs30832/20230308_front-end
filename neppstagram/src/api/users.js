import { axiosInstance } from ".";

export const getCurrentUser = async () => {
  const { data } = await axiosInstance.get("users/current");

  return data;
};

export const updateProfile = async (file) => {
  console.log(file);
  const form = new FormData();

  form.append("profile", file);

  const { data } = await axiosInstance.patch("users/profile", form);

  return data;
};

export const searchUser = async (name, page = 1) => {
  if (name === "") return [];
  const { data } = await axiosInstance.get("/users/search", {
    params: {
      name,
      page,
    },
  });

  return data;
};
