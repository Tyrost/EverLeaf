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
                viewport={{ once: false, amount: 0.7 }}
            >
                <div className="flex flex-col h-screen p-48 items-center justify-center gap-7">
                    <h1 className="text-8xl">Our Mission</h1>
                    <h5 className="text-center max-w-3xl">
                        Our mission is to empower farmers and agricultural
                        stakeholders with actionable insights by transforming
                        satellite data into clear, organized, and real-time
                        information about crop health, yield, and farm status,
                        all enabling smarter decisions, sustainable practices,
                        and optimized productivity.
                    </h5>
                </div>
            </motion.div>
        </>
    );
}
