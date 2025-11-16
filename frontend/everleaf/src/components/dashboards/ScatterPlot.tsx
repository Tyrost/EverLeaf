"use client";

import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { CHART_COLORS } from "./CommonChartData";
import { DataTypeEnum } from "./CommonChartData";
import { ScatterPlotFetch, ScatterPlotTuple } from "@/control/types/Chart";
import { fetchScatter } from "@/control/fetch/charts";


export default function ScatterPlot() {
    // data
    const [scatterData, setScatterData] = useState<[number, number][] | []>([]);
    

    // states 
    const [loading, setLoading] = useState<boolean>(true);
    const [mounted, setMounted] = useState<boolean>(false);

    const [fieldX, setFieldX] = useState<DataTypeEnum>(DataTypeEnum.RainfallMM);
    const [fieldY, setFieldY] = useState<DataTypeEnum>(DataTypeEnum.HumidityPercent);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        async function load() {
            setLoading(true);
            try {
                const result: ScatterPlotFetch = await fetchScatter({
                    field_x: fieldX.valueOf(),
                    field_y: fieldY.valueOf(),
                });
                console.log(result);
                if (result && result.x && result.y) {
                    const data = result;
                    const pairs: [number, number][] = data.x.map((
                        xValue,
                        index,
                    ) => [
                        xValue,
                        data.y[index],
                    ]);
                    setScatterData(pairs);
                } else {
                    console.log("Invalid data structure:", result);
                    setScatterData([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setScatterData([]);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [fieldX, fieldY, mounted]);

    // Don't render until mounted on client
    if (!mounted) {
        return (
            <div className="p-6 min-h-screen font-sans">
                <div className="bg-secondary rounded-xl p-6 shadow-2xl max-w-7xl mx-auto border">
                    <h2 className="text-2xl font-bold text-primary-text mb-5 mt-0">
                        Agricultural Data Analysis
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

    // Calculate stats from transformed data
    const xValues = scatterData.map((d) => d[0]);
    const yValues = scatterData.map((d) => d[1]);
    const xMin = xValues.length > 0 ? Math.min(...xValues) : 0;
    const xMax = xValues.length > 0 ? Math.max(...xValues) : 0;
    const yMin = yValues.length > 0 ? Math.min(...yValues) : 0;
    const yMax = yValues.length > 0 ? Math.max(...yValues) : 0;

    const option = {
        backgroundColor: "transparent",
        title: {
            text: `${fieldY.valueOf()} vs ${fieldX.valueOf()}`,
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
                return `${fieldX.valueOf()}: ${
                    params.value[0].toFixed(2)
                }<br/>${fieldY.valueOf()}: ${params.value[1].toFixed(2)}`;
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
            name: fieldX,
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
            name: fieldY,
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
                name: "Points",
                type: "scatter",
                data: scatterData,
                symbolSize: 8,
                itemStyle: {
                    color: "#12c40c",
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
            <div className="bg-secondary rounded-xl p-6 shadow-2xl w-full mx-auto border border-border">
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
                            value={fieldX}
                            onChange={(e) =>
                                setFieldX(e.target.value as DataTypeEnum)}
                            className="w-full px-3 py-2.5 rounded-lg border border-border text-sm text-primary-text cursor-pointer bg-tertiary"
                            disabled={loading}
                        >
                            {Object.values(DataTypeEnum).map((field) => (
                                <option
                                    key={field}
                                    value={field}
                                    disabled={field === fieldY}
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
                            value={fieldY}
                            onChange={(e) =>
                                setFieldY(e.target.value as DataTypeEnum)}
                            className="w-full px-3 py-2.5 rounded-lg border border-border text-sm text-primary-text cursor-pointer bg-tertiary"
                            disabled={loading}
                        >
                            {Object.values(DataTypeEnum).map((field) => (
                                <option
                                    key={field}
                                    value={field}
                                    disabled={field === fieldX}
                                >
                                    {field}
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
                    : scatterData.length > 0
                    ? (
                        <ReactECharts
                            option={option}
                            style={{ height: "500px", width: "100%" }}
                            opts={{ renderer: "canvas" }}
                        />
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

                {/* Stats */}
                {!loading && scatterData.length > 0 && (
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-6 pt-6 border-t border-border">
                        <div className="text-center">
                            <div className="text-xs text-secondary-text mb-1">
                                X Range
                            </div>
                            <div className="text-xl font-bold text-primary-text">
                                {xMin.toFixed(1)} - {xMax.toFixed(1)}
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-xs text-secondary-text mb-1">
                                Y Range
                            </div>
                            <div className="text-xl font-bold text-primary-text">
                                {yMin.toFixed(1)} - {yMax.toFixed(1)}
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-xs text-secondary-text mb-1">
                                Data Points
                            </div>
                            <div className="text-xl font-bold text-primary-text">
                                {scatterData.length}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
