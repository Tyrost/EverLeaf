'use client'
import { useRouter } from "next/navigation";
import { useUser } from "@/control/user/UserState";

const UserMainPanelProp = ({ isLogged }: { isLogged: boolean }) => {

    const router = useRouter();

    const { signOut } = useUser();

    return (
    <>
            <div className="z-20 w-[15vw] h-auto rounded-md border border-neutral-600 bg-neutral-800 text-neutral-200 shadow-lg
            ">
                <ul className="cursor-default justify-between flex flex-col ">
                {isLogged ? (
                    <>
                        <li className="px-4 py-2 hover:bg-neutral-600 cursor-pointer transition-colors" onClick={() => router.push("/account")}>Account</li>
                        <li className="px-4 py-2 hover:bg-neutral-700 cursor-pointer transition-colors" onClick={() => router.push("/dashboard?page=overview")}>Dashboard</li>

                        <div className="w-full h-px border border-white/20 my-2"></div>

                        <li className="px-4 py-2 hover:bg-neutral-700 cursor-pointer transition-colors" onClick={() => router.push("/faq")}>FAQ</li>
                        <li className="px-4 py-2 hover:bg-neutral-700 cursor-pointer transition-colors" onClick={() => router.push("/privacy-policy")}>Privacy & Policy</li>
                        <li className="px-4 py-4 rounded-b-md bg-neutral-850 hover:bg-neutral-900 cursor-pointer transition-colors" onClick={() => {signOut({ redirectUrl: "/"}); console.log("clicked")}}>
                            <strong>
                            Sign Out
                            </strong>
                        </li>
                    </>
                    ) : (
                    <>
                        <li className="px-4 py-4 rounded-t-md bg-neutral-850 hover:bg-neutral-900 cursor-pointer transition-colors" onClick={() => router.push("/auth/register")}>
                            <strong>
                            Create Account
                            </strong>
                            </li>

                        <div className="w-full h-[1px] border border-white/20"></div>

                        <li className="px-4 py-2 hover:bg-neutral-700 cursor-pointer transition-colors" onClick={() => router.push("/faq")}>FAQ</li>
                        <li className="px-4 py-2 hover:bg-neutral-700 cursor-pointer transition-colors" onClick={() => router.push("/privacy-policy")}>Privacy & Policy</li>
                    </>
                    )}
                </ul>
            </div>

        </>
    );
};


export default UserMainPanelProp



// import { useUser } from "@/control/user/UserState";