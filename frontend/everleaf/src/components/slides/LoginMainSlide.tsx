import BackgroundBeams from "../misc/BackgroundBeams";
import EverLeafLogo from "../utils/EverLeafLogo";
import Image from "next/image";
import { SignIn } from "@clerk/nextjs"
import AnimatedPoints from "../misc/AnimatedPoints";

const LoginMainSlide = () => {

    const imagePath = "/misc/farmView.jpg"

    return (
        <>
        <div className="px-[25px] absolute z-2">
            <EverLeafLogo size={[150,150]}/>
        </div>

        <BackgroundBeams/>
        <div className="flex justify-between items-center w-full h-[100vh] backdrop-blur-lg bg-white/05">
        {/* First Section */}
            <div className="w-[40%] h-[70vh] p-8 flex flex-col justify-center">

                <h1 className="text-[3vw] font-outfit text-green-400 px-[30px]">
                    Welcome Back!
                </h1>   
                <div className="w-full mt-[50px]">
                    <AnimatedPoints/>
                </div>    

            </div>
        {/* Second Section */}

            <div className="w-[60%] h-[80%] border border-white/30 rounded-lg mx-[50px]">
                <div className="flex justify-between w-full h-full">
                    {/* Image */}
                    <div className="relative w-[50%] h-full overflow-hidden">
                        <div className="flex w-full justify-center bottom-0 absolute z-10 backdrop-blur-md bg-black/50 rounded-bl-lg">
                            <EverLeafLogo redirect={false} size={[150, 150]}/>
                        </div>
                        <Image 
                        src={imagePath}
                        alt="Login page image"
                        fill
                        className="object-cover rounded-lg"
                        />
                    </div>
                    {/* Form */}
                    <div className="flex justify-center items-center w-[50%] h-full">
                            <SignIn 
                            signUpUrl={"/auth/register"}
                            afterSignOutUrl={"/"}
                            />
                    </div>    
                </div>

            </div>
        </div>
        
        </>
    )
}

export default LoginMainSlide;

