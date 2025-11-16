
import type { UserResource, SignOut } from "@clerk/types";

export interface AppUser {
    user: UserResource | null | undefined;
    isSignedIn: boolean | undefined;
    isLoaded: boolean | undefined;
    signOut: SignOut
}