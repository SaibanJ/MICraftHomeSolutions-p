import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | MICraft Home Solutions LLC",
    description:
        "Privacy policy for MICraft Home Solutions LLC. Learn how we collect, use, and protect your personal information.",
    robots: "index, follow",
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
                <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

                <div className="space-y-8 text-foreground">
                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Introduction</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            MICraft Home Solutions LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                            Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                            or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this
                            privacy policy, please do not access the site or use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Information We Collect</h2>
                        <h3 className="font-sans text-xl font-semibold mb-3 mt-4">Personal Information</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                            <li>Request a free estimate or quote for services</li>
                            <li>Contact us via email, phone, or contact form</li>
                            <li>Schedule a service appointment</li>
                            <li>Subscribe to our newsletter or marketing communications</li>
                            <li>Upload photos of your project through our website</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Personal information may include: name, email address, phone number, mailing address, project details, and
                            photos you provide.
                        </p>

                        <h3 className="font-sans text-xl font-semibold mb-3 mt-4">Automatically Collected Information</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            When you visit our website, we may automatically collect certain information about your device, including
                            information about your web browser, IP address, time zone, and some of the cookies installed on your
                            device. We may also collect information about how you interact with our website, such as pages viewed and
                            links clicked.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">How We Use Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We use the information we collect or receive to:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                            <li>Provide, maintain, and improve our services</li>
                            <li>Process and respond to your service requests and inquiries</li>
                            <li>Send you estimates, quotes, and service confirmations</li>
                            <li>Communicate with you about your projects and appointments</li>
                            <li>Send you marketing communications (with your consent)</li>
                            <li>Improve our website and customer experience</li>
                            <li>Comply with legal obligations and resolve disputes</li>
                            <li>Prevent fraudulent activity and ensure the security of our services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We may share your information in the following situations:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                            <li>
                                <strong>Service Providers:</strong> We may share your information with third-party service providers who
                                perform services on our behalf, such as email delivery, payment processing, or data analysis.
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in
                                response to valid requests by public authorities.
                            </li>
                            <li>
                                <strong>Business Transfers:</strong> We may share or transfer your information in connection with a
                                merger, sale, or acquisition of all or a portion of our business.
                            </li>
                            <li>
                                <strong>With Your Consent:</strong> We may disclose your information for any other purpose with your
                                consent.
                            </li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            We do not sell your personal information to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Data Security</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We use administrative, technical, and physical security measures to protect your personal information.
                            However, no security system is impenetrable, and we cannot guarantee the absolute security of our systems
                            or your information. We use industry-standard encryption and secure protocols to protect data transmitted
                            over the internet.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Your Privacy Rights</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate or incomplete information</li>
                            <li>Request deletion of your personal information</li>
                            <li>Opt-out of marketing communications at any time</li>
                            <li>Object to processing of your personal information</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            To exercise these rights, please contact us at Alex@micrafthomesolutions.com or (517) 862-5050.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may use cookies and similar tracking technologies to track activity on our website and store certain
                            information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                            sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Third-Party Links</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our website may contain links to third-party websites (such as social media platforms). We are not
                            responsible for the privacy practices of these third-party sites. We encourage you to review their privacy
                            policies before providing any personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Children's Privacy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
                            information from children. If you are a parent or guardian and believe we have collected information from
                            a child, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                            Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
                            Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on
                            this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            If you have questions or comments about this Privacy Policy, please contact us:
                        </p>
                        <div className="text-muted-foreground leading-relaxed space-y-2">
                            <p>
                                <strong>MICraft Home Solutions LLC</strong>
                            </p>
                            <p>
                                Email:{" "}
                                <a href="mailto:Alex@micrafthomesolutions.com" className="text-primary hover:underline">
                                    Alex@micrafthomesolutions.com
                                </a>
                            </p>
                            <p>
                                Phone:{" "}
                                <a href="tel:+15178625050" className="text-primary hover:underline">
                                    (517) 862-5050
                                </a>
                            </p>
                            <p>Serving Jackson and Washtenaw Counties, Michigan</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
