'use client'
import { useRouter } from "next/navigation";

const UserMainPanelProp = ({ isLogged }: { isLogged: boolean }) => {

    const router = useRouter();

    return (
    <>
            <div className="z-[20] w-[15vw] h-auto py-2 rounded-md border border-white bg-white text-black shadow-lg">
                <ul className="cursor-default">
                {isLogged ? (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100" onClick={() => router.push("/account")}>Account</li>
                        <li className="px-4 py-2 hover:bg-gray-100" onClick={() => router.push("/dashboard")}>Dashboard</li>

                        <div className="w-full h-[1px] border border-black/20 my-2"></div>

                        <li className="px-4 py-2 hover:bg-gray-100" onClick={() => router.push("/help")}>Help</li>
                        <li className="px-4 py-2 hover:bg-gray-100" onClick={() => router.push("/privacy-policy")}>Privacy & Policy</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Sign Out
                        </li>
                    </>
                    ) : (
                    <>
                        <li className="px-4 py-2 hover:bg-gray-100" onClick={() => router.push("/")}>Create Account</li>

                        <div className="w-full h-[1px] border border-black/20 my-2"></div>

                        <li className="px-4 py-2 hover:bg-gray-100" onClick={() => router.push("/help")}>Help</li>
                        <li className="px-4 py-2 hover:bg-gray-100" onClick={() => router.push("/privacy-policy")}>Privacy & Policy</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            Sign Out
                        </li>
                    </>
                    )}
                </ul>
            </div>

        </>
    );
};


export default UserMainPanelProp