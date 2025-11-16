"use client";

import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { CHART_COLORS } from "./CommonChartData";
import { fetchRegression } from "@/control/fetch/charts";
import { RegressionPlotTuple } from "@/control/types/Chart";

interface LinePlotProps {
    fields: string[];
}

export default function LinePlot({ fields }: LinePlotProps) {
    const [data, setData] = useState<RegressionPlotTuple | null>(null);
    const [loading, setLoading] = useState(true);

    const [xType, setXType] = useState(fields[0]);
    const [yType, setYType] = useState(fields[1] ?? fields[0]);
    const [xValue, setXValue] = useState<number>(0);
    const [initializedX, setInitializedX] = useState(false);


    // Initialize xValue to mean of allX only once (when data loads)
    // set mean only when xType OR yType changes, not every regression update
    useEffect(() => {
        if (data && !initializedX) {
            const meanX = Math.round(data[0].reduce((a, b) => a + b, 0) / data[0].length); 
            setXValue(meanX);
            setInitializedX(true);
        }
    }, [data, initializedX]);



    // FETCH REGRESSION
    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const result = await fetchRegression({
                    feature_x: xType,
                    feature_y: yType,
                    x_value: xValue
                });

                setData(result); // NOW RETURNS THE TUPLE DIRECTLY
            } catch (err) {
                console.error("Failed to load regression:", err);
            }
            setLoading(false);
        }

        load();
    }, [xType, yType, xValue]);

    if (loading || !data) {
        return <div className="text-center text-primary-text">Loading regression...</div>;
    }

    // DESTRUCTURE TUPLE
    const [allX, allY, prediction] = data;

    console.log("X:", allX);
    console.log("Y:", allY);
    console.log("Prediction at x=50:", prediction);

    const option = {
        backgroundColor: "transparent",
        title: {
            text: `${yType} vs ${xType} (Regression Line)`,
            left: "center",
            top: 10,
            textStyle: {
                color: CHART_COLORS.titleText,
                fontSize: 18,
                fontWeight: 600
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: { type: "line" },
            backgroundColor: CHART_COLORS.tooltipBackground,
            borderColor: CHART_COLORS.tooltipBorder,
            borderWidth: 1,
            textStyle: { color: CHART_COLORS.tooltipText }
        },
        xAxis: {
            type: "value",
            name: xType
        },
        yAxis: {
            type: "value",
            name: yType
        },
        series: [
            {
                name: "Raw Points",
                type: "scatter",
                data: allX.map((x, i) => [x, allY[i]]),
                symbolSize: 8
            },
            {
                name: "Regression Line",
                type: "line",
                data: [], // add later
                symbol: "none"
            }
        ]
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
                                <option key={f} value={f} disabled={f === yType}>
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
                                <option key={f} value={f} disabled={f === xType}>
                                    {f}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <ReactECharts option={option} style={{ height: 500 }} />

                <div className="text-center mt-6 text-primary-text">
                    <div>Points: <strong>{allX.length}</strong></div>
                    <div>Prediction at x=50: <strong>{prediction}</strong></div>
                </div>
            </div>
        </div>
    );
}
