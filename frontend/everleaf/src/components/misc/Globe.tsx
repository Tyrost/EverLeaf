"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const kSPINVELOCITY: number = 4;

    let size = 1000;

    // the colors for markers on the home should be
    // lime-500 yellow-500 orange-600 and maybe red-800

    useEffect(() => {
        if (!canvasRef.current) return;

        let phi: number = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            // imma be honest this size doesnt seem to matter...
            // its the size declared in the className via tailwind
            width: size * 2,
            height: size * 2,
            phi: 0,
            theta: 0.50,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.0005 * kSPINVELOCITY;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                <canvas
                    ref={canvasRef}
                    style={{ width: `${size}px`, height: `${size}px` }}
                />
            </motion.div>
        </>
    );
}
