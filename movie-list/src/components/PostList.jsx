import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostList() {
  // /about/list 경로 일때 보여주기
  const [posts, setPosts] = useState(null);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:8000/posts");

    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!posts) return null;

  return (
    <div>
      <h2>게시물 목록</h2>
      <ul>
        {posts.map((post) => (
          <li>
            <Link to={"/about/" + post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
