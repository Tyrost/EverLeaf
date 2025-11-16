"use client";
import React from "react";

import { ApexOptions } from "apexcharts";

import dynamic from "next/dynamic";
// Dynamically import the ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function BarChartOne({height, data} : {height : number | string, data : Array<number>}) {
  const options: ApexOptions = {
    colors: ["#63CB6D"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: height,
      foreColor: "#FFFFFF",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "39%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    yaxis: {
      title: {
        text: undefined, 
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      opacity: 0.8,
    },

    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: (val: number) => `${val}`,
      },
      style: {
        fontSize: '12px',
        fontFamily: 'Outfit, sans-serif',
      },
      theme: 'dark'
    },
  };
  const series = [
    {
      name: "Sales",
      data: data,
    },
  ];
  return (
    <div className="w-full custom-scrollbar">
      <div id="chartOne">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={height}
        />
      </div>
    </div>
  );
}