import React, { type ElementType, type JSX } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Hero from "./components/Hero";
import LoginForm from "./authentication/LoginForm";
import SignIn from "./authentication/SignIn";
import ProjectPage from "./components/ProjectPage";
import About from "./components/About";
import CompleteLandingPage from "./components/CompleteLandingPage";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <CompleteLandingPage />
    </div>
  );
};

// Private Route Component
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return currentUser ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <Navbar />

        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/price" element={<CompleteLandingPage />}></Route>
          <Route
            path="/project"
            element={
              <PrivateRoute>
                <ProjectPage />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          {/* Contact page protected */}
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <CompleteLandingPage />
              </PrivateRoute>
            }
          />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
