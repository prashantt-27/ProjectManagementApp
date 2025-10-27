import { useState, type JSX, lazy } from "react";
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
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import AuthSlider from "./authentication/AuthSlider";

const Hero = lazy(() => import("./components/Hero"));
const ProjectPage = lazy(() => import("./components/ProjectPage"));
const About = lazy(() => import("./components/About"));
const CompleteLandingPage = lazy(
  () => import("./components/CompleteLandingPage")
);

// Landing Page Component
const LandingPage = () => (
  <div className="scroll-smooth">
    <Hero />
    <About />
    <CompleteLandingPage />
    <Footer />
  </div>
);

// Private Route Component
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return currentUser ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500">
          <Toaster position="top-center" reverseOrder={false} />
          <Router>
            <Navbar />

            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<AuthSlider />} />
              <Route path="/price" element={<CompleteLandingPage />} />
              <Route
                path="/project"
                element={
                  <PrivateRoute>
                    <ProjectPage />
                  </PrivateRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/contact"
                element={
                  <PrivateRoute>
                    <CompleteLandingPage />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
