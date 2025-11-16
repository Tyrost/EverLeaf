"use client";

import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { CHART_COLORS } from "./CommonChartData";

export interface LinePlotPoint {
    x: number[];
    y: number[];
    value: number;
}

interface LinePlotProps {
    data: LinePlotPoint[];
    fields: string[];
}

export default function LinePlot({ data, fields }: LinePlotProps) {
    const allX: number[] = data[0].x;
    const allY: number[] = data[0].y;

    const [xType, setXType] = useState(fields[0]);
    const [yType, setYType] = useState(fields[1] ?? fields[0]);

    const option = {
        backgroundColor: "transparent",
        title: {
            text: `${yType} vs ${xType} (Regression Line)`,
            left: "center",
            top: 10,
            textStyle: {
                color: CHART_COLORS.titleText,
                fontSize: 18,
                fontWeight: 600,
            },
        },
        tooltip: {
            trigger: "axis",
            axisPointer: { type: "line" },
            backgroundColor: CHART_COLORS.tooltipBackground,
            borderColor: CHART_COLORS.tooltipBorder,
            borderWidth: 1,
            textStyle: { color: CHART_COLORS.tooltipText },
        },
        grid: {
            left: "12%",
            right: "5%",
            bottom: "15%",
            top: "15%",
            containLabel: true,
        },
        xAxis: {
            type: "value",
            name: xType,
            nameLocation: "middle",
            nameGap: 30,
            nameTextStyle: {
                color: CHART_COLORS.subtleText,
                fontSize: 13,
                fontWeight: 600,
            },
            axisLabel: { color: CHART_COLORS.axisText, fontSize: 11 },
            axisLine: { lineStyle: { color: CHART_COLORS.axisLine } },
            splitLine: {
                lineStyle: { color: CHART_COLORS.gridLine, type: "dashed" },
            },
        },
        yAxis: {
            type: "value",
            name: yType,
            nameLocation: "middle",
            nameGap: 50,
            nameTextStyle: {
                color: CHART_COLORS.subtleText,
                fontSize: 13,
                fontWeight: 600,
            },
            axisLabel: { color: CHART_COLORS.axisText, fontSize: 11 },
            axisLine: { lineStyle: { color: CHART_COLORS.axisLine } },
            splitLine: {
                lineStyle: { color: CHART_COLORS.gridLine, type: "dashed" },
            },
        },
        series: [
            {
                name: "Raw Points",
                type: "scatter",
                data: allX.map((x, i) => [x, allY[i]]),
                symbolSize: 8,
                itemStyle: {
                    color: {
                        type: "radial",
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [
                            { offset: 0, color: CHART_COLORS.scatterDotStart },
                            { offset: 1, color: CHART_COLORS.scatterDotEnd },
                        ],
                    },
                    opacity: 0.7,
                    shadowBlur: 8,
                    shadowColor: CHART_COLORS.scatterDotShadow,
                },
                emphasis: {
                    itemStyle: {
                        color: CHART_COLORS.scatterDotHover,
                        opacity: 1,
                        shadowBlur: 15,
                        shadowColor: CHART_COLORS.scatterDotShadowHover,
                    },
                    scale: 1.5,
                },
            },
            {
                name: "Regression Line",
                type: "line",
                // data: allX.map((x, i) => [x, regressionY[i]]),
                lineStyle: {
                    color: CHART_COLORS.titleText,
                    width: 3,
                },
                symbol: "none",
            },
        ],
    };

    return (
        <div className="p-6 min-h-screen font-sans">
            <div className="bg-secondary rounded-xl p-6 shadow-2xl max-w-7xl mx-auto border border-border">
                <h2 className="text-2xl font-bold text-primary-text mb-5 mt-0">
                    Regression Line Plot
                </h2>

                {/* Selectors */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold text-secondary-text mb-2">
                            X-Axis
                        </label>
                        <select
                            value={xType}
                            onChange={(e) => setXType(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-lg border border-border bg-tertiary text-primary-text"
                        >
                            {fields.map((f) => (
                                <option
                                    key={f}
                                    value={f}
                                    disabled={f === yType}
                                >
                                    {f}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-secondary-text mb-2">
                            Y-Axis
                        </label>
                        <select
                            value={yType}
                            onChange={(e) => setYType(e.target.value)}
                            className="w-full px-3 py-2.5 rounded-lg border border-border bg-tertiary text-primary-text"
                        >
                            {fields.map((f) => (
                                <option
                                    key={f}
                                    value={f}
                                    disabled={f === xType}
                                >
                                    {f}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <ReactECharts
                    option={option}
                    style={{ height: "500px", width: "100%" }}
                    opts={{ renderer: "canvas" }}
                />

                {/* Stats */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-6 pt-6 border-t border-border">
                    <div className="text-center">
                        <div className="text-xs text-secondary-text mb-1">
                            Points
                        </div>
                        <div className="text-xl font-bold text-primary-text">
                            {allX.length}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
