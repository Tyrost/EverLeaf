"use client";

import { useState } from "react";
import EverLeafLogo from "../utils/EverLeafLogo";

export default function AccountPage() {
    const [isEditing, setIsEditing] = useState(false);

    const [firstName, setFirstName] = useState("First");
    const [lastName, setLastName] = useState("Last");
    const [address, setAddress] = useState("Oregon - United States");
    const [email, setEmail] = useState("example@email.com");
    const [phone, setPhone] = useState("(123) 456-7890");
    const [birthday, setBirthday] = useState("January 1st, 2000");

    return (
        <div>
            <div className="flex justify-center">
                <EverLeafLogo size={[125, 125]} />
            </div>

            <hr className="h-px w-full border-0 bg-gray-400/40" />

            <div className="w-[50vw] flex flex-col mx-auto mt-6 border-2 border-gray-400/40 rounded-lg">
                <div className="flex justify-between items-center px-4 mt-6">
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="px-4 py-1 border rounded-lg hover:bg-neutral-900 transition cursor-pointer"
                    >
                        {isEditing ? "Save" : "Edit"}
                    </button>
                </div>

                {/* Avatar */}
                <div className="flex justify-center mb-5">
                    <div className="w-[10rem] h-[10rem] rounded-full border-2 border-white flex items-center justify-center"></div>
                </div>

                <hr className="h-px w-full border-0 bg-gray-400/40" />

                {/* ============================ */}
                {/*  FIRST + LAST NAME           */}
                {/* ============================ */}

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

                {/* ============================ */}
                {/*  ADDRESS (ONE FIELD)         */}
                {/* ============================ */}

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

                {/* ============================ */}
                {/*  EMAIL + PHONE               */}
                {/* ============================ */}

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

                {/* ============================ */}
                {/*  BIRTHDAY (ONE FIELD)        */}
                {/* ============================ */}

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

            </div>
        </div>
    );
}
