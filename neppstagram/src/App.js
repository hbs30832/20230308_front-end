import { Routes, Route } from "react-router-dom";
import Auth from "./components/pages/Auth";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";

function App() {
  return (
    <Routes>
      <Route path="auth" element={<Auth />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Route>
    </Routes>
  );
}

export default App;
