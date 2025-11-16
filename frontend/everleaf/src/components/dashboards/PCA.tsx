'use client';

import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface LoadingVector {
    variable: string;
    x: number;  // loading on PC1
    y: number;  // loading on PC2
}

interface Props {
    width?: number;
    height?: number;
    vectors: LoadingVector[];
}

export default function PCAArrowPlot({ width = 500, height = 500, vectors }: Props) {
    const ref = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();

        const margin = 40;
        const innerW = width - margin * 2;
        const innerH = height - margin * 2;

        const xScale = d3.scaleLinear()
            .domain([-1, 1])
            .range([0, innerW]);

        const yScale = d3.scaleLinear()
            .domain([-1, 1])
            .range([innerH, 0]);

        const group = svg.append("g")
            .attr("transform", `translate(${margin},${margin})`);

        // Axes
        group.append("line")
            .attr("x1", xScale(-1))
            .attr("x2", xScale(1))
            .attr("y1", yScale(0))
            .attr("y2", yScale(0))
            .attr("stroke", "#555");

        group.append("line")
            .attr("x1", xScale(0))
            .attr("x2", xScale(0))
            .attr("y1", yScale(-1))
            .attr("y2", yScale(1))
            .attr("stroke", "#555");

        // Arrows
        const arrow = d3.symbol().type(d3.symbolTriangle).size(60);

        vectors.forEach(v => {
            const x = xScale(v.x);
            const y = yScale(v.y);

            // Arrow line
            group.append("line")
                .attr("x1", xScale(0))
                .attr("y1", yScale(0))
                .attr("x2", x)
                .attr("y2", y)
                .attr("stroke", "lime")
                .attr("stroke-width", 2);

            // Arrow head
            group.append("path")
                .attr("d", arrow()!)
                .attr("fill", "lime")
                .attr("transform", `translate(${x},${y}) rotate(${Math.atan2(v.y, v.x) * 180 / Math.PI})`);

            // Label
            group.append("text")
                .attr("x", x + 5)
                .attr("y", y - 5)
                .attr("fill", "white")
                .attr("font-size", "12px")
                .text(v.variable);
        });

    }, [vectors, width, height]);

    return (
        <svg
            ref={ref}
            width={width}
            height={height}
            className="border border-neutral-700 rounded-xl"
        />
    );
}
