import { Routes, Route, useNavigate } from "react-router-dom";
import Auth from "./components/pages/Auth";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import Profile from "./components/pages/Profile";
import Public from "./components/pages/Public";
import PostList from "./components/post/PostList";
import PostDetail from "./components/post/PostDetail";
import { useQuery } from "react-query";
import { getCurrentUser } from "./api/users";
import EditPost from "./components/post/EditPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
        </Route>
        <Route path="/" element={<Public />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Post />}>
            <Route path="" element={<PostList />} />
            <Route path=":id" element={<PostDetail />} />
            <Route path="edit" element={<EditPost />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
