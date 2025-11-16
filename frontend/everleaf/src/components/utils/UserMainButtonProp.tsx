'use client';

import { useUser } from "@/control/user/UserState"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import UserMainPanelProp from "./UserMainButtonPanelProp";

const UserMainButtonProp = () => {
    const [open, setOpen] = useState(false);
    const { isSignedIn, user } = useUser()
    const ref = useRef<HTMLDivElement>(null);

    const userImagePath = user?.imageUrl
    const userFirstName = user?.firstName;

    const photoPath = !isSignedIn ? "/misc/!loggedUser.png" : userImagePath || "/misc/!loggedUser.png"

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        if (open) document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    return (

        <div className="flex flex-row items-center gap-4 relative z-10 pr-10">
        {/* Avatar */}
        <h2 className="align-middle font-outfit text-xl font-medium">{userFirstName}</h2>
        <div
            className="w-[50px] h-[50px] border border-white/25 hover:border-white/40 transition-colors rounded-full cursor-pointer"
            onClick={() => setOpen(!open)}
        >
            
            <Image
            src={photoPath}
            alt="user picture"
            width={1000}
            height={1000}
            className="w-full h-full rounded-full"
            />
        </div>

        {/* Panel */}
        {open && (
            <div className="absolute right-0 pr-[20%] top-[55px]">
                <UserMainPanelProp isLogged={isSignedIn || false} />
            </div>
        )}
        </div>
    );
}

export default UserMainButtonProp;