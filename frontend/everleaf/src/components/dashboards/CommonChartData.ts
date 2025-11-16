export enum DataTypeEnum {
    SoilMoisturePercent = "soil_moisture_%",
    SoilPH = "soil_pH",
    TemperatureC = "temperature_C",
    RainfallMM = "rainfall_mm",
    HumidityPercent = "humidity_%",
    SunlightHours = "sunlight_hours",
    PesticideUsageML = "pesticide_usage_ml",
    TotalDays = "total_days",
    YieldKgPerHectare = "yield_kg_per_hectare",
    Latitude = "latitude",
    Longitude = "longitude",
    NDVIIndex = "NDVI_index",
    HealthIndex = "health_index",
}


// ============================================
// COLOR CONFIGURATION - Edit colors here!
// ============================================
const LIGHT_COLORS = {
    // Background colors
    pageBackground: "#f9fafb", // gray-50
    cardBackground: "#ffffff", // white

    // Text colors
    titleText: "#1f2937", // gray-800
    labelText: "#374151", // gray-700
    subtleText: "#6b7280", // gray-500
    axisText: "#9ca3af", // gray-400

    // Chart colors
    scatterDotStart: "#66bb6a", // Light green (gradient start)
    scatterDotEnd: "#2e7d32", // Dark green (gradient end)
    scatterDotHover: "#4ade80", // Bright green on hover
    scatterDotShadow: "rgba(76, 175, 80, 0.4)",
    scatterDotShadowHover: "rgba(76, 175, 80, 0.6)",

    // Tooltip colors
    tooltipBackground: "rgba(0, 0, 0, 0.8)",
    tooltipBorder: "#4ade80",
    tooltipText: "#ffffff",

    // Grid and axis colors
    gridLine: "#f3f4f6", // gray-100
    axisLine: "#e5e7eb", // gray-200

    // UI elements
    selectBorder: "#e5e7eb", // gray-200
    dividerLine: "#e5e7eb", // gray-200

    // Shadows
    cardShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
};

const DARK_COLORS = {
    // Background colors
    pageBackground: "#0a0a0a", // neutral-950
    cardBackground: "#171717", // neutral-900

    // Text colors
    titleText: "#fafafa", // neutral-50
    labelText: "#e5e5e5", // neutral-200
    subtleText: "#a3a3a3", // neutral-400
    axisText: "#737373", // neutral-500

    // Chart colors
    scatterDotStart: "#4ade80", // Light green (gradient start)
    scatterDotEnd: "#22c55e", // Dark green (gradient end)
    scatterDotHover: "#86efac", // Bright green on hover
    scatterDotShadow: "rgba(74, 222, 128, 0.3)",
    scatterDotShadowHover: "rgba(74, 222, 128, 0.5)",

    // Tooltip colors
    tooltipBackground: "rgba(23, 23, 23, 0.95)", // neutral-900 with opacity
    tooltipBorder: "#4ade80",
    tooltipText: "#fafafa", // neutral-50

    // Grid and axis colors
    gridLine: "#262626", // neutral-800
    axisLine: "#404040", // neutral-700

    // UI elements
    selectBorder: "#404040", // neutral-700
    dividerLine: "#404040", // neutral-700

    // Shadows
    cardShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
};

const isDarkMode = true;
export const CHART_COLORS = isDarkMode ? DARK_COLORS : LIGHT_COLORS;