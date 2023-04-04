import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams(); // 경로로부터 파라미터를 받는다. 문자열로 넘어온다.

  const [post, setPost] = useState(null);
  // http://localhost:8000/posts/1 => id가 1번인 post 하나

  const fetchData = useCallback(async () => {
    const { data } = await axios.get("http://localhost:8000/posts/" + id);
    setPost(data);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!post) return <div>해당 게시물이 존재하지 않습니다.</div>;

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 50,
        }}
      >
        <h2>{post.title}</h2>
        <Link to={"/about/post?postId=" + post.id}>수정하기</Link>
      </div>

      <p>{post.body}</p>
    </div>
  );
}

export default Detail;
