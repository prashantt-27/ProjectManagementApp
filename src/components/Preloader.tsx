import { useEffect, useState } from "react";
import { AnimatedCircularProgressBar } from "../animation/AnimatedCircularProgressBar";

interface PreloaderProps {
  onFinish: () => void;
}

const Preloader = ({ onFinish }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            onFinish();
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-9999 transition-colors duration-500">
      <AnimatedCircularProgressBar
        value={progress}
        gaugePrimaryColor="#3b82f6" // blue-500
        gaugeSecondaryColor="#e5e7eb" // gray-200
      />
    </div>
  );
};

export default Preloader;
