import SpotlightCard from "../misc/SpotlightCard";
import LetterGlitch from "../misc/LetterGlitch";

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

export default function StatsSlide() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen w-screen">
                <h2>impressive #</h2>
            </div>
        </>
    );
}
