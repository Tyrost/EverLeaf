"use client";
import { motion } from "framer-motion";

export default function MissionSlide() {
    return (
        <>
            <motion.div
                className="flex flex-col w-full h-screen"
                initial={{opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
            >
<div className="
    relative 
    flex flex-col items-center justify-center gap-7

">


    {/* Title */}
    <h1 className="
        text-[5vw] 
        font-outfit font-bold 
        bg-gradient-to-r from-green-400 to-teal-300 
        bg-clip-text text-transparent
        drop-shadow-[0_4px_20px_rgba(0,255,140,0.25)]
        text-center
        animate-fade-up
    ">
        Our Mission
    </h1>

    {/* Subtitle */}
    <h5 className="
        text-center 
        max-w-3xl 
        text-lg 
        text-neutral-200 
        leading-relaxed 
        animate-fade-up 
        animation-delay-100
    ">
        Our mission is to empower farmers and agricultural
        stakeholders with actionable insights by transforming
        satellite data into clear, organized, and real-time
        information about crop health, yield, and farm status—
        all enabling smarter decisions, sustainable practices,
        and optimized productivity.
    </h5>
</div>

            </motion.div>
        </>
    );
}
