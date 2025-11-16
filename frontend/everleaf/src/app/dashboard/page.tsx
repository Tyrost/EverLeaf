'use client';

import { useNotLoggedRedirect } from "@/control/user/RedirectHandle";

export default function Dashboard() {

    const isLogged = useNotLoggedRedirect(); // returns isLogged status
    // handle if not logged in, we return since we dont want to display information
    if (!isLogged) return null; 
    
    return (
        <>
        </>
    );
}
