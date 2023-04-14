import { axiosInstance } from ".";

export const getPosts = async (page = 1) => {
  const { data } = await axiosInstance.get("/posts", {
    params: {
      page,
    },
  });

  return data;
};

export const getPostById = async ({ queryKey }) => {
  console.log(queryKey[1]);
  const { data } = await axiosInstance.get("/posts/" + queryKey[1]);

  return data;
};
