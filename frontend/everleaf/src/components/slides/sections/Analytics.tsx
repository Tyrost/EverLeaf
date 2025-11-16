import LinePlot from "@/components/dashboards/LinePlot";
import { kFieldTypes } from "@/components/dashboards/CommonChartData";

export const AnalyticsPage = () => {

    return (
        <>
            <LinePlot fields={kFieldTypes} />
        </>
    );
};
