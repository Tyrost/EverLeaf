
// credit: https://github.com/adminmart/Modernize-Nextjs-Free

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import DashboardCard from "./DashboardCard";

import { numberToLegible } from "./misc";
import { ApexOptions } from "apexcharts";

const Donut = () => {

    const colors = ["#189825", "#63CB6D", "#BEE2C1"]

      const chartData = {
    state: "California",
    homePrice: 854200,            // avg price
    percentageChange: "+6.4%",    // YoY change
    labels: ["Single Family", "Condo", "Townhome"],
    series: [62, 27, 11],         // donut chart %
  };


    const chartOptions: ApexOptions = {
      chart: {
        type: "donut",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        toolbar: { show: false },
        height: 155,
      },
      colors: colors,
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            background: "transparent",
          },
        },
      },
      stroke: { show: false },
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: { fillSeriesColor: false },
    };
    

  return (
    <DashboardCard title="Average Home Prices" subtitle={`Live Data in ${chartData.state}`}>
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Stats */}
        <div className="col-span-7">
          <h3 className="text-3xl font-bold text-white">
            ${numberToLegible(chartData.homePrice, true)}
          </h3>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-white">
              {chartData.percentageChange}
            </span>
            <span className="text-sm text-white">
              last year
            </span>
          </div>

          {/* Legend */}
          <div className="flex gap-6 mt-8">
            {chartData.labels.slice(0, 2).map((label, index) => (
              <div key={label} className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: colors[index] }}
                />
                <span className="text-sm text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Chart */}
        <div className="col-span-5">
          <Chart
            options={chartOptions}
            series={chartData.series}
            type="donut"
            height={150}
            width="100%"
          />
        </div>
      </div>
    </DashboardCard>
  );
};

export default Donut;