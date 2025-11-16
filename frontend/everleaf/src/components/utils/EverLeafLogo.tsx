'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";


const EverLeafLogo = ({redirect = true, theme = "dark", size = [100, 100]} : { redirect?: boolean, theme?: "dark"|"light", size?: [number, number]}) => {
    const router = useRouter();
    const path = theme === "dark"? "/everleaf_logo/WhiteLogo.png" : "/everleaf_logo/BlackLogo.png"

    const generateImage = () => {
        return <Image
        src={path}  
        alt="EverLeaf"
        width={size[0]}
        height={size[1]}
        className="border object-contain hover:scale-105 transition-transform ease"
        />
    }


    return (
        <>

        { redirect ? (
            <div onClick={() => {router.push("/")}} className="cursor-pointer">
                {generateImage()}
            </div>
        ) : (
            <div className="cursor-default">
                {generateImage()}
            </div>
        )}

        </>
    );
}

export default EverLeafLogo