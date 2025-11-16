'use client';

import { useUser as useClerkUser, useClerk } from "@clerk/nextjs";
import type { AppUser } from "../types/User";

export const useUser = (): AppUser => {
    const { user, isLoaded, isSignedIn } = useClerkUser();
    const { signOut } = useClerk();

    return {
        user,
        isLoaded,
        isSignedIn,
        signOut
    };
};
