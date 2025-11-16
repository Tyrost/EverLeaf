"use client";

import { VeryImportantText } from "../slides/StatsSlide";
import { MinorText } from "../slides/StatsSlide";

import { motion } from "framer-motion";

export default function CountryEmojisStat() {
    const emojis = ["🇺🇸", "🇰🇪", "🇹🇿", "🇺🇬", "🇮🇳"];
    const emojiPositions = [
        { x: 60, y: -40 }, // top right
        { x: -60, y: -30 }, // top left
        { x: 70, y: 30 }, // right
        { x: -70, y: 40 }, // left
        { x: 0, y: -90 }, // bottom
    ];

    return (
        <motion.div
            className="flex flex-col w-full h-full items-center justify-center relative"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* Emojis behind the number */}
            {emojis.map((emoji, i) => (
                <motion.div
                    key={i}
                    className="absolute text-3xl pointer-events-none"
                    variants={{
                        rest: {
                            x: 0,
                            y: 0,
                            opacity: 0,
                            scale: 0.5,
                        },
                        hover: {
                            x: emojiPositions[i].x,
                            y: emojiPositions[i].y,
                            opacity: 1,
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 15,
                                delay: i * 0.05,
                            },
                        },
                    }}
                >
                {emoji}
                </motion.div>
            ))}

            <div className="flex flex-col items-center justify-center z-10">
                <VeryImportantText>5</VeryImportantText>
                <MinorText>unique countries</MinorText>
            </div>
        </motion.div>
    );
}
