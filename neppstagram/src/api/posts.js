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

export const createPost = async (body, files) => {
  const form = new FormData();
  form.append("body", body);

  /* 
    유사배열. 들어온 개수만큼 반복하기.
      1) 유사배열 => 배열로 변환
      2) 이터러블(반복 가능) => for ~ of
  */
  for (let file of files) {
    form.append("files", file);
  }

  const { data } = await axiosInstance.post("posts", form);

  return data;
};
