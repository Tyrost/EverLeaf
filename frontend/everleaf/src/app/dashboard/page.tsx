'use client';

import { useNotLoggedRedirect } from "@/control/user/RedirectHandle";
import DashboardSlide from "@/components/slides/DashboardSlide";
import { useRouter } from "next/navigation";
import { useUser } from "@/control/user/UserState";
import { useEffect } from "react";

export default function Dashboard() {


    const { isSignedIn, user, isLoaded } = useUser()
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return 

        if (!isSignedIn) {
            router.push("/auth/login")
        }
    }, [isSignedIn, router]) 
    
    const isLogged = useNotLoggedRedirect(); // returns isLogged status
    // handle if not logged in, we return since we dont want to display information
    if (!isLogged) return null; 
    
    return (
        
    !(isLoaded && isSignedIn) ? (
        <div className='flex w-full min-h-screen justify-center items-center text-[3vw] text-black'>Redirecting...</div>
    ): (
        <DashboardSlide/>
    )
 
    );
}
