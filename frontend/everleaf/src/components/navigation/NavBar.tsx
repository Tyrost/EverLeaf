"use client";

import { useRouter } from "next/navigation";
import MainButton from "../utils/MainButton";
import UserMainButtonProp from "../utils/UserMainButtonProp";
import { IoMdLeaf } from "react-icons/io";

const NavBar = () => {
    const router = useRouter();

    return (
        <>
            <div className="fixed top-0 w-full h-[100px] flex items-center justify-center">
                <div className="relative w-full h-full rounded-xl p-[2px] bg-gradient-to-r from-gray-400/50 via-gray-400/50 to-gray-200/50">
                    <div className="w-full h-full rounded-xl backdrop-blur-lg bg-white/20 flex items-center">
                        <div className="flex w-full px-5 gap-x-[2%]">
                            <a href="/">
                                <IoMdLeaf className="text-5xl text-gray-100" />
                            </a>
                            <MainButton
                                label="Home"
                                onClick={() => router.push("/")}
                            />
                            <MainButton
                                label="Our Mission"
                                onClick={() => router.push("/mission")}
                            />
                            <MainButton
                                label="About"
                                onClick={() => router.push("/about")}
                            />
                            <MainButton
                                label="Contact"
                                onClick={() => router.push("/contact")}
                            />
                        </div>
                        <div className="mr-5">
                            <UserMainButtonProp />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
