"use client";

import { ImportantText } from "../slides/StatsSlide";
import LivePopInIcon from "./LivePopInIcon";
import { motion } from "framer-motion";

export default function PingLiveCard() {
    return (
        <>
            <div className="flex w-full gap-2.5 flex-row items-center justify-baseline relative">
                <ImportantText>Live</ImportantText>
                <motion.div
                    className="relative"
                    initial="rest"
                    whileHover="hover"
                >
                    <LivePopInIcon />
                    <div className="absolute inset-0 pointer-events-none">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-red-700"
                                variants={{
                                    rest: {
                                        width: 0,
                                        height: 0,
                                        opacity: 0,
                                    },
                                    hover: {
                                        width: ["0px", "300px"],
                                        height: ["0px", "300px"],
                                        opacity: [0.7, 0],
                                        transition: {
                                            duration: 1.2,
                                            ease: "easeOut",
                                            delay: i * 0.2,
                                        },
                                    },
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
            <ImportantText>
                Snapshorts Anywhere in the World
            </ImportantText>
        </>
    );
}
