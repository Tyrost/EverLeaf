"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NameIntroduction() {
    const [showPrefix, setShowPrefix] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setShowPrefix(false), 2000);
        return () => clearTimeout(t);
    }, []);

    return (
        <h1 className="text-[8vw]/35 text-nowrap text-neutral-300">
            <motion.div
                layout
                className="inline-flex items-center"
            >
                <AnimatePresence mode="popLayout">
                    {showPrefix && (
                        <motion.span
                            key="prefix"
                            layout
                            initial={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="inline-block"
                        >
                            This is&nbsp;
                        </motion.span>
                    )}
                </AnimatePresence>

                <motion.span
                    layout
                    transition={{ layout: { delay: 1, duration: 0.6, ease: "easeInOut" } }}
                    className="text-brand font-bold inline-block font-outfit"
                >
                    EverLeaf
                </motion.span>
            </motion.div>
        </h1>
    );
}
