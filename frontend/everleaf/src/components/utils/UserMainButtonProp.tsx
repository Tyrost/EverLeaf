'use client';

import {useUser} from "@/app/control/user/UserState"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import UserMainPanelProp from "./UserMainButtonPanelProp";

const UserMainButtonProp = () => {
    const [open, setOpen] = useState(false);
    const { isLogged, userImagePath } = useUser()
    const ref = useRef<HTMLDivElement>(null);

    const photoPath = !isLogged ? "/misc/!loggedUser.png" : userImagePath

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

        <div className="flex items-center gap-4 relative z-10">
        {/* Avatar */}
        <div
            className="w-[50px] h-[50px] border border-white rounded-full mx-10 cursor-pointer"
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
                <UserMainPanelProp isLogged={isLogged} />
            </div>
        )}
        </div>
    );
}

export default UserMainButtonProp;