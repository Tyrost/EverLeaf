// Scatter data comes as an object
export interface ScatterPlotFetch {
    x: number[];
    y: number[];
}

// Backend sends: { status, response }
export interface RegressionApiResponse {
    status: string;
    response: [number[], number[], number];
}

// The chart only needs the tuple
export type RegressionPlotTuple = [number[], number[], number];

export interface RangeApiResponse {
    status: string;
    response: [number, number]; // [min, max]
}

export type FarmRangeTuple = [number, number];

export interface FarmHealthPoint {
    health_index: number;
    latitude: number;
    longitude: number;
}

export interface FarmHealthApiResponse {
    status: string;
    response: FarmHealthPoint[];
}
