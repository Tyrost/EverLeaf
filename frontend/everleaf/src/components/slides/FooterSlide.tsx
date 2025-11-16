

export default function FooterSlide() {
    const year = new Date().getFullYear();

    return (
        <>
        <footer className="w-full bg-linear-to-b from-background to-neutral-800">
            <h4 className="text-center text-neutral-600 p-4"> &copy; {year} EverLeaf </h4>
        </footer>
        </>
    )
}