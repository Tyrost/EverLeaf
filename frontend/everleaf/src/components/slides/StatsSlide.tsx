import SpotlightCard from "../misc/SpotlightCard";
import { BiSolidLeaf } from "react-icons/bi";
import LivePopInIcon from "../misc/LivePopInIcon";

function hexToRgb(hex: string) {
    const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
    return `${r}, ${g}, ${b}`;
}
function hexToRgbString(
    hex: string,
    alpha: number,
): `rgba(${number}, ${number}, ${number}, ${number})` {
    const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha})` as const;
}
export const VeryImportantText: React.FC<React.PropsWithChildren> = (
    { children },
) => <h2 className="text-9xl font-bold drop-shadow-[0_2px_1.2px_rgba(0,0,0,0.8)]">{children}</h2>;
export const ImportantText: React.FC<React.PropsWithChildren> = (
    { children },
) => <h2 className="text-6xl font-bold rop-shadow-[0_2px_1.2px_rgba(0,0,0,0.8)]">{children}</h2>;
export const SemiImportantText: React.FC<React.PropsWithChildren> = (
    { children },
) => <h4 className="text-3xl font-bold rop-shadow-[0_2px_1.2px_rgba(0,0,0,0.8)]">{children}</h4>;
export const MinorText: React.FC<React.PropsWithChildren> = ({ children }) => (
    <h5 className="text-md text-gray-400 mt-2">{children}</h5>
);

interface CardProps extends React.PropsWithChildren {
    className?: string;
}

function StatCard({ children, className = "" }: CardProps) {
    return (
        <SpotlightCard
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
                <div className="grid w-350 h-500 p-6 grid-cols-6 grid-rows-5 gap-5">
                    <StatCard className="col-span-2 row-span-2 flex flex-col">
                        <VeryImportantText>6</VeryImportantText>
                        <MinorText>unique countries</MinorText>
                    </StatCard>
                    <StatCard className="col-span-1 row-span-1 flex flex-row gap-1">
                        <ImportantText>18</ImportantText>
                        <MinorText>individual locations</MinorText>
                    </StatCard>
                    <StatCard className="col-span-2 row-span-1 gap-2">
                        <ImportantText>1000</ImportantText>
                        <MinorText>unique farms</MinorText>
                    </StatCard>
                    <StatCard className="col-span-1 row-span-3 flex flex-col gap-2">
                        <MinorText>Supports:</MinorText>
                        <SemiImportantText>Wheat</SemiImportantText>
                        <SemiImportantText>Soybeans</SemiImportantText>
                        <SemiImportantText>Cotton</SemiImportantText>
                        <SemiImportantText>Rice</SemiImportantText>
                        <SemiImportantText>Maize</SemiImportantText>
                    </StatCard>
                    <StatCard className="col-span-3 row-span-3 flex flex-col">
                        <div className="flex w-full gap-2.5 flex-row items-center justify-baseline">
                            <ImportantText>Live</ImportantText>
                            <LivePopInIcon/>
                        </div>
                        <ImportantText>
                            Snapshorts Anywhere in the World
                        </ImportantText>
                    </StatCard>
                    <StatCard className="col-span-2 row-span-1 flex flex-col gap-1">
                        <ImportantText>2,016,463kg</ImportantText>
                        <MinorText>of Produced Yield Per Hectare</MinorText>
                    </StatCard>
                    <StatCard className="col-span-2 row-span-1 flex flex-row gap-4">
                        <h3 className="text-2xl font-bold">
                            Completely Sustainable Buisness Practices
                        </h3>
                        <BiSolidLeaf className="text-9xl" />
                    </StatCard>
                    <StatCard className="col-span-1 row-span-1 flex flex-col gap-1">
                        <ImportantText>100%</ImportantText>
                        <MinorText>Accurate Information</MinorText>
                    </StatCard>
                </div>
            </div>
        </>
    );
}
