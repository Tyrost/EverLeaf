"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { fetchFarmHealth } from "@/control/fetch/charts";

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [markers, setMarkers] = useState<any[]>([]);
    const kSPINVELOCITY = 8;

    const size = 1000;

    // Convert health to green → yellow → red
    const healthToRGB = (health: number, maxHealth: number): [number, number, number] => {
        const t = Math.max(0, Math.min((health / maxHealth) * 2, 1));

        let r = 1;
        let g = 0;

        if (t < 0.5) {
            g = t * 2;                 // red → yellow
        } else {
            g = 1;
            r = 1 - (t - 0.5) * 2;     // yellow → green
        }

        return [r, g, 0];
    };

    // -------------------------------------------------------
    // FETCH DATA → BUILD MARKERS WITH HEALTH COLOR
    // -------------------------------------------------------
    useEffect(() => {
        async function load() {
            try {
                const farmsNested = await fetchFarmHealth();

                // API returns nested array: [ [farm1, farm2, ...] ]
                const farms = Array.isArray(farmsNested[0])
                    ? farmsNested[0]
                    : farmsNested;

                // compute max
                const maxHealth = Math.max(...farms.map(f => f.health_index));

                const mk = farms.map((farm: any) => ({
                    location: [farm.latitude, farm.longitude],
                    size: 0.025,
                    color: healthToRGB(farm.health_index, maxHealth), // health-based color
                }));

                setMarkers(mk);

            } catch (err) {
                console.error("Error loading farm health:", err);
            }
        }

        load();
    }, []);

    // -------------------------------------------------------
    // INITIALIZE GLOBE WHEN MARKERS ARE READY
    // -------------------------------------------------------
    useEffect(() => {
        if (!canvasRef.current || markers.length === 0) return;

        let phi = 0;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: size * 2,
            height: size * 2,
            phi: 0,
            theta: 0.5,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [1, 1, 1], // required fallback, per-marker color overrides it
            glowColor: [1, 1, 1],

            markers,

            onRender: (state) => {
                state.phi = phi;
                phi += 0.0005 * kSPINVELOCITY;
            },
        });

        return () => globe.destroy();
    }, [markers]);

    // -------------------------------------------------------
    // RENDER
    // -------------------------------------------------------
    return (
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
    );
}
