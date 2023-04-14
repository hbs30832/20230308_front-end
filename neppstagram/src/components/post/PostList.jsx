// src/components/post/PostList.jsx

import { useQuery } from "react-query";
import { getPosts } from "../../api/posts";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ["/postList", page],
    queryFn: () => getPosts(page),
    cacheTime: 5000,
    staleTime: 2000,
  });
  console.log(data);

  if (isLoading) return;

  return (
    <div>
      <button onClick={() => setPage(page > 1 ? page - 1 : page)}>이전</button>
      <button onClick={() => setPage(data.length < 10 ? page : page + 1)}>
        다음
      </button>
      <ul>
        {data.map((post) => (
          <li>
            <Link to={`/posts/${post.id}`}>
              <ImageBox>
                <img src={post.img_list[0].url} alt="" />
              </ImageBox>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  img {
    width: 100%;
  }
`;

export default PostList;
