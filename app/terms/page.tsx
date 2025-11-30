import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | MICraft Home Solutions LLC",
    description:
        "Terms of service for MICraft Home Solutions LLC. Read our terms and conditions for using our home improvement services.",
    robots: "index, follow",
}

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
                <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
                <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

                <div className="space-y-8 text-foreground">
                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Agreement to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These Terms of Service ("Terms") constitute a legally binding agreement between you and MICraft Home
                            Solutions LLC ("Company," "we," "our," or "us") concerning your access to and use of our website and
                            services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you
                            do not agree to these Terms, please do not use our website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Services Offered</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            MICraft Home Solutions LLC is a licensed builder providing home improvement, repair, and maintenance
                            services including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                            <li>Finish carpentry and framing</li>
                            <li>Drywall installation and repair</li>
                            <li>Painting (interior and exterior)</li>
                            <li>Siding, windows, and doors installation</li>
                            <li>Fascia and soffit work</li>
                            <li>Flooring installation</li>
                            <li>Backsplash and tile work</li>
                            <li>Cabinetry installation</li>
                            <li>Minor plumbing and electrical work</li>
                            <li>Appliance installation</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Services are provided in Jackson County, Washtenaw County, and surrounding areas in Michigan.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Estimates and Quotes</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We provide free estimates for our services. Estimates may be provided over the phone with photos when
                            applicable, or through an on-site visit for larger projects. All estimates are approximate and may be
                            subject to change based on actual conditions found during the project. Final pricing will be confirmed
                            before work begins. Once work has commenced, any changes to the scope of work may result in additional
                            charges.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Payment Terms</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Payment terms will be outlined in your service agreement or invoice. Generally:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                            <li>For smaller projects, payment is due upon completion of work</li>
                            <li>For larger projects, a deposit may be required before work begins</li>
                            <li>Progress payments may be arranged for extensive projects</li>
                            <li>Final payment is due upon project completion and your satisfaction</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            We accept cash, check, and electronic payments. Late payments may be subject to interest charges as
                            permitted by Michigan law.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Scheduling and Cancellations</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We strive to respond to all inquiries promptly and schedule work at your convenience. If you need to
                            reschedule or cancel an appointment, please provide at least 24 hours' notice. Cancellations with less
                            than 24 hours' notice may result in a cancellation fee. We reserve the right to reschedule appointments
                            due to weather, emergencies, or other unforeseen circumstances.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Warranty and Guarantee</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We stand behind the quality of our work. Our warranty includes:
                        </p>
                        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                            <li>Workmanship warranty for a period specified in your service agreement</li>
                            <li>Manufacturer warranties apply to materials and products installed</li>
                            <li>We will address any defects in workmanship at no additional charge during the warranty period</li>
                        </ul>
                        <p className="text-muted-foreground leading-relaxed mt-4">
                            Our warranty does not cover damage caused by normal wear and tear, misuse, abuse, accidents, or
                            modifications made by others after our work is completed.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Liability and Insurance</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            MICraft Home Solutions LLC is a licensed and insured contractor. We carry general liability insurance and
                            workers' compensation insurance. Our liability is limited to the amount paid for services. We are not
                            responsible for pre-existing conditions, hidden defects, or damage to property that occurs due to
                            circumstances beyond our control. We take reasonable precautions to protect your property during work, but
                            we recommend removing valuable or fragile items from work areas.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Customer Responsibilities</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">As a customer, you agree to:</p>
                        <ul className="list-disc pl-6 text-muted-foreground leading-relaxed space-y-2">
                            <li>Provide accurate information about the project and property conditions</li>
                            <li>Ensure access to the work area and necessary utilities (water, electricity)</li>
                            <li>Remove or secure personal belongings and valuables from the work area</li>
                            <li>Obtain any necessary permits or approvals required for the work</li>
                            <li>Inform us of any known hazards (asbestos, lead paint, structural issues)</li>
                            <li>Make timely payments according to the agreed terms</li>
                            <li>Communicate any concerns or issues promptly</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Changes to Scope of Work</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Any changes to the original scope of work must be agreed upon in writing by both parties. Additional work
                            or materials will result in additional charges. We will provide you with a revised estimate before
                            proceeding with any changes. You have the right to approve or decline any proposed changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Permits and Compliance</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We will advise you if permits are required for your project. Unless otherwise agreed, obtaining permits is
                            the customer's responsibility. All work will be performed in compliance with applicable local, state, and
                            federal regulations. We reserve the right to refuse work that does not comply with building codes or
                            safety standards.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Dispute Resolution</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We are committed to customer satisfaction. If you have any concerns or disputes, please contact us
                            immediately so we can work to resolve the issue. If we cannot resolve the dispute informally, both parties
                            agree to attempt mediation before pursuing legal action. Any legal disputes will be governed by the laws
                            of the State of Michigan and resolved in the appropriate courts of Jackson or Washtenaw County.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Use of Project Photos</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may photograph completed projects for marketing purposes (website, social media, promotional
                            materials). By engaging our services, you grant us permission to use photos of the completed work unless
                            you specifically request otherwise in writing. We respect your privacy and will not include identifying
                            information without your explicit consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Intellectual Property</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            All content on our website, including text, graphics, logos, and images, is the property of MICraft Home
                            Solutions LLC and protected by copyright and trademark laws. You may not reproduce, distribute, or use any
                            content without our written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Limitation of Liability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To the maximum extent permitted by law, MICraft Home Solutions LLC shall not be liable for any indirect,
                            incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                            incurred directly or indirectly. Our total liability for any claim arising from our services shall not
                            exceed the amount paid for those services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Indemnification</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            You agree to indemnify and hold harmless MICraft Home Solutions LLC from any claims, damages, losses, or
                            expenses arising from your breach of these Terms, your violation of any law, or your violation of any
                            rights of a third party.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Severability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or
                            eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and
                            effect and enforceable.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Changes to Terms</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                            posting the new Terms on our website with an updated "Last updated" date. Your continued use of our
                            services after any changes constitutes acceptance of the new Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-sans text-2xl font-semibold mb-4">Contact Information</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            If you have questions about these Terms of Service, please contact us:
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
