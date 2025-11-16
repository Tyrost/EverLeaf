"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EverLeafLogo from "../utils/EverLeafLogo";
import { useUser } from "@clerk/nextjs";
import { postFormInfo } from "@/control/fetch/forms";

export interface FormDataType {
    user_id: string;
    name: string;
    location: string;
    longitude: string;
    latitude: string;
    sowing_date: string;
    harvest_date: string;
    crop_type: string;
    irrigation_type: string;
    fertilizer_type: string;
    pesticide_usage_ml: string;
    soil_pH: string;
    "soil_moisture_%": string;
    rainfall_mm: string;
    temperature_C: string;
    "humidity_%": string;
    sunlight_hours: string;
    NDVI_index: string;
    yield_kg_per_hectare: string;
    crop_disease_status: string;
    region: string;
}

export default function FormSlide() {
    const [page, setPage] = useState(1);
    const { user } = useUser();

    const nextPage = () => setPage((p) => Math.min(3, p + 1));
    const prevPage = () => setPage((p) => Math.max(1, p - 1));

    const [formData, setFormData] = useState<FormDataType>({
        user_id: "",
        name: "",
        location: "",
        longitude: "",
        latitude: "",
        sowing_date: "",
        harvest_date: "",
        crop_type: "",
        irrigation_type: "",
        fertilizer_type: "",
        pesticide_usage_ml: "",
        soil_pH: "",
        "soil_moisture_%": "",
        rainfall_mm: "",
        temperature_C: "",
        "humidity_%": "",
        sunlight_hours: "",
        NDVI_index: "",
        yield_kg_per_hectare: "",
        crop_disease_status: "",
        region: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (user?.id) {
            setFormData((prev) => ({
                ...prev,
                user_id: user.id,
            }));
        }
    }, [user]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            {/* Background Blobs */}
            <motion.div
                className="absolute top-10 left-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl -z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl -z-10"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
            >
                <EverLeafLogo size={[150, 150]} />
            </motion.div>

            <hr className="h-px w-full border-0 bg-gray-400/40" />

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-[50vw] flex flex-col mx-auto mt-6 border-2 border-gray-400/40 rounded-lg backdrop-blur-md bg-white/5"
            >
                <div className="relative flex flex-col px-4 mt-4 mb-4 gap-4">

                    {/* Page 1 */}
                    {page === 1 && (
                        <>
                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Farm Name</span>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Farm Name"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Location</span>
                                    <input
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="Location"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Longitude</span>
                                    <input
                                        name="longitude"
                                        value={formData.longitude}
                                        onChange={handleChange}
                                        placeholder="Longitude"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Latitude</span>
                                    <input
                                        name="latitude"
                                        value={formData.latitude}
                                        onChange={handleChange}
                                        placeholder="Latitude"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Sowing Date</span>
                                    <input
                                        name="sowing_date"
                                        value={formData.sowing_date}
                                        onChange={handleChange}
                                        placeholder="Sowing Date"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Harvest Date</span>
                                    <input
                                        name="harvest_date"
                                        value={formData.harvest_date}
                                        onChange={handleChange}
                                        placeholder="Harvest Date"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>
                        </>
                    )}

                    {/* Page 2 */}
                    {page === 2 && (
                        <>
                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Crop Type</span>
                                    <input
                                        name="crop_type"
                                        value={formData.crop_type}
                                        onChange={handleChange}
                                        placeholder="Crop Type"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>

                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Irrigation Type</span>
                                    <input
                                        name="irrigation_type"
                                        value={formData.irrigation_type}
                                        onChange={handleChange}
                                        placeholder="Irrigation Type"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Fertilizer Type</span>
                                    <input
                                        name="fertilizer_type"
                                        value={formData.fertilizer_type}
                                        onChange={handleChange}
                                        placeholder="Fertilizer Type"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Pesticide Usage (mL)</span>
                                    <input
                                        name="pesticide_usage_ml"
                                        value={formData.pesticide_usage_ml}
                                        onChange={handleChange}
                                        placeholder="Pesticide Usage (mL)"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Crop Disease Status</span>
                                    <input
                                        name="crop_disease_status"
                                        value={formData.crop_disease_status}
                                        onChange={handleChange}
                                        placeholder="None, Mild, Moderate, Severe"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>

                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Soil pH</span>
                                    <input
                                        name="soil_pH"
                                        value={formData.soil_pH}
                                        onChange={handleChange}
                                        placeholder="Soil pH"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[85%] flex flex-col text-sm">
                                    <span className="mb-1">Region</span>
                                    <input
                                        name="region"
                                        value={formData.region}
                                        onChange={handleChange}
                                        placeholder="North/South India, South/Central USA, East Africa"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>
                        </>
                    )}

                    {/* Page 3 */}
                    {page === 3 && (
                        <>
                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Soil Moisture Percentage</span>
                                    <input
                                        name="soil_moisture_%"
                                        value={formData["soil_moisture_%"]}
                                        onChange={handleChange}
                                        placeholder="Soil Moisture Percentage"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>

                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Rainfall (mm)</span>
                                    <input
                                        name="rainfall_mm"
                                        value={formData.rainfall_mm}
                                        onChange={handleChange}
                                        placeholder="Rainfall (mm)"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Temperature (°C)</span>
                                    <input
                                        name="temperature_C"
                                        value={formData.temperature_C}
                                        onChange={handleChange}
                                        placeholder="Temperature (°C)"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>

                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Humidity Percentage</span>
                                    <input
                                        name="humidity_%"
                                        value={formData["humidity_%"]}
                                        onChange={handleChange}
                                        placeholder="Humidity Percentage"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">Sunlight Hours</span>
                                    <input
                                        name="sunlight_hours"
                                        value={formData.sunlight_hours}
                                        onChange={handleChange}
                                        placeholder="Sunlight Hours"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>

                                <label className="w-[40%] flex flex-col text-sm">
                                    <span className="mb-1">NDVI Index</span>
                                    <input
                                        name="NDVI_index"
                                        value={formData.NDVI_index}
                                        onChange={handleChange}
                                        placeholder="NDVI Index"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <div className="flex justify-center gap-10 w-full">
                                <label className="w-[85%] flex flex-col text-sm">
                                    <span className="mb-1">Estimated Yield (Kg / Hectare)</span>
                                    <input
                                        name="yield_kg_per_hectare"
                                        value={formData.yield_kg_per_hectare}
                                        onChange={handleChange}
                                        placeholder="Estimated Yield (Kg / Hectare)"
                                        className="p-2 rounded-md border border-gray-400/40 focus:outline-none"
                                    />
                                </label>
                            </div>
                        </>
                    )}

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 text-sm select-none text-neutral-200">
                        <span className={page === 1 ? "opacity-100" : "opacity-30"}>●</span>
                        <span className={page === 2 ? "opacity-100" : "opacity-30"}>●</span>
                        <span className={page === 3 ? "opacity-100" : "opacity-30"}>●</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between px-2 pb-2">
                        <button
                            onClick={prevPage}
                            disabled={page === 1}
                            className="opacity-80 disabled:opacity-30 cursor-pointer disabled:cursor-default"
                        >
                            Previous
                        </button>

                        <button
                            onClick={page === 3 ? () => postFormInfo(formData) : nextPage}
                            className="opacity-80 cursor-pointer"
                        >
                            {page === 3 ? "Submit" : "Next"}
                        </button>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
}
