"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "./UserState";

/* Redirect user to login if not logged in */
export function useNotLoggedRedirect() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/auth/login");
    }
  }, [isSignedIn]);

  return isSignedIn; // component can hide UI until state known
}

/* Redirect logged-in users away from signup/login pages */
export function useRegisteredRedirect() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard?page=overview");
    }
  }, [isSignedIn]);

  return isSignedIn;
}
