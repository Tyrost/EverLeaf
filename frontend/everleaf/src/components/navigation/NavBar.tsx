"use client";

import { useRouter } from "next/navigation";
import MainButton from "../utils/MainButton";
import UserMainButtonProp from "../utils/UserMainButtonProp";
import EverLeafLogo from "../utils/EverLeafLogo";

interface NavBarProps {
    hasLinks?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
    hasLinks = false,
}) => {
    const router = useRouter();

    return (
        <>
            <header className="fixed top-0 w-full h-[100px] backdrop-blur-lg bg-white/10 z-10 border-b border-white/15">
                <div className="flex flex-cols h-full items-center">
                    <div className="flex w-full p-5 gap-x-[2%] justify-left overflow-y-hidden">
                        <EverLeafLogo size={[130, 130]} />
                        {
                            hasLinks &&
                            <>
                                <MainButton
                                    label="Our Mission"
                                    onClick={() => {
                                        router.push("/mission");
                                    }}
                                />
                                <MainButton
                                    label="About Us"
                                    onClick={() => {
                                        router.push("/");
                                    }}
                                />
                                <MainButton
                                    label="Contact"
                                    onClick={() => {
                                        router.push("/");
                                    }}
                                />
                            </>
                        }
                    </div>
                    <div>
                        <UserMainButtonProp />
                    </div>
                </div>
            </header>
        </>
    );
};

export default NavBar;
