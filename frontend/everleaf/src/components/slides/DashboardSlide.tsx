"use client";

import { Pages } from "./DashboardPages";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../navigation/NavBar";


const DashboardSlide = () => {
    const [currentPage, setPage] = useState("general");
    const router = useRouter();

    const handleTabRendering = () => {
        switch (currentPage) {
            case "overview":
                return <Pages.OverviewPage />;
            case "global":
                return <Pages.GlobalPage />
            case "feed":
                return <Pages.ActivityFeed />;
            case "individual":
                return <Pages.IndividualPage />;
            case "notifications":
                return <Pages.AnalyticsPage />;
            case "analytics":
                return <Pages.GlobalPage />;
            case "search":
                return <Pages.HelpPage />;
            case "favorites":
                return <Pages.IndividualPage />;
            case "settings":
                return <Pages.AccountPage />;
        }
    };

    const handlePageNavigation = (page: string) => {
        setPage(page);
        router.push(`/dashboard?page=${page}`, { scroll: false });
    };

    return (
        <>
            {/* -------------------------------- */}
            {/* FIXED NAVBAR */}
            {/* -------------------------------- */}
            <NavBar/>

            {/* -------------------------------- */}
            {/* MAIN LAYOUT BELOW NAVBAR */}
            {/* -------------------------------- */}
            <div className="flex pt-[100px] h-screen bg-neutral-950">

                {/* -------------------------------- */}
                {/* FIXED SIDEBAR */}
                {/* -------------------------------- */}
                <aside className="fixed left-0 top-[90px] h-[calc(100vh-100px)] w-[20%] border-r border-white bg-neutral-800 overflow-y-auto">

                    <div className="flex flex-col">

                        {/* Main Tabs */}
                        <ul className="flex flex-col text-white/80 font-outfit text-[19px] gap-[1vh] m-[5%]">
                            <li className="w-[70%] rounded-lg p-2.5 hover:bg-white/10 cursor-pointer"
                                onClick={() => handlePageNavigation("overview")}>Overview</li>

                            <li className="w-[70%] rounded-lg p-2.5 hover:bg-white/10 cursor-pointer"
                                onClick={() => handlePageNavigation("global")}>Global Perspectives</li>

                            <li className="w-[70%] rounded-lg p-2.5 hover:bg-white/10 cursor-pointer"
                                onClick={() => handlePageNavigation("individual")}>Individual Snapshot</li>

                            <li className="w-[70%] rounded-lg p-2.5 hover:bg-white/10 cursor-pointer"
                                onClick={() => handlePageNavigation("analytics")}>Advanced Analytics</li>

                            <li className="w-[70%] rounded-lg p-2.5 hover:bg-white/10 cursor-pointer"
                                onClick={() => handlePageNavigation("feed")}>Activity Feed</li>
                        </ul>

                        {/* Divider */}
                        <div className="flex items-center justify-center py-[5%] gap-4">
                            <div className="flex-1 bg-neutral-500 h-px max-w-[30%]"></div>
                            <h1 className="text-neutral-500 font-outfit whitespace-nowrap">Configuration</h1>
                            <div className="flex-1 bg-neutral-500 h-px max-w-[30%]"></div>
                        </div>

                        {/* Settings */}
                        <ul className="flex flex-col text-white/80 font-outfit text-[19px] gap-[1vh] m-[5%]">
                            <li className="w-[70%] rounded-lg p-2.5 hover:bg-white/10 cursor-pointer"
                                onClick={() => router.push("/account")}>Account</li>

                            <li className="w-[70%] rounded-lg p-2.5 hover:bg-white/10 cursor-pointer"
                                onClick={() => router.push("/faq")}>FAQ</li>

                            <li className="w-[70%] rounded-lg p-2.5 hover:bg-white/10 cursor-pointer"
                                onClick={() => router.push("/privacy-policy")}>Privacy & Policy</li>
                        </ul>

                    </div>
                </aside>

                {/* -------------------------------- */}
                {/* SCROLLABLE CONTENT AREA */}
                {/* -------------------------------- */}
                <main className="flex-1 ml-[20%] h-full overflow-y-auto p-6 bg-neutral-750">

                    <h1 className="text-white text-[70px] font-outfit mb-2.5">
                        Dashboard
                    </h1>

                    {handleTabRendering()}
                </main>

            </div>
        </>
    );
};

export default DashboardSlide;
