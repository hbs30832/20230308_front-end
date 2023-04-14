import { axiosInstance } from ".";

export const getPosts = async (page = 1) => {
  console.log(page);
  const { data } = await axiosInstance.get("/posts", {
    params: {
      page,
    },
  });

  return data;
};
