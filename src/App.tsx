import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import LoginForm from "./authentication/LoginForm";
import SignIn from "./authentication/SignIn";
import ProjectPage from "./components/ProjectPage";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/sign" element={<SignIn />}></Route>
          <Route path="/project" element={<ProjectPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
