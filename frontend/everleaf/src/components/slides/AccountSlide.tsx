"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EverLeafLogo from "../utils/EverLeafLogo";
import { useUser } from "@/control/user/UserState";
import Image from "next/image";

export default function AccountSlide() {
    const [isEditing, setIsEditing] = useState(false);

    const [firstName, setFirstName] = useState("First");
    const [lastName, setLastName] = useState("Last");
    const [address, setAddress] = useState("Oregon - United States");
    const [email, setEmail] = useState("example@email.com");
    const [phone, setPhone] = useState("(123) 456-7890");
    const [birthday, setBirthday] = useState("January 1st, 2000");

    const [originalData, setOriginalData] = useState<any>({});

    const { user } = useUser();
    const imagePath = user?.imageUrl;

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
                <div className="relative flex justify-between items-center px-4 mt-4">
                    <button
                        onClick={() => {
                            if (!isEditing) {
                                setOriginalData({
                                    firstName,
                                    lastName,
                                    address,
                                    email,
                                    phone,
                                    birthday,
                                });
                                setIsEditing(true);
                            } else {
                                setFirstName(originalData.firstName);
                                setLastName(originalData.lastName);
                                setAddress(originalData.address);
                                setEmail(originalData.email);
                                setPhone(originalData.phone);
                                setBirthday(originalData.birthday);
                                setIsEditing(false);
                            }
                        }}
                        className="w-[5.5rem] absolute top-0 left-4 px-4 py-1 border rounded-lg hover:bg-neutral-900 transition cursor-pointer"
                    >
                        {isEditing ? "Cancel" : "Edit"}
                    </button>
                </div>

                {/* Avatar */}
                <div className="flex justify-center mb-5">
                    <Image
                        src={imagePath || "/placeholder.png"}
                        alt="User Image"
                        width={200}
                        height={200}
                        className="w-[10rem] h-[10rem] rounded-full border-2 border-white flex items-center justify-center"
                    />
                </div>

                <hr className="h-px w-full border-0 bg-gray-400/40" />

                {/* First + Last Name */}
                <div className="flex justify-center py-6">
                    <div className="flex gap-4 w-[30rem] justify-center">
                        {isEditing ? (
                            <>
                                <input
                                    className="flex-1 px-1 text-left font-semibold border-b border-gray-400/40 focus:outline-none"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="First"
                                />
                                <span className="h-6 w-px bg-gray-400/40"></span>
                                <input
                                    className="flex-1 px-1 text-right font-semibold border-b border-gray-400/40 focus:outline-none"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Last"
                                />
                            </>
                        ) : (
                            <p className="flex w-full px-1 font-semibold items-center justify-between gap-4">
                                <span className="flex-1 text-left">{firstName}</span>
                                <span className="h-6 w-px bg-gray-400/40"></span>
                                <span className="flex-1 text-right">{lastName}</span>
                            </p>
                        )}
                    </div>
                </div>

                <hr className="h-px w-full border-0 bg-gray-400/40" />

                {/* Address */}
                <div className="flex justify-center py-6">
                    {isEditing ? (
                        <input
                            className="w-[30rem] px-1 text-center font-semibold border-b border-gray-400/40 focus:outline-none"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                        />
                    ) : (
                        <p className="w-[30rem] px-1 font-semibold text-center">{address}</p>
                    )}
                </div>

                <hr className="h-px w-full border-0 bg-gray-400/40" />

                {/* Email + Phone */}
                <div className="flex justify-center py-6">
                    <div className="flex gap-4 w-[30rem] justify-center">
                        {isEditing ? (
                            <>
                                <input
                                    className="flex-1 px-1 text-left font-semibold border-b border-gray-400/40 focus:outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                                <span className="h-6 w-px bg-gray-400/40"></span>
                                <input
                                    className="flex-1 px-1 text-right font-semibold border-b border-gray-400/40 focus:outline-none"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone"
                                />
                            </>
                        ) : (
                            <p className="flex w-full px-1 font-semibold items-center justify-between gap-4">
                                <span className="flex-1 text-left">{email}</span>
                                <span className="h-6 w-px bg-gray-400/40"></span>
                                <span className="flex-1 text-right">{phone}</span>
                            </p>
                        )}
                    </div>
                </div>

                <hr className="h-px w-full border-0 bg-gray-400/40" />

                {/* Birthday */}
                <div className="flex justify-center py-6">
                    {isEditing ? (
                        <input
                            className="w-[30rem] text-center px-1 font-semibold border-b border-gray-400/40 focus:outline-none"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            placeholder="Birthday"
                        />
                    ) : (
                        <p className="w-[30rem] px-1 font-semibold text-center">{birthday}</p>
                    )}
                </div>

                <hr className="h-px w-full border-0 bg-gray-400/40" />

                {/* Submit */}
                <div className="flex justify-center py-6">
                    {isEditing ? (
                        <button className="px-4 py-1 border rounded-lg hover:bg-neutral-900 transition cursor-pointer">
                            Submit
                        </button>
                    ) : (
                        <p className="py-[1.15rem]"></p>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}
