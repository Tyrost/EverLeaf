
'use client';
import Donut from "./widgets/Donut";
import BarChartOne from "./widgets/Chart"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DataSummaryPanel = () => {

    // default dummy value for now
    const currentYear = new Date().getFullYear()
    const [year, changeYear] = useState(currentYear)
    const [globalSalesData, setSalesData] = useState([100, 20, 30, 14, 50, 68, 91, 9, 45, 2, 98, 35])

    const handleChangeYear = () => {
        // fetch API here TODO
    }

    // These should also modify the data based on data fetched from API
    const handleYearIncrement = () => {
        year === currentYear ? currentYear : changeYear(year + 1)
    }

    const handleYearDecrement = () => {
        changeYear(year - 1)
    }

    return (
        <>
        
        <div className=" w-full h-full bg-[rgba(23,23,23, 0.8)] backdrop-blur rounded-3xl p-[2%]">
            {/* Color blobs */}
            <div className="absolute top-0 left-0 w-[60%] h-[45%] bg-gradient-to-br from-green-500/10 to-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-to-tr from-green-500/10 to-orange-500/20 rounded-full blur-3xl"></div>

            <div className="flex flex-col text-center w-full font-outfit py-[3vh]">
                <h1 className="text-[32px] font-semibold">Your Preference Data</h1>
                <h1 className="text-[22px]">Summary</h1>
            </div>
            <div className="flex flex-col justify-between max-w-full">
                {/* Two small charts */}
                <div className="flex gap-x-[3%]">
                    <div className="w-[50%]">
                        <Donut/>
                    </div>
                    <div className="w-[50%]">
                        <Donut/>
                    </div>
                </div>

                {/* One wide chart */}
                <div className="flex w-full justify-center py-[3vh]">
                    <div className="w-[90%] text-left">
                        {/* Title along with Year Change Button */}
                        <div className="flex justify-between items-center">
                            <div className="justify-start">
                                <h1 className="text-[24px] text-white font-inter font-semibold">Homes sold by Month <span className="text-green-200 underline">{year}</span></h1>
                            </div>
                            <div className="justify-end">
                                {/* Year Modify Button */}
                                <div className="flex h-[50px] w-[100px] bg-white/40 backdrop-blur-xl border-2 border-white/10 rounded-sm overflow-hidden">
                                    {/* Display area */}
                                    <div className="flex w-[70%] justify-center items-center text-black font-inter text-[20px]">
                                        {year}
                                    </div>
                                    
                                    {/* Year Control */}
                                    <div className="flex flex-col w-[30%] bg-neutral-800 z-[10]">
                                        <button 
                                            className="flex-1 flex justify-center items-center text-white hover:bg-neutral-600 transition-colors border-b border-white/10"
                                            onClick={() => handleYearIncrement()}>
                                            <ChevronUp />
                                        </button>
                                        <button 
                                            className="flex-1 flex justify-center items-center text-white hover:bg-neutral-600 transition-colors"
                                            onClick={() => handleYearDecrement()}>
                                            <ChevronDown />
                                        </button>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        
                        <BarChartOne height={300} data={globalSalesData}/>
                    </div>
                </div>
            </div>  
        </div>
        
        </>
    )
}

export default DataSummaryPanel