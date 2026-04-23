<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import './styles/index.css'
=======
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
>>>>>>> 07ea238762462acc42c3aefe5d5565e124693ec1


import HomePage from "./pages/HomePage";
import Login_Register from "./pages/Login_Register";
import UserPage from "./pages/UserPage";
import Header from "./pages/Header";
import Sidebar from "./pages/Sidebar";

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <App />
=======
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/Login_Register" element={<Login_Register />} />
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
>>>>>>> 07ea238762462acc42c3aefe5d5565e124693ec1
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);