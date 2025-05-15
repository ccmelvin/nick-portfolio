"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle form submission, e.g., send data to an API
    // For this demo, we'll just log the form state to the console
    // and show an alert
    console.log(formState)
    alert("Form submitted! (This is just a demo)")
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-8 shadow-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-sans text-sm text-[#555555]">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="border-[#e5e5e5] focus:border-[#333333] focus:ring-[#333333] rounded-none"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="font-sans text-sm text-[#555555]">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            className="border-[#e5e5e5] focus:border-[#333333] focus:ring-[#333333] rounded-none"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="font-sans text-sm text-[#555555]">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            className="border-[#e5e5e5] focus:border-[#333333] focus:ring-[#333333] rounded-none"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="font-sans text-sm text-[#555555]">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="min-h-[150px] border-[#e5e5e5] focus:border-[#333333] focus:ring-[#333333] rounded-none"
            required
          />
        </div>

        <Button type="submit" className="w-full bg-[#333333] hover:bg-[#555555] text-white rounded-none py-6 text-base">
          Send Message
        </Button>
      </div>
    </motion.form>
  )
}
