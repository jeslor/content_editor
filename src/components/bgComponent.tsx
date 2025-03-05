import React from "react";
import { motion } from "framer-motion";

const WavyLines = () => {
  const numLines = 5;
  const lineWidth = "2px";
  const colors = ["#ff5733", "#33ff57", "#3357ff", "#f4c542", "#ff33a8"];

  return (
    <div className="wavy-lines">
      {Array.from({ length: numLines }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -10 }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2 + i * 0.2,
            ease: "easeInOut",
          }}
          className="absolute w-full"
          style={{
            height: lineWidth,
            background: colors[i % colors.length],
            top: `${20 * i + 10}px`,
          }}
        />
      ))}
    </div>
  );
};

export default WavyLines;
