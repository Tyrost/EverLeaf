import Globe from "../misc/Globe";
import NavBar from "../navigation/NavBar";

export default function HomeSlide() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <NavBar />
                <div className="mt-[100px] overflow-hidden relative flex flex-1">
                    <div className="fixed translate-y-6 top-0 -right-32 -z-10 pointer-events-none">
                        <Globe />
                    </div>
                    <div className="flex items-center pl-20">
                        <div className="bg-amber-800 p-2.5">
                            <h1 className="text-6xl">Everleaf</h1>
                            <h5>Some short description</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>LM</h2>
                </div>
            </div>
        </>
    );
}
