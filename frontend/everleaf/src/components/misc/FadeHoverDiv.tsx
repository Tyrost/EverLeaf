'use client';

import { motion } from "framer-motion"

interface FadeHoverDivProps extends React.PropsWithChildren {
  className?: string;
  initial?: number;
  whileHover?: number;
};

const FadeHoverDiv: React.FC<FadeHoverDivProps> = ({
    children, 
    className = '',
    initial = 0,
    whileHover = 1
}) => {
    return (
        <>
        <motion.div
        className={`${className}`}
        initial={{opacity: initial}}
        whileHover={{opacity: whileHover}}
        >
            {children}
        </motion.div>
        </>
    );
};

export default FadeHoverDiv;