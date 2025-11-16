import ScatterPlot from "@/components/dashboards/ScatterPlot";
import { kFieldTypes } from "@/components/dashboards/CommonChartData";

export const GlobalPage = () => {
    const testData = [
    { 'soilmoisture%': 45.2, 'soil_pH': 6.8, 'temperature_C': 24.5, 'rainfallmm': 145.3, 'humidity%': 68.5, 'sunlight_hours': 8.2, 'pesticide_usage_ml': 245.0, 'total_days': 95, 'yield_kg_per_hectare': 4250.5, 'latitude': 35.4, 'longitude': -95.2, 'NDVI_index': 0.72 },
    { 'soilmoisture%': 52.1, 'soil_pH': 7.2, 'temperature_C': 26.3, 'rainfallmm': 178.9, 'humidity%': 72.3, 'sunlight_hours': 7.8, 'pesticide_usage_ml': 280.5, 'total_days': 102, 'yield_kg_per_hectare': 4680.2, 'latitude': 34.8, 'longitude': -96.1, 'NDVI_index': 0.78 },
    { 'soilmoisture%': 38.6, 'soil_pH': 6.5, 'temperature_C': 23.1, 'rainfallmm': 132.4, 'humidity%': 65.8, 'sunlight_hours': 8.5, 'pesticide_usage_ml': 220.3, 'total_days': 88, 'yield_kg_per_hectare': 3890.7, 'latitude': 36.2, 'longitude': -94.5, 'NDVI_index': 0.68 },
    { 'soilmoisture%': 48.9, 'soil_pH': 7.0, 'temperature_C': 25.7, 'rainfallmm': 165.2, 'humidity%': 70.1, 'sunlight_hours': 8.0, 'pesticide_usage_ml': 265.8, 'total_days': 98, 'yield_kg_per_hectare': 4420.3, 'latitude': 35.9, 'longitude': -95.8, 'NDVI_index': 0.75 },
    { 'soilmoisture%': 41.3, 'soil_pH': 6.3, 'temperature_C': 22.8, 'rainfallmm': 125.7, 'humidity%': 63.4, 'sunlight_hours': 9.1, 'pesticide_usage_ml': 210.5, 'total_days': 85, 'yield_kg_per_hectare': 3650.9, 'latitude': 37.1, 'longitude': -93.8, 'NDVI_index': 0.65 },
    { 'soilmoisture%': 55.7, 'soil_pH': 7.5, 'temperature_C': 27.2, 'rainfallmm': 195.6, 'humidity%': 75.9, 'sunlight_hours': 7.3, 'pesticide_usage_ml': 310.2, 'total_days': 108, 'yield_kg_per_hectare': 4890.1, 'latitude': 33.6, 'longitude': -97.3, 'NDVI_index': 0.82 },
    { 'soilmoisture%': 35.8, 'soil_pH': 6.1, 'temperature_C': 21.5, 'rainfallmm': 108.3, 'humidity%': 61.2, 'sunlight_hours': 9.5, 'pesticide_usage_ml': 195.7, 'total_days': 82, 'yield_kg_per_hectare': 3420.5, 'latitude': 38.4, 'longitude': -92.7, 'NDVI_index': 0.61 },
    { 'soilmoisture%': 50.4, 'soil_pH': 6.9, 'temperature_C': 25.0, 'rainfallmm': 158.9, 'humidity%': 69.3, 'sunlight_hours': 8.3, 'pesticide_usage_ml': 255.0, 'total_days': 96, 'yield_kg_per_hectare': 4320.8, 'latitude': 35.7, 'longitude': -95.5, 'NDVI_index': 0.73 },
    { 'soilmoisture%': 43.2, 'soil_pH': 6.6, 'temperature_C': 23.9, 'rainfallmm': 142.1, 'humidity%': 66.7, 'sunlight_hours': 8.7, 'pesticide_usage_ml': 235.4, 'total_days': 91, 'yield_kg_per_hectare': 4050.3, 'latitude': 36.5, 'longitude': -94.9, 'NDVI_index': 0.70 },
    { 'soilmoisture%': 58.3, 'soil_pH': 7.8, 'temperature_C': 28.1, 'rainfallmm': 210.4, 'humidity%': 78.5, 'sunlight_hours': 6.9, 'pesticide_usage_ml': 335.6, 'total_days': 115, 'yield_kg_per_hectare': 5120.7, 'latitude': 32.9, 'longitude': -98.1, 'NDVI_index': 0.85 },
    { 'soilmoisture%': 32.9, 'soil_pH': 5.9, 'temperature_C': 20.8, 'rainfallmm': 95.7, 'humidity%': 58.9, 'sunlight_hours': 10.2, 'pesticide_usage_ml': 175.3, 'total_days': 78, 'yield_kg_per_hectare': 3180.2, 'latitude': 39.2, 'longitude': -91.5, 'NDVI_index': 0.58 },
    { 'soilmoisture%': 46.8, 'soil_pH': 6.7, 'temperature_C': 24.3, 'rainfallmm': 152.8, 'humidity%': 67.8, 'sunlight_hours': 8.4, 'pesticide_usage_ml': 248.9, 'total_days': 94, 'yield_kg_per_hectare': 4180.6, 'latitude': 36.0, 'longitude': -95.3, 'NDVI_index': 0.71 },
    { 'soilmoisture%': 39.7, 'soil_pH': 6.4, 'temperature_C': 22.5, 'rainfallmm': 128.5, 'humidity%': 64.5, 'sunlight_hours': 9.0, 'pesticide_usage_ml': 215.7, 'total_days': 86, 'yield_kg_per_hectare': 3780.4, 'latitude': 37.3, 'longitude': -93.4, 'NDVI_index': 0.67 },
    { 'soilmoisture%': 53.6, 'soil_pH': 7.3, 'temperature_C': 26.8, 'rainfallmm': 185.3, 'humidity%': 73.6, 'sunlight_hours': 7.6, 'pesticide_usage_ml': 295.4, 'total_days': 105, 'yield_kg_per_hectare': 4780.9, 'latitude': 34.2, 'longitude': -96.8, 'NDVI_index': 0.80 },
    { 'soilmoisture%': 37.4, 'soil_pH': 6.2, 'temperature_C': 21.9, 'rainfallmm': 115.9, 'humidity%': 62.3, 'sunlight_hours': 9.3, 'pesticide_usage_ml': 202.8, 'total_days': 83, 'yield_kg_per_hectare': 3520.7, 'latitude': 38.1, 'longitude': -92.9, 'NDVI_index': 0.63 },
    { 'soilmoisture%': 51.2, 'soil_pH': 7.1, 'temperature_C': 25.4, 'rainfallmm': 168.7, 'humidity%': 70.9, 'sunlight_hours': 7.9, 'pesticide_usage_ml': 270.3, 'total_days': 99, 'yield_kg_per_hectare': 4520.1, 'latitude': 35.3, 'longitude': -96.2, 'NDVI_index': 0.76 },
    { 'soilmoisture%': 44.5, 'soil_pH': 6.8, 'temperature_C': 24.1, 'rainfallmm': 148.2, 'humidity%': 67.1, 'sunlight_hours': 8.6, 'pesticide_usage_ml': 240.6, 'total_days': 92, 'yield_kg_per_hectare': 4120.5, 'latitude': 36.3, 'longitude': -94.7, 'NDVI_index': 0.72 },
    { 'soilmoisture%': 56.9, 'soil_pH': 7.6, 'temperature_C': 27.6, 'rainfallmm': 202.1, 'humidity%': 76.8, 'sunlight_hours': 7.1, 'pesticide_usage_ml': 322.9, 'total_days': 112, 'yield_kg_per_hectare': 5020.3, 'latitude': 33.1, 'longitude': -97.9, 'NDVI_index': 0.84 },
    { 'soilmoisture%': 34.6, 'soil_pH': 6.0, 'temperature_C': 21.2, 'rainfallmm': 102.4, 'humidity%': 60.1, 'sunlight_hours': 9.8, 'pesticide_usage_ml': 185.2, 'total_days': 80, 'yield_kg_per_hectare': 3320.8, 'latitude': 38.9, 'longitude': -92.1, 'NDVI_index': 0.60 },
    { 'soilmoisture%': 49.1, 'soil_pH': 6.9, 'temperature_C': 24.8, 'rainfallmm': 162.5, 'humidity%': 69.7, 'sunlight_hours': 8.1, 'pesticide_usage_ml': 260.7, 'total_days': 97, 'yield_kg_per_hectare': 4380.9, 'latitude': 35.6, 'longitude': -95.7, 'NDVI_index': 0.74 },
];

    return (
        <>
            <ScatterPlot fields={kFieldTypes} data={testData}/>
        </>
    );
};
