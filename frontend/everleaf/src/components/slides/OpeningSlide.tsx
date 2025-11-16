import Globe from "../misc/Globe";
import Particles from "../misc/Particles";
import NameIntroduction from "../misc/NameIntroduction";

export default function OpeningSlide() {
    return (
        <>
            <div className="mt-4 relative w-full h-[120vh] overflow-hidden mb-40">
                <div className="absolute inset-0 -z-10 opacity-35">
                    <Particles
                        particleColors={["#ffffff", "#ffffff"]}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>
                <div className="absolute top-1/2 -right-60 -translate-y-1/2 pt-[50px]">
                    <Globe />
                </div>
                <div className="absolute top-1/2 -translate-y-48 left-20">
                    <div className="flex flex-col gap-1 max-w-[60%]">
                        <NameIntroduction/>
                        <div className="pl-1">
                        <h1 className="text-[2vw] text-left text-neutral-200">
                            The future of agriculture analytics.
                        </h1>
                        <p className="text-outfit text-gray-400 text-[1vw]/10 mt-[1vh] text-left">
                            Connecting growers with the knowledge they need to
                            farm smarter. Unlock the power of satellite-driven
                            analytics for a healthier, more resilient future.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
