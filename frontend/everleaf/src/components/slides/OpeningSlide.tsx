import Globe from "../misc/Globe";
import Particles from "../misc/Particles";

export default function OpeningSlide() {
    return (
        <>
            <div className="relative w-full h-[110vh] overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Particles
                        particleColors={["#ffffff", "#ffffff"]}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>
                    <div className="absolute top-1/2 -right-60 -translate-y-1/2 pt-[50px]">
                        <Globe />
                    </div>
                    <div className="flex items-center h-full pl-20 relative">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-9xl">Everleaf</h1>
                            <h5>Some short description</h5>
                            <button className="text-2xl mt-4 text-black font-bold bg-lime-500 rounded-3xl px-7 py-2">
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
        </>
    );
}
