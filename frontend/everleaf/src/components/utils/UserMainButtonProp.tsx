import {useUser} from "@/app/control/user/UserState"
import Image from "next/image";

const UserMainButtonProp = () => {

    const { isLogged } = useUser()
    
    const nonLoggedUserImg = "/misc/!loggedUser.png"

    return (
        <>
        <div className="w-[50px] h-[50px] border border-white rounded-full mx-10">
        
        { !isLogged ? (
            <>
                <Image 
                src={nonLoggedUserImg}
                alt="user picture"
                width={1000}
                height={1000}
                className="w-full h-full rounded-full"
                />

            </>
        ) : (
            <>
            </>
        )
        }


        </div>
        </>
    );
}

export default UserMainButtonProp;