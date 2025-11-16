"use client";

import EChartsReact from "echarts-for-react";
import GlobalSummaryPanel from "../core/GlobalSummaryPanel";
import { useEffect, useRef, useState } from "react";
import { CHART_COLORS } from "../dashboards/CommonChartData";

const StatBox = ({ label, value }: { label: string; value: string }) => {
    return (
        <>
            <div className="text-center">
                <div className="text-xs text-secondary-text mb-1">
                    {label}
                </div>
                <div className="text-xl font-bold text-primary-text">
                    {value}
                </div>
            </div>
        </>
    );
};

const StatContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-6 pt-6 border-t border-border">
            {children}
        </div>
    );
};

const MoreStats = () => {
    const rawData = useRef<any | null>(null);

    // states 
    const [loading, setLoading] = useState<boolean>(true);
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);


    useEffect(() => {
        if (!mounted) return;

        async function load() {
            setLoading(true);
        }
        load();
    }, [fieldX, fieldY, mounted]);


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
                data: transformed_data,
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
        <>
            <div className="font-sans min-h-screen p-6">
                <div className="border border-border bg-secondary rounded-2xl p-6 shadow-2xl mx-auto">
                    <div>
                        <h2 className="text-2xl font-bold text-primary-text mb-5 mt-0">
                            Annual Summary Evaluation
                        </h2>
                        <div>
                            {
                                /* <EChartsReact
                            option={options}
                            /> */
                            }
                        </div>
                        <StatContainer>
                            <StatBox label="words" value="50" />
                            <StatBox label="words" value="50" />
                            <StatBox label="words" value="50" />
                        </StatContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoreStats;
