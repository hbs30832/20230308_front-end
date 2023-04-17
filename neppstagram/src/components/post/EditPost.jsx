import { useState } from "react";
import styled from "styled-components";
import { createPost } from "../../api/posts";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

// src/components/post/Editpost.jsx
function EditPost() {
  const [body, setBody] = useState("");
  const [files, setFiles] = useState(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: "posts/create",
    mutationFn: () => createPost(body, files),
    onSuccess: (data) => {
      navigate(`/posts/${data.id}`);
    },
  });

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleFiles = (e) => {
    console.log(e.target.files);
    setFiles(e.target.files);
  };

  const onClick = () => {
    mutation.mutate();
  };

  return (
    <Container>
      <input type="file" multiple onChange={handleFiles} accept="image/*" />
      <textarea onChange={handleBody}></textarea>
      <button onClick={onClick}>등록하기</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  textarea {
    width: 300px;
    height: 150px;
    resize: none;
  }
`;

export default EditPost;
