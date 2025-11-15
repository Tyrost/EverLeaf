import Globe from "../misc/Globe";

export default function HomePage() {
    return (
        <>
            <div>
                <div className="relative h-screen overflow-hidden">
                    <div className="absolute top-1/2 -right-60 -translate-y-1/2 pt-[50px]">
                        <Globe />
                    </div>

                    <div className="flex items-center h-full pl-20">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-9xl">Everleaf</h1>
                            <h5>Some short description</h5>
                            <button className="text-2xl mt-4 text-black font-bold bg-lime-500 rounded-3xl px-7 py-2">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
