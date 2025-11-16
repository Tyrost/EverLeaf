'use client'

import { useRouter } from "next/navigation";
import MainButton from "../utils/MainButton";
import UserMainButtonProp from "../utils/UserMainButtonProp";
import EverLeafLogo from "../utils/EverLeafLogo";

const NavBar = () => {

    const router = useRouter()

    return (
        <>
        <div className="fixed absolute top-0 w-full h-[100px] backdrop-blur-lg bg-white/10 z-10 border-b border-white/15">
        <div className="flex flex-cols h-full items-center">
            <div className="flex w-full p-5 gap-x-[2%] justify-left">
                <EverLeafLogo size={[130, 130]}/>
                <MainButton label="Our Mission" onClick={() => {router.push("/mission")}}/>
                <MainButton label="About Us" onClick={() => {router.push("/")}}/>
                <MainButton label="Contact" onClick={() => {router.push("/")}}/>
            </div>
            <div>
                <UserMainButtonProp/>
            </div>
        </div>
        </div>
        </>
    );
}

export default NavBar;