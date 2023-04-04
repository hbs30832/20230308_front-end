import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Post() {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const [searchParams] = useSearchParams();

  const id = searchParams.get("postId");

  console.log(id);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  console.log(inputs);

  const handleSubmit = async () => {
    const method = id ? "patch" : "post";
    const url = "http://localhost:8000/posts/" + (id || "");

    const { status, data } = await axios[method](url, {
      title: inputs.title,
      body: inputs.body,
    });

    if (status === 201) {
      alert("게시물이 등록되었습니다.");
    } else if (status === 200) {
      alert("게시물이 수정되었습니다.");
    }

    navigate("/about/" + data.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:8000/posts/" + id);

      setInputs({
        title: data.title,
        body: data.body,
      });
    };

    fetchData();
  }, [id]);
  return (
    <div>
      <h2>게시물 작성</h2>
      <input
        type="text"
        name="title"
        onChange={handleInputs}
        value={inputs.title}
      />
      <br />
      <textarea
        name="body"
        cols="30"
        rows="10"
        onChange={handleInputs}
        value={inputs.body}
      ></textarea>
      <br />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default Post;
