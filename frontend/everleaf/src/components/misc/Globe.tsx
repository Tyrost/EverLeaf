"use client";


import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { fetchFarmHealth } from "@/control/fetch/charts";

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const kSPINVELOCITY: number = 4;
    const [markers, setMarkers] = useState<any[]>([]);

    let size = 1000;

    // the colors for markers on the home should be
    // lime-500 yellow-500 orange-600 and maybe red-800

    const healthToRGB = (health: number): [number, number, number] => {
        const t = Math.max(0, Math.min(health / 100, 1)); 

        // Linear blend: red → yellow → green
        let r = 1;
        let g = 0;
        let b = 0;

        if (t < 0.5) {
            // red → yellow
            g = t * 2;
        } else {
            // yellow → green
            g = 1;
            r = 1 - (t - 0.5) * 2;
        }

        return [r, g, 0];
    };



useEffect(() => {
    async function load() {
        try {
            let farmsNested = await fetchFarmHealth();

            // FIX: your API sends nested arrays
            let farms = Array.isArray(farmsNested[0])
                ? farmsNested[0]
                : farmsNested;

            const latitudes = farms.map(f => f.latitude);
            const longitudes = farms.map(f => f.longitude);
            const health = farms.map(f => f.health_index);

            console.log("LATITUDES:", latitudes);
            console.log("LONGITUDES:", longitudes);
            console.log("HEALTH INDEXES:", health);

        } catch (err) {
            console.error("Error loading farm health:", err);
        }
    }

    load();
}, []);


    useEffect(() => {
        async function load() {
            try {
                // ✨ CALL THE FUNCTION
                const farms = await fetchFarmHealth();

                // ✨ EXTRACT VALUES
                const latitudes = farms.map((f) => f.latitude);
                const longitudes = farms.map((f) => f.longitude);
                const health = farms.map((f) => f.health_index);

                // ✨ VERIFY OUTPUT
                console.log("LATITUDES:", latitudes);
                console.log("LONGITUDES:", longitudes);
                console.log("HEALTH INDEXES:", health);

            } catch (err) {
                console.error("Error loading farm health:", err);
            }
        }

        load();
    }, []);

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
            markers: markers,
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
