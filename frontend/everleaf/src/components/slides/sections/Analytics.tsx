import LinePlot, { LinePlotPoint } from "@/components/dashboards/LinePlot";
import { kFieldTypes } from "@/components/dashboards/CommonChartData";

export const AnalyticsPage = () => {
    const fields: LinePlotPoint[] = [
        {
            x: [0, 1, 2, 3, 4, 5],
            y: [12, 15, 17, 20, 22, 24],
            value: 24,
        },
        {
            x: [0, 1, 2, 3, 4, 5],
            y: [8, 10, 14, 13, 16, 18],
            value: 18,
        },
        {
            x: [0, 1, 2, 3, 4, 5],
            y: [5, 7, 9, 11, 10, 12],
            value: 12,
        },
    ];

    return (
        <>
            <LinePlot data={fields} fields={kFieldTypes} />
        </>
    );
};
