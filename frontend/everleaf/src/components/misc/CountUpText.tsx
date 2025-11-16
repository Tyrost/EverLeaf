"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { animate } from "motion";

interface CountUpTextProps {
    className?: string;
    number: number;
}

const CountUpText: React.FC<CountUpTextProps> = ({
    className = "",
    number,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(
        count,
        (latest) => Math.round(latest).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            const animation = animate(count, number, {
                duration: 2,
                ease: "circOut",
            });
            return animation.stop;
        }
    }, [isInView]);

    return (
        <motion.span className={`${className}`} ref={ref}>{rounded}</motion.span>
    );
};

export default CountUpText;
