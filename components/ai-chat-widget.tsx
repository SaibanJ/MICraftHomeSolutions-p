"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Send, Phone, Mail } from "lucide-react"

interface Message {
    id: string
    role: "user" | "assistant"
    content: string
}

export function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input.trim(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map((m) => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            })

            if (!response.ok) throw new Error("Failed to get response")

            const data = await response.json()

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: data.message,
            }

            setMessages((prev) => [...prev, assistantMessage])
        } catch (error) {
            console.error("Chat error:", error)
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content:
                    "I'm having trouble responding right now. Please call us at (517) 862-5050 or email Alex@micrafthomesolutions.com for immediate assistance.",
            }
            setMessages((prev) => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {/* Chat Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[60] h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300"
                aria-label="Open chat"
            >
                {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
            </Button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-[60] w-[380px] max-w-[calc(100vw-3rem)] h-[500px] bg-white rounded-lg shadow-2xl flex flex-col animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-primary text-white p-4 rounded-t-lg">
                        <h3 className="font-semibold text-lg">Chat with MICraft</h3>
                        <p className="text-sm text-white/90">Ask us anything about our services!</p>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.length === 0 && (
                            <div className="text-center text-muted-foreground py-8">
                                <MessageCircle className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                                <p className="text-sm">Hi! I'm here to help answer your questions about MICraft Home Solutions.</p>
                                <p className="text-xs mt-2">Ask me about our services, pricing, or service areas!</p>
                            </div>
                        )}

                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                                        message.role === "user" ? "bg-primary text-white" : "bg-muted text-foreground"
                                    }`}
                                >
                                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-muted rounded-lg px-4 py-2">
                                    <div className="flex space-x-2">
                                        <div
                                            className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                                            style={{ animationDelay: "0ms" }}
                                        />
                                        <div
                                            className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                                            style={{ animationDelay: "150ms" }}
                                        />
                                        <div
                                            className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                                            style={{ animationDelay: "300ms" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Contact Buttons */}
                    <div className="px-4 py-2 border-t flex gap-2">
                        <a
                            href="tel:+15178625050"
                            className="flex-1 flex items-center justify-center gap-2 text-xs bg-primary/10 text-primary hover:bg-primary/20 rounded py-2 transition-colors"
                        >
                            <Phone className="h-3 w-3" />
                            Call Us
                        </a>
                        <a
                            href="mailto:Alex@micrafthomesolutions.com"
                            className="flex-1 flex items-center justify-center gap-2 text-xs bg-primary/10 text-primary hover:bg-primary/20 rounded py-2 transition-colors"
                        >
                            <Mail className="h-3 w-3" />
                            Email
                        </a>
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} className="p-4 border-t">
                        <div className="flex gap-2">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                disabled={isLoading}
                            />
                            <Button
                                type="submit"
                                size="icon"
                                disabled={isLoading || !input.trim()}
                                className="bg-primary hover:bg-primary/90"
                            >
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}
