import { Link, Outlet } from "react-router-dom";

// Outlet : 중첩 라우팅을 통해 렌더링 되는 요소가 넘어온다.
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
