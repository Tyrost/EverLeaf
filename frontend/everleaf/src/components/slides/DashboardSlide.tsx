"use client";

import { Pages } from "./DashboardPages";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import NavBar from "../navigation/NavBar";

interface NavTabProps {
    label: string;
    route: string;
    onClick: (route: string) => void;
}

const NavTab: React.FC<NavTabProps> = ({ label, route, onClick }) => {
    const searchParams = useSearchParams();
    const currentPage = searchParams.get("page");
    const isActive = currentPage === route;

    return (
        <li
            className={`w-[70%] rounded-lg p-2.5 cursor-pointer transition-colors 
                ${
                    isActive
                        ? "bg-brand/20 text-text-primary"
                        : "hover:bg-brand/10 text-text-secondary"
                }`}
            onClick={() => onClick(route)}
        >
            {label}
        </li>
    );
};

interface ConfigTabProps {
    label: string;
    route: string;
}

const ConfigTab: React.FC<ConfigTabProps> = ({ label, route }) => {
    const router = useRouter();

    return (
        <li
            className="w-[70%] rounded-lg transition-colors p-2.5 
                       hover:bg-brand/10 cursor-pointer text-text-secondary"
            onClick={() => router.push(route)}
        >
            {label}
        </li>
    );
};

const DashboardSlide = () => {
    const [currentPage, setPage] = useState("overview");
    const router = useRouter();

    const pageNames: Record<string, string> = {
        overview: "Overview",
        global: "Global Perspectives",
        individual: "Individual Snapshot",
        analytics: "Advanced Analytics",
        feed: "Activity Feed",
    };

    const handleTabRendering = () => {
        switch (currentPage) {
            case "overview":
                return <Pages.OverviewPage />;
            case "global":
                return <Pages.GlobalPage />;
            case "individual":
                return <Pages.IndividualPage />;
            case "analytics":
                return <Pages.AnalyticsPage />;
            case "feed":
                return <Pages.ActivityFeed />;
        }
    };

    const handlePageNavigation = (page: string) => {
        setPage(page);
        router.push(`/dashboard?page=${page}`, { scroll: false });
    };

    return (
        <>
            <NavBar />

            <div className="flex pt-[100px] h-screen bg-primary">
                {/* SIDEBAR */}
                <aside className="fixed left-0 h-[calc(100vh-100px)] w-[20%] border-r border-border bg-secondary overflow-y-auto">
                    <div className="flex flex-col h-full justify-around">

                        {/* Main Tabs */}
                        <ul className="flex flex-col font-outfit text-[19px] gap-[1vh] m-[5%]">
                            <NavTab label="Overview" route="overview" onClick={handlePageNavigation} />
                            <NavTab label="Global Perspectives" route="global" onClick={handlePageNavigation} />
                            <NavTab label="Individual Snapshot" route="individual" onClick={handlePageNavigation} />
                            <NavTab label="Advanced Analytics" route="analytics" onClick={handlePageNavigation} />
                            <NavTab label="Activity Feed" route="feed" onClick={handlePageNavigation} />
                        </ul>

                        {/* Divider */}
                        <div className="flex items-center justify-center py-[5%] gap-4">
                            <div className="flex-1 bg-border h-px max-w-[30%]" />
                            <h1 className="text-secondary-text font-outfit whitespace-nowrap">
                                Configuration
                            </h1>
                            <div className="flex-1 bg-border h-px max-w-[30%]" />
                        </div>

                        {/* Settings */}
                        <ul className="flex flex-col font-outfit text-[19px] text-secondary-text gap-[1vh] m-[5%]">
                            <ConfigTab label="Account" route="/account" />
                            <ConfigTab label="FAQ" route="/faq" />
                            <ConfigTab label="Privacy & Policy" route="/privacy-policy" />
                        </ul>
                    </div>
                </aside>

                {/* CONTENT AREA */}
                <main className="flex-1 ml-[20%] h-full overflow-y-auto p-6 bg-tertiary">
                    <h1 className="text-text-primary text-6xl font-outfit mb-4">
                        Dashboard –{" "}
                        <span className="text-text-secondary font-light">
                            {pageNames[currentPage]}
                        </span>
                    </h1>

                    {handleTabRendering()}
                </main>
            </div>
        </>
    );
};
export default DashboardSlide;
