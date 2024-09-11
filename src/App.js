import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import CreatePod from "./components/pods/CreatePod";
import Explore from "./components/explore/Explore";
import WhiteBoard from "./components/whiteboard/WhiteBoard";
import Pod from "./components/pods/Pod";
import TaskSubmission from "./components/submissions/TaskSubmission";

const AppContent = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-pod" element={<CreatePod />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/whiteboard" element={<WhiteBoard />} />
        <Route path="/pod" element={<Pod />} />
        <Route path="/submission" element={<TaskSubmission />} />
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
