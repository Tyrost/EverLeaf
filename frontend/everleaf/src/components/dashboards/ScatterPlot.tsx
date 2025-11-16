'use client';

import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { CHART_COLORS } from "./CommonChartData";


interface DataPoint {
    "soilmoisture%": number;
    "soil_pH": number;
    "temperature_C": number;
    "rainfallmm": number;
    "humidity%": number;
    "sunlight_hours": number;
    "pesticide_usage_ml": number;
    "total_days": number;
    "yield_kg_per_hectare": number;
    "latitude": number;
    "longitude": number;
    "NDVI_index": number;
}

interface ScatterPlotProps {
    data: DataPoint[];
    fields: string[];
}

export default function ScatterPlot({ data, fields }: ScatterPlotProps) {
    const chartData = data;
    const [xAxis, setXAxis] = useState<keyof DataPoint>("temperature_C");
    const [yAxis, setYAxis] = useState<keyof DataPoint>("yield_kg_per_hectare");

    // Prepare scatter data
    const scatterData = chartData.map((point) => [
        point[xAxis],
        point[yAxis],
    ]);

    const option = {
        backgroundColor: "transparent",
        title: {
            text: `${yAxis} vs ${xAxis}`,
            left: "center",
            top: 10,
            textStyle: {
                color: CHART_COLORS.titleText,
                fontSize: 18,
                fontWeight: 600,
            },
        },
        tooltip: {
            trigger: "item",
            backgroundColor: CHART_COLORS.tooltipBackground,
            borderColor: CHART_COLORS.tooltipBorder,
            borderWidth: 1,
            textStyle: { color: CHART_COLORS.tooltipText },
            formatter: (params: any) => {
                return `${xAxis}: ${params.value[0].toFixed(2)}<br/>${yAxis}: ${
                    params.value[1].toFixed(2)
                }`;
            },
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
            name: xAxis,
            nameLocation: "middle",
            nameGap: 30,
            nameTextStyle: {
                color: CHART_COLORS.subtleText,
                fontSize: 13,
                fontWeight: 600,
            },
            axisLabel: {
                color: CHART_COLORS.axisText,
                fontSize: 11,
            },
            axisLine: {
                lineStyle: {
                    color: CHART_COLORS.axisLine,
                },
            },
            splitLine: {
                lineStyle: {
                    color: CHART_COLORS.gridLine,
                    type: "dashed",
                },
            },
        },
        yAxis: {
            type: "value",
            name: yAxis,
            nameLocation: "middle",
            nameGap: 50,
            nameTextStyle: {
                color: CHART_COLORS.subtleText,
                fontSize: 13,
                fontWeight: 600,
            },
            axisLabel: {
                color: CHART_COLORS.axisText,
                fontSize: 11,
            },
            axisLine: {
                lineStyle: {
                    color: CHART_COLORS.axisLine,
                },
            },
            splitLine: {
                lineStyle: {
                    color: CHART_COLORS.gridLine,
                    type: "dashed",
                },
            },
        },
        series: [
            {
                type: "scatter",
                data: scatterData,
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
        ],
    };

    return (
        <div className="p-6 min-h-screen font-sans">
            <div className="bg-secondary rounded-xl p-6 shadow-2xl max-w-screen-xl mx-auto border border-border">
                <h2 className="text-2xl font-bold text-primary-text mb-5 mt-0">
                    Agricultural Data Analysis
                </h2>

                {/* Axis Selectors */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-semibold text-secondary-text mb-2">
                            X-Axis
                        </label>
                        <select
                            value={xAxis}
                            onChange={(e) =>
                                setXAxis(e.target.value as keyof DataPoint)}
                            className="w-full px-3 py-2.5 rounded-lg border border-border text-sm text-primary-text cursor-pointer bg-tertiary"
                        >
                            {fields.map((field) => (
                                <option
                                    key={field}
                                    value={field}
                                    disabled={field === yAxis}
                                >
                                    {field}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-secondary-text mb-2">
                            Y-Axis
                        </label>
                        <select
                            value={yAxis}
                            onChange={(e) =>
                                setYAxis(e.target.value as keyof DataPoint)}
                            className="w-full px-3 py-2.5 rounded-lg border border-border text-sm text-primary-text cursor-pointer bg-tertiary"
                        >
                            {fields.map((field) => (
                                <option
                                    key={field}
                                    value={field}
                                    disabled={field === xAxis}
                                >
                                    {field}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Chart */}
                <ReactECharts
                    option={option}
                    style={{ height: "500px", width: "100%" }}
                    opts={{ renderer: "canvas" }}
                />

                {/* Stats */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-6 pt-6 border-t border-border">
                    <div className="text-center">
                        <div className="text-xs text-secondary-text mb-1">
                            Data Points
                        </div>
                        <div className="text-xl font-bold text-primary-text">
                            {chartData.length}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-secondary-text mb-1">
                            X Range
                        </div>
                        <div className="text-xl font-bold text-primary-text">
                            {Math.min(...scatterData.map((d) => d[0])).toFixed(
                                1,
                            )} -{" "}
                            {Math.max(...scatterData.map((d) => d[0])).toFixed(
                                1,
                            )}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-secondary-text mb-1">
                            Y Range
                        </div>
                        <div className="text-xl font-bold text-primary-text">
                            {Math.min(...scatterData.map((d) => d[1])).toFixed(
                                1,
                            )} -{" "}
                            {Math.max(...scatterData.map((d) => d[1])).toFixed(
                                1,
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
