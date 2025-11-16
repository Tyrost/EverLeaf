import NavBar from "@/components/navigation/NavBar";

const FAQ = () => {
    return (
        <>
            <NavBar hasLinks={false} />
            <div className="flex flex-col h-scren w-full pt-[145px] items-center justify-center bg-secondary">
                <h1 className="text-4xl font-bold mb-9">Frequently Asked Questions</h1>

                <div className="max-w-3xl min-h-screen text-left space-y-4 text-primary-text">

                    <h2 className="text-xl font-semibold mt-4">
                        What is EverLeaf?
                    </h2>
                    <p className="text-neutral-300">
                        EverLeaf is a platform designed to provide agricultural
                        insights by transforming satellite data into clear,
                        organized, and actionable information for farmers and
                        agricultural stakeholders.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        How does EverLeaf gather data?
                    </h2>
                    <p className="text-neutral-300">
                        We use publicly available satellite imagery alongside
                        proprietary analysis tools to generate real-time crop and
                        environmental insights. No hardware installation is required.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        Who can use EverLeaf?
                    </h2>
                    <p className="text-neutral-300">
                        EverLeaf is designed for farmers, agronomists, researchers,
                        and anyone who needs reliable, high-quality agricultural data.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        Do I need a subscription?
                    </h2>
                    <p className="text-neutral-300">
                        Some features are available for free, while advanced analytics,
                        historical data, and premium tools require a subscription plan.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        How accurate is the satellite data?
                    </h2>
                    <p className="text-neutral-300">
                        Satellite data resolution varies depending on the source, but
                        our platform enhances and processes this information to deliver
                        clear, reliable insights suitable for most agricultural decisions.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        Can I export or download my data?
                    </h2>
                    <p className="text-neutral-300">
                        Yes. Users can export charts, reports, and data summaries
                        directly from the platform for personal or professional use.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        How do I contact support?
                    </h2>
                    <p className="text-neutral-300">
                        If you need help with your account, subscriptions, or
                        platform features, please reach out to us at{" "}
                        <a href="mailto:support@everleaf.com" className="underline">
                            support@everleaf.com
                        </a>.
                    </p>

                </div>
            </div>
        </>
    );
};

export default FAQ;
