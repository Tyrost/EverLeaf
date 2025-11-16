import { useRegisteredRedirect } from "@/control/user/RedirectHandle";

const RegisterMainSlide = () => {

    const isLogged = useRegisteredRedirect();

    if (isLogged) return null;

    return (
        <>
        
        </>
    );
}

export default RegisterMainSlide