import { useState, type JSX } from "react";

import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { lazy } from "react";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";

const Hero = lazy(() => import("./components/Hero"));
const LoginForm = lazy(() => import("./authentication/LoginForm"));
const SignIn = lazy(() => import("./authentication/SignIn"));
const ProjectPage = lazy(() => import("./components/ProjectPage"));
const About = lazy(() => import("./components/About"));
const CompleteLandingPage = lazy(
  () => import("./components/CompleteLandingPage")
);

// Landing Page Component
const LandingPage = () => {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <CompleteLandingPage />
      <Footer />
    </div>
  );
};

// Private Route Component
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return currentUser ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
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
      )}
    </>
  );
};

export default App;
