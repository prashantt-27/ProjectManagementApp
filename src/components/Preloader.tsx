import { useEffect } from "react";

import { motion } from "framer-motion";

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#222",
      }}
    >
      <motion.div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "oklch(62.7% 0.265 303.9)",
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.5, 1], // pulsing effect
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default Preloader;
