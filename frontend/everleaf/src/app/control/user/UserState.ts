
import { useState, useEffect } from "react"
import type { User } from "../types/User";

export const useUser = () => {
    const [user, setUser] = useState<User>({
        userName: "",
        isLogged: false,
        lastLogged: "",
        userImagePath: ""
    })

    useEffect(() => {
        const stored = localStorage.getItem("app_user"); // mimic api fetch

        if (stored) {
            setUser(JSON.parse(stored));
        }
    }, []);

    return user
}