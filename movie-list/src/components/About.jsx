import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>About 컴포넌트입니다.</p>
      <Outlet />
      <Link to="post">작성하기</Link>
    </div>
  );
}

export default About;
