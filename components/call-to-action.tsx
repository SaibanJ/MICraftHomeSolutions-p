"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Upload, X, Facebook } from "lucide-react"
import { useState, useRef, type FormEvent, type DragEvent, type ChangeEvent } from "react"
import Image from "next/image"

export function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"))
    setFiles((prev) => [...prev, ...droppedFiles])
  }

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files).filter((file) => file.type.startsWith("image/"))
      setFiles((prev) => [...prev, ...selectedFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const body = new FormData()
    body.append("name", formData.name)
    body.append("phone", formData.phone)
    body.append("email", formData.email)
    body.append("message", formData.message)
    files.forEach((file) => {
      body.append("files", file)
    })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body,
      })

      if (response.ok) {
        alert("Thank you! We'll review your project details and get back to you soon.")
        setFormData({ name: "", phone: "", email: "", message: "" })
        setFiles([])
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <section id="contact" className="w-full py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                {"Ready to Get Started?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Contact us today for your free estimate. For many projects, we can provide an accurate quote over the phone with photos. Let us bring professional craftsmanship to your next project."
                }
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">(517) 862-5050</span>
                    <span className="text-xs text-muted-foreground">Call or text anytime</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">Alex@micrafthomesolutions.com</span>
                    <span className="text-xs text-muted-foreground">Email us with photos of your project</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">Serving Jackson & Washtenaw Counties</span>
                    <span className="text-xs text-muted-foreground">And surrounding areas</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <a
                        href="https://www.facebook.com/profile.php?id=61584081754653"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Message us on Facebook
                    </a>
                    <span className="text-xs text-muted-foreground">Quick response via messenger</span>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-background"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-background"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="bg-background"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Project Details
                    </label>
                    <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        className="min-h-32 bg-background"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">Project Photos (Optional)</label>
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`
                      relative flex flex-col items-center justify-center gap-2 
                      rounded-lg border-2 border-dashed p-6 cursor-pointer
                      transition-colors
                      ${
                            isDragging
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50 hover:bg-accent/5"
                        }
                    `}
                    >
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground">Drop photos here or click to upload</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB each</p>
                      </div>
                      <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                      />
                    </div>

                    {files.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          {files.map((file, index) => (
                              <div key={index} className="relative group">
                                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                                  <Image
                                      src={URL.createObjectURL(file) || "/placeholder.svg"}
                                      alt={`Preview ${index + 1}`}
                                      width={300}
                                      height={300}
                                      className="w-full h-full object-cover"
                                  />
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      removeFile(index)
                                    }}
                                    className="absolute top-1 right-1 p-1 rounded-full bg-destructive text-destructive-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                                <p className="text-xs text-muted-foreground mt-1 truncate">{file.name}</p>
                              </div>
                          ))}
                        </div>
                    )}
                  </div>

                  <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isSubmitting ? "Sending..." : "Get Free Estimate"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  )
}
