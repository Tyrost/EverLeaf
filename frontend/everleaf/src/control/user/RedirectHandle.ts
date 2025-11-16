"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocalUser } from "./UserState";

/* Redirect user to login if not logged in */
export function useNotLoggedRedirect() {
  const { isLogged } = useLocalUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/auth/login");
    }
  }, [isLogged]);

  return isLogged; // component can hide UI until state known
}

/* Redirect logged-in users away from signup/login pages */
export function useRegisteredRedirect() {
  const { isLogged } = useLocalUser();
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      router.push("/dashboard");
    }
  }, [isLogged]);

  return isLogged;
}
