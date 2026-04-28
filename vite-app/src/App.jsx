import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login_Register from "./pages/Login_Register";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login_Register" element={<Login_Register />} />
      <Route path="/UserPage" element={<UserPage />} />
    </Routes>
  );
}

export default App;