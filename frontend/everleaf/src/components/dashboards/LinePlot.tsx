"use client";

import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { CHART_COLORS } from "./CommonChartData";
import { fetchRegression } from "@/control/fetch/charts";
import { RegressionPlotTuple } from "@/control/types/Chart";

interface LinePlotProps {
    fields: string[];
}

export default function LinePlot({ fields }: LinePlotProps) {
    // data
    const [lineData, setLineData] = useState<RegressionPlotTuple | null>(null);

    // states
    const [loading, setLoading] = useState<boolean>(true);
    const [mounted, setMounted] = useState<boolean>(false);

    const [xType, setXType] = useState(fields[0]);
    const [yType, setYType] = useState(fields[1] ?? fields[0]);
    const [xValue, setXValue] = useState<number>(0);

    const [initializedX, setInitializedX] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Initialize xValue to mean of allX only once (when data loads)
    // set mean only when xType OR yType changes, not every regression update
    useEffect(() => {
        if (lineData && !initializedX) {
            const meanX = Math.round(
                lineData[0].reduce((a, b) => a + b, 0) / lineData[0].length,
            );
            setXValue(meanX);
            setInitializedX(true);
        }
    }, [lineData, initializedX]);

    // FETCH REGRESSION
    useEffect(() => {
        if (!mounted) return;

        async function load() {
            setLoading(true);
            try {
                const result = await fetchRegression({
                    feature_x: xType,
                    feature_y: yType,
                    x_value: xValue,
                });

                setLineData(result); // NOW RETURNS THE TUPLE DIRECTLY
            } catch (err) {
                console.error("Failed to load regression:", err);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [xType, yType, xValue, mounted]);

    // Don't render until mounted on client
    if (!mounted) {
        return (
            <div className="p-6 min-h-screen font-sans">
                <div className="bg-secondary rounded-xl p-6 shadow-2xl max-w-7xl mx-auto border border-border">
                    <h2 className="text-2xl font-bold text-primary-text mb-5 mt-0">
                        Regression Line Plot
                    </h2>
                    <div
                        className="flex items-center justify-center"
                        style={{ height: "500px" }}
                    >
                        <div className="text-center">
                            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4">
                            </div>
                            <p className="text-secondary-text">Loading...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // DESTRUCTURE TUPLE
    const allX = lineData?.[0] || [];
    const allY = lineData?.[1] || [];
    const prediction = lineData?.[2] || 0;

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
            name: yType,
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
                name: "Raw Points",
                type: "scatter",
                data: allX.map((x, i) => [x, allY[i]]),
                symbolSize: 8,
                itemStyle: {
                    color: "#0cc481",
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
                data: [], // add later
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
                            disabled={loading}
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
                            disabled={loading}
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

                {/* Chart or Loading State */}
                {loading
                    ? (
                        <div
                            className="flex items-center justify-center"
                            style={{ height: "500px" }}
                        >
                            <div className="text-center">
                                <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-secondary-text border-r-transparent mb-4">
                                </div>
                                <p className="text-secondary-text">
                                    Loading data...
                                </p>
                            </div>
                        </div>
                    )
                    : lineData && allX.length > 0
                    ? (
                        <>
                            <ReactECharts
                                option={option}
                                style={{ height: 500 }}
                            />
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-6 pt-6 border-t border-border">
                                <div className="text-center">
                                    <div className="text-xs text-secondary-text mb-1">
                                        Points
                                    </div>
                                    <div className="text-xl font-bold text-primary-text">
                                        {allX.length}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xs text-secondary-text mb-1">
                                        Prediction at <strong>X</strong> is Equal To or Greater Than
                                    </div>
                                    <div className="text-xl font-bold text-primary-text">
                                        {prediction.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                    : (
                        <div
                            className="flex items-center justify-center"
                            style={{ height: "500px" }}
                        >
                            <p className="text-secondary-text">
                                No data available
                            </p>
                        </div>
                    )}
            </div>
        </div>
    );
}
