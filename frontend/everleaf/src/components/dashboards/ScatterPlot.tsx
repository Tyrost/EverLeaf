import { useState } from 'react';
import ReactECharts from 'echarts-for-react';

interface DataPoint {
    'soilmoisture%': number;
    'soil_pH': number;
    'temperature_C': number;
    'rainfallmm': number;
    'humidity%': number;
    'sunlight_hours': number;
    'pesticide_usage_ml': number;
    'total_days': number;
    'yield_kg_per_hectare': number;
    'latitude': number;
    'longitude': number;
    'NDVI_index': number;
}

interface ScatterPlotProps {
    data?: DataPoint[];
}

// ============================================
// COLOR CONFIGURATION - Edit colors here!
// ============================================
const LIGHT_COLORS = {
    // Background colors
    pageBackground: '#f9fafb',        // gray-50
    cardBackground: '#ffffff',        // white
    
    // Text colors
    titleText: '#1f2937',             // gray-800
    labelText: '#374151',             // gray-700
    subtleText: '#6b7280',            // gray-500
    axisText: '#9ca3af',              // gray-400
    
    // Chart colors
    scatterDotStart: '#66bb6a',       // Light green (gradient start)
    scatterDotEnd: '#2e7d32',         // Dark green (gradient end)
    scatterDotHover: '#4ade80',       // Bright green on hover
    scatterDotShadow: 'rgba(76, 175, 80, 0.4)',
    scatterDotShadowHover: 'rgba(76, 175, 80, 0.6)',
    
    // Tooltip colors
    tooltipBackground: 'rgba(0, 0, 0, 0.8)',
    tooltipBorder: '#4ade80',
    tooltipText: '#ffffff',
    
    // Grid and axis colors
    gridLine: '#f3f4f6',              // gray-100
    axisLine: '#e5e7eb',              // gray-200
    
    // UI elements
    selectBorder: '#e5e7eb',          // gray-200
    dividerLine: '#e5e7eb',           // gray-200
    
    // Shadows
    cardShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const DARK_COLORS = {
    // Background colors
    pageBackground: '#0a0a0a',        // neutral-950
    cardBackground: '#171717',        // neutral-900
    
    // Text colors
    titleText: '#fafafa',             // neutral-50
    labelText: '#e5e5e5',             // neutral-200
    subtleText: '#a3a3a3',            // neutral-400
    axisText: '#737373',              // neutral-500
    
    // Chart colors
    scatterDotStart: '#4ade80',       // Light green (gradient start)
    scatterDotEnd: '#22c55e',         // Dark green (gradient end)
    scatterDotHover: '#86efac',       // Bright green on hover
    scatterDotShadow: 'rgba(74, 222, 128, 0.3)',
    scatterDotShadowHover: 'rgba(74, 222, 128, 0.5)',
    
    // Tooltip colors
    tooltipBackground: 'rgba(23, 23, 23, 0.95)',  // neutral-900 with opacity
    tooltipBorder: '#4ade80',
    tooltipText: '#fafafa',           // neutral-50
    
    // Grid and axis colors
    gridLine: '#262626',              // neutral-800
    axisLine: '#404040',              // neutral-700
    
    // UI elements
    selectBorder: '#404040',          // neutral-700
    dividerLine: '#404040',           // neutral-700
    
    // Shadows
    cardShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
};

const isDarkMode = true;
const COLORS = isDarkMode ? DARK_COLORS : LIGHT_COLORS;

export default function ScatterPlot({ data }: ScatterPlotProps) {
    const fields = [
        'soilmoisture%',
        'soil_pH',
        'temperature_C',
        'rainfallmm',
        'humidity%',
        'sunlight_hours',
        'pesticide_usage_ml',
        'total_days',
        'yield_kg_per_hectare',
        'latitude',
        'longitude',
        'NDVI_index'
    ];

    // Generate sample data if none provided
    const defaultData: DataPoint[] = Array.from({ length: 100 }, () => ({
        'soilmoisture%': Math.random() * 60 + 20,
        'soil_pH': Math.random() * 4 + 5,
        'temperature_C': Math.random() * 20 + 15,
        'rainfallmm': Math.random() * 200 + 50,
        'humidity%': Math.random() * 40 + 40,
        'sunlight_hours': Math.random() * 8 + 4,
        'pesticide_usage_ml': Math.random() * 500 + 100,
        'total_days': Math.random() * 60 + 80,
        'yield_kg_per_hectare': Math.random() * 3000 + 2000,
        'latitude': Math.random() * 40 + 20,
        'longitude': Math.random() * 60 - 120,
        'NDVI_index': Math.random() * 0.4 + 0.4,
    }));

    const chartData = data || defaultData;

    const [xAxis, setXAxis] = useState<keyof DataPoint>('temperature_C');
    const [yAxis, setYAxis] = useState<keyof DataPoint>('yield_kg_per_hectare');

    // Prepare scatter data
    const scatterData = chartData.map(point => [
        point[xAxis],
        point[yAxis],
    ]);

    const option = {
        backgroundColor: 'transparent',
        title: {
            text: `${yAxis} vs ${xAxis}`,
            left: 'center',
            top: 10,
            textStyle: {
                color: COLORS.titleText,
                fontSize: 18,
                fontWeight: 600,
            },
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: COLORS.tooltipBackground,
            borderColor: COLORS.tooltipBorder,
            borderWidth: 1,
            textStyle: { color: COLORS.tooltipText },
            formatter: (params: any) => {
                return `${xAxis}: ${params.value[0].toFixed(2)}<br/>${yAxis}: ${params.value[1].toFixed(2)}`;
            },
        },
        grid: {
            left: '12%',
            right: '5%',
            bottom: '15%',
            top: '15%',
            containLabel: true,
        },
        xAxis: {
            type: 'value',
            name: xAxis,
            nameLocation: 'middle',
            nameGap: 30,
            nameTextStyle: {
                color: COLORS.subtleText,
                fontSize: 13,
                fontWeight: 600,
            },
            axisLabel: {
                color: COLORS.axisText,
                fontSize: 11,
            },
            axisLine: {
                lineStyle: {
                    color: COLORS.axisLine,
                },
            },
            splitLine: {
                lineStyle: {
                    color: COLORS.gridLine,
                    type: 'dashed',
                },
            },
        },
        yAxis: {
            type: 'value',
            name: yAxis,
            nameLocation: 'middle',
            nameGap: 50,
            nameTextStyle: {
                color: COLORS.subtleText,
                fontSize: 13,
                fontWeight: 600,
            },
            axisLabel: {
                color: COLORS.axisText,
                fontSize: 11,
            },
            axisLine: {
                lineStyle: {
                    color: COLORS.axisLine,
                },
            },
            splitLine: {
                lineStyle: {
                    color: COLORS.gridLine,
                    type: 'dashed',
                },
            },
        },
        series: [
            {
                type: 'scatter',
                data: scatterData,
                symbolSize: 8,
                itemStyle: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [
                            { offset: 0, color: COLORS.scatterDotStart },
                            { offset: 1, color: COLORS.scatterDotEnd },
                        ],
                    },
                    opacity: 0.7,
                    shadowBlur: 8,
                    shadowColor: COLORS.scatterDotShadow,
                },
                emphasis: {
                    itemStyle: {
                        color: COLORS.scatterDotHover,
                        opacity: 1,
                        shadowBlur: 15,
                        shadowColor: COLORS.scatterDotShadowHover,
                    },
                    scale: 1.5,
                },
            },
        ],
    };

    return (
        <div style={{
            padding: '24px',
            backgroundColor: COLORS.pageBackground,
            minHeight: '100vh',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        }}>
            <div style={{
                backgroundColor: COLORS.cardBackground,
                borderRadius: '12px',
                padding: '24px',
                boxShadow: COLORS.cardShadow,
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: COLORS.titleText,
                    marginBottom: '20px',
                    marginTop: 0,
                }}>
                    Agricultural Data Analysis
                </h2>

                {/* Axis Selectors */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '16px',
                    marginBottom: '24px',
                }}>
                    <div>
                        <label style={{
                            display: 'block',
                            fontSize: '14px',
                            fontWeight: '600',
                            color: COLORS.labelText,
                            marginBottom: '8px',
                        }}>
                            X-Axis Variable
                        </label>
                        <select
                            value={xAxis}
                            onChange={(e) => setXAxis(e.target.value as keyof DataPoint)}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                borderRadius: '8px',
                                border: `1px solid ${COLORS.selectBorder}`,
                                fontSize: '14px',
                                color: COLORS.titleText,
                                cursor: 'pointer',
                                backgroundColor: COLORS.cardBackground,
                            }}
                        >
                            {fields.map(field => (
                                <option 
                                    key={field} 
                                    value={field}
                                    disabled={field === yAxis}
                                >
                                    {field}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label style={{
                            display: 'block',
                            fontSize: '14px',
                            fontWeight: '600',
                            color: COLORS.labelText,
                            marginBottom: '8px',
                        }}>
                            Y-Axis Variable
                        </label>
                        <select
                            value={yAxis}
                            onChange={(e) => setYAxis(e.target.value as keyof DataPoint)}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                borderRadius: '8px',
                                border: `1px solid ${COLORS.selectBorder}`,
                                fontSize: '14px',
                                color: COLORS.titleText,
                                cursor: 'pointer',
                                backgroundColor: COLORS.cardBackground,
                            }}
                        >
                            {fields.map(field => (
                                <option 
                                    key={field} 
                                    value={field}
                                    disabled={field === xAxis}
                                >
                                    {field}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Chart */}
                <ReactECharts 
                    option={option} 
                    style={{ height: '500px', width: '100%' }}
                    opts={{ renderer: 'canvas' }}
                />

                {/* Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '16px',
                    marginTop: '24px',
                    paddingTop: '24px',
                    borderTop: `1px solid ${COLORS.dividerLine}`,
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: COLORS.subtleText, marginBottom: '4px' }}>
                            Data Points
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: COLORS.titleText }}>
                            {chartData.length}
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: COLORS.subtleText, marginBottom: '4px' }}>
                            X Range
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: COLORS.titleText }}>
                            {Math.min(...scatterData.map(d => d[0])).toFixed(1)} - {Math.max(...scatterData.map(d => d[0])).toFixed(1)}
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '12px', color: COLORS.subtleText, marginBottom: '4px' }}>
                            Y Range
                        </div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: COLORS.titleText }}>
                            {Math.min(...scatterData.map(d => d[1])).toFixed(1)} - {Math.max(...scatterData.map(d => d[1])).toFixed(1)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}