'use client';

import { useState } from "react";
import Image from "next/image";


interface AnimatedImageProps {
    className?: string;
    staticImage: string;
    animatedImage: string;
    width: number;
    height: number;
    alt?: string;
}


const AnimatedImage: React.FC<AnimatedImageProps> = ({
  className = '',
  staticImage,
  animatedImage,
  width,
  height,
  alt="An animated image"
}) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    return (
        <>
        <Image unoptimized preload width={width} height={height} alt={alt} src={isPlaying ? animatedImage : staticImage } className={`${className}`} onMouseEnter={() => setIsPlaying(true)} onMouseLeave={() => setIsPlaying(false)}/>
        </>
    )
}


export default AnimatedImage;