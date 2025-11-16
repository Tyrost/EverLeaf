import SpotlightCard from "../misc/SpotlightCard";
import ShinyText from "../misc/ShinyText";
import CountryEmojisStat from "../misc/CountryEmojisStat";
import CountUpText from "../misc/CountUpText";
import PingLiveCard from "../misc/PingLiveCard";
import { BiSolidLeaf } from "react-icons/bi";

import AnimatedImage from "../misc/AnimatedImage";

export const VeryImportantText: React.FC<React.PropsWithChildren> = (
    { children },
) => (
    <h2 className="text-9xl font-bold drop-shadow-[0_2px_1.2px_rgba(0,0,0,0.8)]">
        {children}
    </h2>
);
export const ImportantText: React.FC<React.PropsWithChildren> = (
    { children },
) => (
    <h2 className="text-6xl font-bold rop-shadow-[0_2px_1.2px_rgba(0,0,0,0.8)]">
        {children}
    </h2>
);
export const SemiImportantText: React.FC<React.PropsWithChildren> = (
    { children },
) => (
    <h4 className="text-3xl font-bold rop-shadow-[0_2px_1.2px_rgba(0,0,0,0.8)]">
        {children}
    </h4>
);
export const MinorText: React.FC<React.PropsWithChildren> = ({ children }) => (
    <h5 className="text-md text-gray-400 mt-2">{children}</h5>
);

interface CardProps extends React.PropsWithChildren {
    className?: string;
    spotLightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

function StatCard({ children, className = '', spotLightColor = 'rgba(255, 255, 255, 0.25)' }: CardProps) {
    return (
        <SpotlightCard
            spotlightColor={spotLightColor}
            className={`${className} bg-neutral-900 rounded-3xl flex justify-center items-center`}
        >
            {children}
        </SpotlightCard>
    );
}

export default function StatsSlide() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen">
                <div className="grid w-350 p-6 grid-cols-6 grid-rows-5 gap-5">
                    <StatCard className="col-span-2 row-span-2 flex flex-col">
                        <CountryEmojisStat />
                    </StatCard>
                    <StatCard className="col-span-1 row-span-1 flex flex-row gap-1">
                        <AnimatedImage
                            className="opacity-25 absolute h-full object-cover"
                            width={640}
                            height={480}
                            staticImage="/misc/farmer.jpg"
                            animatedImage="/misc/farmer.gif"
                        />
                        <div className="z-20 pointer-events-none flex flex-col items-center">
                            <ImportantText>18</ImportantText>
                            <MinorText>individual locations</MinorText>
                        </div>
                    </StatCard>
                    <StatCard className="col-span-2 row-span-1 gap-2">
                        <ImportantText>1000</ImportantText>
                        <MinorText>unique farms</MinorText>
                    </StatCard>
                    <StatCard className="col-span-1 row-span-3 flex flex-col gap-2">
                        <AnimatedImage
                            className="opacity-25 absolute h-full object-cover"
                            width={640}
                            height={480}
                            staticImage="/misc/corn.jpg"
                            animatedImage="/misc/corn.gif"
                        />
                        <div className="z-10 pointer-events-none">
                            <MinorText>Supports:</MinorText>
                            <SemiImportantText>Wheat</SemiImportantText>
                            <SemiImportantText>Soybeans</SemiImportantText>
                            <SemiImportantText>Cotton</SemiImportantText>
                            <SemiImportantText>Rice</SemiImportantText>
                            <SemiImportantText>Maize</SemiImportantText>
                        </div>
                    </StatCard>
                    <StatCard spotLightColor={"rgba(227, 23, 23, 0.30)"} className="col-span-3 row-span-3 flex flex-col">
                        <PingLiveCard />
                    </StatCard>
                    <StatCard className="col-span-2 row-span-1 flex flex-col gap-1">
                        <ImportantText>
                            <CountUpText number={2016463} />kg
                        </ImportantText>
                        <MinorText>of Produced Yield Per Hectare</MinorText>
                    </StatCard>
                    <StatCard className="col-span-2 row-span-1 flex flex-row gap-4">
                        <AnimatedImage
                            className="opacity-25 absolute h-full object-cover"
                            width={640}
                            height={480}
                            staticImage="/misc/forest.jpg"
                            animatedImage="/misc/forest.gif"
                        />
                        <div className="pointer-events-none z-20 flex flex-row">
                            <h3 className="text-2xl font-bold">
                                Completely Sustainable Buisness Practices
                            </h3>
                            <BiSolidLeaf className="text-7xl text-brand" />
                        </div>
                    </StatCard>
                    <StatCard className="col-span-1 row-span-1 flex flex-col gap-1">
                        <ShinyText />
                        <MinorText>Accurate Information</MinorText>
                    </StatCard>
                </div>
            </div>
        </>
    );
}
