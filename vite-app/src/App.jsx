import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login_Register from "./pages/Login_Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login_Register" element={<Login_Register />} />
    </Routes>
  );
}

export default App;