import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPostById } from "../../api/posts";
import styled from "styled-components";
import UserInfo from "../common/UserInfo";

function PostDetail() {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["/postsDetail", id], getPostById);

  console.log(data);

  if (isLoading) return <div>로딩 중...</div>;
  return (
    <Container>
      <UserInfo user={data.author} />
      <ul>
        {data.img_list.map((img) => (
          <li key={img.id}>
            <ImageBox>
              <img src={img.url} alt={img.key} />
            </ImageBox>
          </li>
        ))}
      </ul>
      <p>{data.body}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: cente;
  width: 200px;
  height: 200px;

  img {
    width: 100%;
  }
`;

export default PostDetail;
