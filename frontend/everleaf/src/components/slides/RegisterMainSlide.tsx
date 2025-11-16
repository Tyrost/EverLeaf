'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { SignUp } from "@clerk/nextjs";
import EverLeafLogo from "../utils/EverLeafLogo";

const features = [
  {
    title: "Real-time Satellite Monitoring",
    description: "Track vegetation indices, moisture levels, and crop health with daily satellite updates"
  },
  {
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms detect stress patterns before visible symptoms appear"
  },
  {
    title: "Historical Insights",
    description: "Access multi-season records to predict yields and optimize planting strategies"
  }
];

export default function RegisterPage() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex">
      {/* Left Panel - Features */}
      <div className="flex-1 p-12 flex flex-col justify-between relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-16"
          >
            <div className="-my-[60px] -mx-[20px]">
                <EverLeafLogo size={[200,200]}/>
            </div>
            
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-6xl font-bold text-emerald-400 mb-6 leading-tight">
              Start Growing<br />Smarter Today
            </h2>
            <p className="text-xl text-white/60 max-w-xl">
              Join thousands of farmers using satellite intelligence to maximize yields and reduce risk.
            </p>
          </motion.div>

          {/* Features */}
          <div className="space-y-6 max-w-[80%]">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group relative"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl opacity-0"
                  animate={{
                    opacity: hoveredFeature === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Card */}
                <motion.div
                  className="relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(52, 211, 153, 0.2)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      className="text-4xl"
                      animate={{
                        scale: hoveredFeature === i ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: hoveredFeature === i ? Infinity : 0,
                      }}
                    >

                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Sign Up Form Container */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[40%] relative"
      >
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-bl from-slate-900/50 to-transparent" />
        
        {/* Form Container - Your SignUp Component Goes Here */}
        <div className="relative h-full flex items-center justify-center p-12 backdrop-blur-lg bg-white/10 border-l border-white/80"> 
            <SignUp signInUrl="/auth/login" afterSignUpUrl={"/dashboard"} routing="hash"/>
        </div>
      </motion.div>
    </div>
  );
}