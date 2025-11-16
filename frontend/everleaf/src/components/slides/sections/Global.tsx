import ScatterPlot from "@/components/dashboards/ScatterPlot";
import MoreStats from "../MoreStats";

export const GlobalPage = () => {

    return (
        <>  
        <div className="w-full flex justify-center mt-[80px]">
            <div className="flex flex-col w-[80%]">
                <ScatterPlot/>
                <MoreStats/>
            </div>
        </div>
        </>
    );
};
