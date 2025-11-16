import { ScatterPlotFetch, RegressionApiResponse, RegressionPlotTuple, FarmRangeTuple, RangeApiResponse } from "../types/Chart";

const base = process.env.NEXT_PUBLIC_BASE_BACKEND_URL;

// SCATTER
export const fetchScatter = async ({
    field_x,
    field_y
}: {
    field_x: string;
    field_y: string;
}): Promise<ScatterPlotFetch> => {
    try {
        const reqUrl = `${base}/api/scatterplot?field_x=${encodeURIComponent(
            field_x
        )}&field_y=${encodeURIComponent(field_y)}`;

        const response = await fetch(reqUrl);

        if (!response.ok) {
            throw new Error(`HTTP error fetchScatter. Status: ${response.status}`);
        }

        const scatterData: ScatterPlotFetch = await response.json();
        return scatterData;
    } catch (error) {
        console.error("Failed to fetch scatter data:", error);
        throw error;
    }
};

// REGRESSION
export const fetchRegression = async ({
    feature_x,
    feature_y,
    x_value
}: {
    feature_x: string;
    feature_y: string;
    x_value: number;
}): Promise<RegressionPlotTuple> => {
    try {
        const reqUrl = `${base}/api/farms/regression?feature_x=${encodeURIComponent(
            feature_x
        )}&feature_y=${encodeURIComponent(feature_y)}&x_value=${encodeURIComponent(
            x_value
        )}`;

        const response = await fetch(reqUrl);

        if (!response.ok) {
            throw new Error(`HTTP error fetchRegression. Status: ${response.status}`);
        }

        const regressionData: RegressionApiResponse = await response.json();

        // RETURN JUST THE TUPLE
        return regressionData.response;
    } catch (error) {
        console.error("Failed to fetch regression data:", error);
        throw error;
    }
};

export const fetchFarmRange = async (field: string): Promise<FarmRangeTuple> => {
    try {
        const reqUrl = `${base}/api/farms/range/${encodeURIComponent(field)}`;

        const response = await fetch(reqUrl);

        if (!response.ok) {
            throw new Error(`HTTP error fetchFarmRange. Status: ${response.status}`);
        }

        const data: RangeApiResponse = await response.json();

        return data.response; // return [min, max]
    } catch (error) {
        console.error("Failed to fetch farm range:", error);
        throw error;
    }
};