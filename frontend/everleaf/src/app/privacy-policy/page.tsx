import NavBar from "@/components/navigation/NavBar";

const PrivacyPolicy = () => {
    return (
        <>
            <NavBar hasLinks={false} />
            <div className="flex flex-col h-scren w-full pt-[145px] items-center justify-center bg-secondary">
                <h1 className="text-4xl font-bold mb-9">Privacy Policy</h1>

                <div className="max-w-3xl min-h-screen text-left space-y-4 text-primary-text">
                    <p className="text-neutral-300">
                        Your privacy is important to us. This Privacy Policy
                        explains how we collect, use, and protect your
                        information when you use our website or services.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        Information We Collect
                    </h2>
                    <p className="text-neutral-300">
                        We may collect personal information such as your name,
                        email address, or other information you provide
                        voluntarily when using our services.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        How We Use Your Information
                    </h2>
                    <p className="text-neutral-300">
                        We use the information we collect to improve our
                        services, provide support, and communicate important
                        updates. We do not sell or share your personal data with
                        third parties for marketing purposes.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Cookies</h2>
                    <p className="text-neutral-300">
                        Our website may use cookies to enhance user experience.
                        You can choose to disable cookies in your browser
                        settings, but some features may not function properly.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        Data Security
                    </h2>
                    <p className="text-neutral-300">
                        We implement appropriate technical and organizational
                        measures to protect your data against unauthorized
                        access, alteration, or disclosure.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">
                        Changes to This Policy
                    </h2>
                    <p className="text-neutral-300">
                        We may update this Privacy Policy from time to time. Any
                        changes will be posted on this page with an updated
                        effective date.
                    </p>

                    <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
                    <p className="text-neutral-300">
                        If you have any questions about this Privacy Policy,
                        please contact us at{" "}
                        <a href="mailto:info@example.com" className="underline">
                            legal@everleaf.com
                        </a>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default PrivacyPolicy;