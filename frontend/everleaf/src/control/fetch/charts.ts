import { ScatterPlotFetch, RegressionApiResponse, RegressionPlotTuple, 
    FarmRangeTuple, RangeApiResponse, FarmHealthApiResponse, FarmHealthPoint,
FarmRecord, FarmApiResponse } from "../types/Chart";

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
        const json = await response.json();

        // FIX: return only the x/y arrays
        return json.response;

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

export const fetchFarmHealth = async (): Promise<FarmHealthPoint[]> => {
    try {
        const reqUrl = `${base}/api/farms/health`;
        console.log(reqUrl)
        const response = await fetch(reqUrl);

        if (!response.ok) {
            throw new Error(`HTTP error fetchFarmHealth. Status: ${response.status}`);
        }

        const data: FarmHealthApiResponse = await response.json();

        return data.response;
    } catch (error) {
        console.error("Failed to fetch farm health data:", error);
        throw error;
    }
};

export const fetchFarm = async (farm_id: string): Promise<FarmRecord> => {
  try {
    const reqUrl = `${base}/api/farms/${farm_id}`;

    const response = await fetch(reqUrl);

    if (!response.ok) {
      throw new Error(`HTTP error fetchFarm. Status: ${response.status}`);
    }

    const json: FarmApiResponse = await response.json();

    return json.response; // just 1 farm
  } catch (error) {
    console.error("Failed to fetch farm:", error);
    throw error;
  }
};
