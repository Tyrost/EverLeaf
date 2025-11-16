"use client";
import { useUser } from "@clerk/nextjs";
import "./status.css";

export const OverviewPage = () => {
    const { user } = useUser();
    const userName = user?.firstName || "unknown";
    const version = "BETA v1.2.0";

    const activeUsers = "14k";
    const farms = 5000;
    const uptime = "13 hours";

    return (
        <>
            <div className="w-full flex flex-col items-center">
                {/* Greeting */}
                <h1 className="text-[1.5vw] font-outfit self-start mb-5">
                    Welcome back,{" "}
                    <span className="text-green-400 underline font-medium">
                        {userName}
                    </span>{" "}
                    👋
                </h1>

                {/* Hero Panel */}
                <div className="text-center flex flex-col justify-center items-center 
                        w-[80%] border border-white/20 rounded-lg bg-secondary py-8 mb-10 mt-[50px]">
                    <h1 className="flex justify-center items-center font-outfit text-[48px] font-bold text-brand">
                        EverLeaf
                        <span className="mx-5 items-center text-[24px] border border-white/10 p-3 text-white 
                                 bg-zinc-800 rounded-lg">
                            {version}
                        </span>
                    </h1>

                    <p className="w-[60%] py-5 text-white font-outfit">
                        Welcome to EverLeaf, your comprehensive agriculture
                        insight platform. Stay connected with your industry and
                        discover national trends.
                    </p>

                    <div className="my-5 flex flex-row items-center justify-center gap-2">
                        <span className="status-indicator"></span>
                        <span className="status-text text-white text-sm">
                            System Operational
                        </span>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="flex justify-center items-center w-[80%] gap-x-[3%] mb-10">
                    {/* Users */}
                    <div className="flex flex-col p-5 font-outfit text-center 
                            border border-white/20 rounded-md bg-secondary 
                            w-[30%] text-zinc-400">
                        <span className="text-[50px] font-[200] text-green-200">
                            {activeUsers}
                        </span>
                        Active Users
                    </div>

                    {/* Neighborhoods */}
                    <div className="flex flex-col p-5 font-outfit text-center 
                            border border-white/20 rounded-md bg-secondary 
                            w-[30%] text-zinc-400">
                        <span className="text-[50px] font-[200] text-green-200">
                            {farms}
                        </span>
                        Registered Farms
                    </div>

                    {/* Uptime */}
                    <div className="flex flex-col p-5 font-outfit text-center 
                            border border-white/20 rounded-md bg-secondary
                            w-[30%] text-zinc-400">
                        <span className="text-[50px] font-[200] text-green-200">
                            {uptime}
                        </span>
                        Uptime
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
    );
};
