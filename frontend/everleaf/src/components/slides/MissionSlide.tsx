"use client";
import { motion } from "framer-motion";
import DarkVeil from "../misc/DarkViel";

export default function MissionSlide() {
    return (
        <div className="relative mt-12 h-screen">
            <div className="absolute inset-0 z-0">
                <DarkVeil hueShift={60} />
            </div>
            <div className="absolute top-0 left-0 right-0 h-48 bg-linear-to-b from-background to-transparent z-[5] pointer-events-none" />

            <motion.div
                className="relative z-10 flex justify-center items-center -translate-y-8 flex-col w-full h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="relative flex flex-col items-center justify-center gap-7">
                    <h1 className="
                        text-[5vw] 
                        font-outfit font-bold 
                        bg-linear-to-r from-green-400 to-brand 
                        bg-clip-text text-transparent
                        drop-shadow-[0_4px_20px_rgba(0,255,140,0.25)]
                        text-center
                        animate-fade-up
                    ">
                        Our Mission
                    </h1>
                    
                    <h5 className="
                        text-center 
                        max-w-3xl 
                        text-lg 
                        text-neutral-300
                        leading-relaxed 
                        animate-fade-up 
                        animation-delay-100
                    ">
                        Our mission is to empower farmers and agricultural
                        stakeholders with actionable insights by transforming
                        satellite data into clear, organized, and real-time
                        information about crop health, yield, and farm status,
                        all enabling smarter decisions, sustainable practices,
                        and optimized productivity.
                    </h5>
                </div>
            </motion.div>
        </div>
    );
}