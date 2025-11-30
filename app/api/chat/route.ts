import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { messages } = await req.json()
        const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || ""

        // Simple keyword-based responses
        let response = ""

        if (lastMessage.includes("service") || lastMessage.includes("what do you do")) {
            response =
                "MICraft Home Solutions offers a wide range of services including custom remodeling, home repairs, decks & outdoor spaces, accessibility solutions, and finish carpentry. We're a licensed builder with 10+ years of experience. Would you like details about a specific service?"
        } else if (lastMessage.includes("price") || lastMessage.includes("cost") || lastMessage.includes("estimate")) {
            response =
                "We offer FREE phone estimates! Just send us pictures of your project and we'll provide an accurate estimate over the phone. Call us at (517) 862-5050 or email photos to Alex@micrafthomesolutions.com."
        } else if (lastMessage.includes("area") || lastMessage.includes("location") || lastMessage.includes("where")) {
            response =
                "We proudly serve Jackson County and Washtenaw County in Michigan, including cities like Jackson, Ann Arbor, Ypsilanti, Chelsea, and surrounding areas. Located outside our service area? Contact us anyway – we may be able to help!"
        } else if (lastMessage.includes("contact") || lastMessage.includes("call") || lastMessage.includes("email")) {
            response =
                "You can reach us at (517) 862-5050 or email Alex@micrafthomesolutions.com. We're available Monday-Saturday, 8am-6pm. Looking forward to hearing from you!"
        } else if (lastMessage.includes("license") || lastMessage.includes("insured")) {
            response =
                "Yes! Alex is a Licensed Builder with over 10 years of experience in the construction industry. We're fully licensed and insured for your peace of mind."
        } else if (lastMessage.includes("kitchen") || lastMessage.includes("bathroom") || lastMessage.includes("remodel")) {
            response =
                "We specialize in kitchen and bathroom remodeling! From complete renovations to updates, we handle everything – cabinets, countertops, flooring, plumbing, and more. Send us pictures for a free estimate at (517) 862-5050!"
        } else if (lastMessage.includes("deck") || lastMessage.includes("outdoor") || lastMessage.includes("patio")) {
            response =
                "We build beautiful custom decks and outdoor living spaces! Whether you want a new deck, patio, or outdoor entertainment area, we can help. Call (517) 862-5050 for a free estimate."
        } else if (
            lastMessage.includes("accessibility") ||
            lastMessage.includes("ramp") ||
            lastMessage.includes("wheelchair")
        ) {
            response =
                "We offer accessibility solutions including wheelchair ramps, grab bars, and accessible bathroom modifications. We're committed to making homes safer and more accessible. Contact us at (517) 862-5050 to discuss your needs."
        } else if (lastMessage.includes("hello") || lastMessage.includes("hi") || lastMessage.includes("hey")) {
            response =
                "Hello! Welcome to MICraft Home Solutions. I'm here to help answer questions about our home improvement services. What would you like to know?"
        } else if (lastMessage.includes("thank")) {
            response =
                "You're welcome! If you have any other questions or would like to schedule an estimate, feel free to call us at (517) 862-5050. We look forward to working with you!"
        } else {
            response =
                "Thanks for your question! For the most accurate information, I'd recommend calling us at (517) 862-5050 or emailing Alex@micrafthomesolutions.com. We're happy to discuss your specific needs and provide a free estimate!"
        }

        return NextResponse.json({ message: response })
    } catch (error) {
        console.error("Chat API error:", error)
        return NextResponse.json(
            { message: "I'm having trouble right now. Please call us at (517) 862-5050 for immediate assistance." },
            { status: 500 },
        )
    }
}
