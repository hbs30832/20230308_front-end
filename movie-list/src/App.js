import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Detail from "./components/Detail";
import Post from "./components/Post";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />}>
          <Route path="" element={<PostList />} />
          <Route path="post" element={<Post />} />
          <Route path=":id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

/* 
  react-router-dom
    - SPA(Single Page Applicatoin)을 만들 수 있게 해주는 라이브러리이다.
    - 경로에 따라 렌더링될 컴포넌트를 지정하는 라우팅처리를 해준다.

  1. 컴포넌트들
  - <BroswerRouter> : HTML5를 지원하는 브라우저의 주소를 감지 한다.
  - <Routes> : 라우팅될 <Route>를 포함하는 컴포넌트.
  - <Route> : 경로에 따라 렌더링될 element를 지정하는 컴포넌트.
    1) path : 렌더링될 경로를 지정한다.
      => *는 모든 문자를 나타내는 와일드 카드를 의미한다.
      => :id와 같이 :를 앞에 붙여서 작성하면 useParams()를 통해 해당 컴포넌트에서 값을 받을 수 있다.
    2) element : 렌더링될 요소를 작성한다.
    3) 중첩 라우팅 : <Route>안에 <Route>를 포함시키면 중첩라우팅이 된다.
      => 라우팅된 컴포넌트에서 <Outlet> 컴포넌트를 통해 내용에 포함시킬 수 있다.
  - <Link> : 새로고침이 발생되지 않고 경로만 바꾸는 링크 컴포넌트.
    => to 프로퍼티에 이동할 경로를 작성한다.
    => 앞에 "/"가 붙으면 root를 기준으로, 안붙으면 현재 위치를 기준으로 이동한다.
  - <Outlet> : 중첩 라우팅된 요소들을 받을 수 있다.

  2. Hook
    - useParams() : path 파라미터들을 프로퍼티로 가진 객체를 반환한다.
    - useNavigate() : <Link> 컴포넌트가 아닌 함수 내부에서 경로를 바꾸는 코드를 작성할 때 사용하는 함수를 반환한다.
    - useSearchParams() : 쿼리 스트링 값들을 가진 객체를 반환한다.
      => 프로퍼티 참조가 아니라 URLSearchParams.prototype.get("키값")의 형태로 사용한다.
    - useLocation : URL에 대한 정보를 받아온다.
*/

export default App;
