'use client'

import { useRouter } from "next/navigation";
import MainButton from "../utils/MainButton";
import UserMainButtonProp from "../utils/UserMainButtonProp";
import { IoMdLeaf } from "react-icons/io";

const NavBar = () => {

    const router = useRouter()

    return (
        <>
        <div className="fixed top-0 w-full h-[100px] border border-white backdrop-blur-lg bg-white/10">
        <div className="flex flex-cols h-full items-center">
            <div className="flex w-full p-5 gap-x-[2%] justify-left">
                <a href="/"><IoMdLeaf className="text-5xl"/></a>
                <MainButton label="Home" onClick={() => {router.push("/")}}/>
                <MainButton label="Our Mission" onClick={() => {router.push("/mission")}}/>
                <MainButton label="Home" onClick={() => {router.push("/")}}/>
                <MainButton label="Home" onClick={() => {router.push("/")}}/>
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