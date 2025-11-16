'use client'

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const points = [
  "Receive continuous updates on crop health derived from satellite vegetation indices, moisture trends.",
  "Detect early signs of drought stress, nutrient deficiency, pest risk, and temperature anomalies before they escalate.",
  "Track the historical performance of each field using multi-season satellite records, and uncover patterns that help you anticipate yield changes"
];

export default function AnimatedPoints() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-y-6 p-8 cursor-default">
      {points.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            delay: i * 0.15,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group"
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 rounded-8xl bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 blur-xl"
            animate={{
              scale: hoveredIndex === i ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Card container */}
          <motion.div
            className="relative flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
            whileHover={{ 
              scale: 1.02,
              borderColor: "rgba(52, 211, 153, 0.3)",
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated icon */}
            <div className="relative flex-shrink-0 mt-1">
              <motion.div
                className="h-[2.5vw] w-[2.5vw] rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center"
                animate={{
                  boxShadow: hoveredIndex === i 
                    ? "0 0 30px rgba(52, 211, 153, 0.6)" 
                    : "0 0 15px rgba(52, 211, 153, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-3 w-3 rounded-full bg-white"
                  animate={{
                    scale: hoveredIndex === i ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: hoveredIndex === i ? Infinity : 0,
                    repeatDelay: 0.2
                  }}
                />
              </motion.div>
              
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-emerald-400"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{
                  scale: hoveredIndex === i ? [1, 1.4, 1.4] : 1,
                  opacity: hoveredIndex === i ? [0.5, 0, 0] : 0.5,
                }}
                transition={{
                  duration: 1.5,
                  repeat: hoveredIndex === i ? Infinity : 0,
                  ease: "easeOut"
                }}
              />
            </div>

            {/* Text content */}
            <div className="flex-1">
              <motion.p 
                className="text-[1vw] leading-relaxed text-white/90 font-outfit"
                animate={{
                  color: hoveredIndex === i ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)",
                }}
              >
                {p}
              </motion.p>
            </div>

            {/* Corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
              initial={{ scale: 0, rotate: -45 }}
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Number indicator */}
          <motion.div
            className="absolute -left-2 top-6 text-emerald-400/20 text-6xl font-bold font-outfit"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === i ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {i + 1}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}