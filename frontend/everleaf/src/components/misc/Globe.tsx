"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const kSPINVELOCITY: number = 4;

    useEffect(() => {
        if (!canvasRef.current) return;

        let phi: number = 0;
        let width: number = 1200;
        let height: number = 1200;

        canvasRef.current.width = width;
        canvasRef.current.height = height;  
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width,
            height: height,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.001 * kSPINVELOCITY;
            },
        });

        return () => globe.destroy();
    }, []);

    return (
        <>
            <div className="w-screen h-screen">
                <canvas ref={canvasRef} className="w-full h-full" />
            </div>
        </>
    );
}
