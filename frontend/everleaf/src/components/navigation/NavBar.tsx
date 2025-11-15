'use client'

import { useRouter } from "next/navigation";
import MainButton from "../utils/MainButton";
import UserMainButtonProp from "../utils/UserMainButtonProp";
import EverLeafLogo from "../utils/EverLeafLogo";

const NavBar = () => {

    const router = useRouter()

    return (
        <>
        <div className="fixed absolute top-0 w-full h-[100px] backdrop-blur-sm bg-white/5 border-b border-white/30">
        <div className="flex flex-cols h-full items-center">
            <div className="flex w-full p-5 gap-x-[2%] justify-left">
                <EverLeafLogo theme="dark" size={[150, 150]}/>
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