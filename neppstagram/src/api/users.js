import { axiosInstance } from ".";

export const getCurrentUser = async () => {
  try {
    const { data } = await axiosInstance.get("users/current");

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const updateProfile = async (file) => {
  console.log(file);
  const form = new FormData();

  form.append("profile", file);

  const { data } = await axiosInstance.patch("users/profile", form);

  return data;
};
