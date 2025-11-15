import Globe from "../misc/Globe";

export default function HomePage() {
    return (
        <>
            <div className="">
                <div className="relative h-screen overflow-hidden">
                    <div className="absolute translate-y-6 top-0 -right-32 -z-10 pointer-events-none">
                        <Globe />
                    </div>

                    <div className="flex items-center h-full pl-20">
                        <div>
                            <h1 className="text-6xl">Everleaf</h1>
                            <h5>Some short description</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
