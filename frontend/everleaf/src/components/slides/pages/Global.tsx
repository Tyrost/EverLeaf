import React from "react";
import EChartsReact, { EChartsOption } from "echarts-for-react";

interface RegionData {
    region: string;
    value: number;
}

interface GlobalPageProps {
    data?: RegionData[];
}

export const GlobalPage = () => {
    const defaultData: RegionData[] = [
        { region: "North America", value: 4000 },
        { region: "Europe", value: 3500 },
        { region: "Asia", value: 5200 },
        { region: "South America", value: 2100 },
        { region: "Africa", value: 1800 },
        { region: "Oceania", value: 1200 },
    ];

    const chartData = defaultData;
    const regions = chartData.map((d) => d.region);
    const values = chartData.map((d) => d.value);

    const option = {
        backgroundColor: "transparent",
        title: {
            text: "Regional Distribution",
            left: "center",
            top: 20,
            textStyle: {
                color: "#e0e0e0",
                fontSize: 20,
                fontWeight: 600,
            },
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            borderColor: "#4caf50",
            borderWidth: 1,
            textStyle: {
                color: "#fff",
            },
        },
        grid: {
            left: "10%",
            right: "5%",
            bottom: "15%",
            top: "20%",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            data: regions,
            axisLabel: {
                color: "#b0bec5",
                fontSize: 12,
                rotate: 45,
            },
            axisLine: {
                lineStyle: {
                    color: "#37474f",
                    width: 2,
                },
            },
            axisTick: {
                lineStyle: {
                    color: "#37474f",
                },
            },
        },
        yAxis: {
            type: "value",
            name: "Value",
            nameTextStyle: {
                color: "#e0e0e0",
                fontSize: 14,
                fontWeight: 600,
                padding: [0, 0, 10, 0],
            },
            axisLabel: {
                color: "#b0bec5",
                fontSize: 12,
            },
            axisLine: {
                lineStyle: {
                    color: "#37474f",
                    width: 2,
                },
            },
            axisTick: {
                lineStyle: {
                    color: "#37474f",
                },
            },
            splitLine: {
                lineStyle: {
                    color: "#263238",
                    type: "dashed",
                    opacity: 0.5,
                },
            },
        },
        series: [
            {
                name: "Value",
                type: "bar",
                data: values,
                barWidth: "50%",
                itemStyle: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: "#66bb6a" },
                            { offset: 1, color: "#2e7d32" },
                        ],
                    },
                    borderRadius: [4, 4, 0, 0],
                    shadowColor: "rgba(76, 175, 80, 0.5)",
                    shadowBlur: 10,
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 20,
                        shadowColor: "rgba(76, 175, 80, 0.7)",
                    },
                },
            },
        ],
    };

    return (
        <>
            <EChartsReact option={option} />
        </>
    );
};
