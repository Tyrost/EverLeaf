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
export type ScatterPlotTuple = [[number, number][]];
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

export interface FarmRecord {
  farm_id: string;
  region: string;
  crop_type: string;

  "soil_moisture_%": number;
  soil_pH: number;
  temperature_C: number;
  rainfall_mm: number;

  "humidity_%": number;

  sunlight_hours: number;
  irrigation_type: string;
  fertilizer_type: string;
  pesticide_usage_ml: number;

  sowing_date: string;
  harvest_date: string;

  total_days: number;
  yield_kg_per_hectare: number;

  sensor_id: string;
  timestamp: string;

  latitude: number;
  longitude: number;

  NDVI_index: number;
  crop_disease_status: string;

  location: string;
  name: string;
}

export interface FarmApiResponse {
  status: string;
  response: FarmRecord;
}
