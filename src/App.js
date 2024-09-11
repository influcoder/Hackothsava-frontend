import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Explore from "./components/explore/Explore";

const AppContent = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
