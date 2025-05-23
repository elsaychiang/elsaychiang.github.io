"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Reset form status when user starts typing again
    if (formStatus !== "idle") {
      setFormStatus("idle")
    }
  }

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateForm = (): boolean => {
    // Basic validation
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your name.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      toast({
        title: "Valid email is required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.subject.trim()) {
      toast({
        title: "Subject is required",
        description: "Please enter a subject for your message.",
        variant: "destructive",
      })
      return false
    }

    if (!formData.message.trim()) {
      toast({
        title: "Message is required",
        description: "Please enter your message.",
        variant: "destructive",
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // In a real implementation, you would send the form data to a backend service
      // For example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // if (!response.ok) throw new Error('Failed to send message');

      // Simulate a successful submission for now
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setFormStatus("success")
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      })
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      {formStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-center text-green-800 mb-6">
          <CheckCircle className="h-5 w-5 mr-2" />
          <p>Your message has been sent successfully! I'll get back to you soon.</p>
        </div>
      )}

      {formStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center text-red-800 mb-6">
          <AlertCircle className="h-5 w-5 mr-2" />
          <p>There was an error sending your message. Please try again or contact me directly via email.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-morandi-blue-dark mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-morandi-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-morandi-blue"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-morandi-blue-dark mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-morandi-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-morandi-blue"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-morandi-blue-dark mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-morandi-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-morandi-blue"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-morandi-blue-dark mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border border-morandi-neutral rounded-md focus:outline-none focus:ring-1 focus:ring-morandi-blue"
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-morandi-blue text-white px-6 py-3 rounded-md hover:bg-morandi-blue-dark transition-colors duration-300 disabled:opacity-70 font-montserrat flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
