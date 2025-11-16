'use client';

import { CgMediaLive } from "react-icons/cg";
import { motion } from "motion/react";

export default function LivePopInIcon() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            <CgMediaLive className="text-7xl text-red-700" />
        </motion.div>
    );
}
