"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  delay: number
}

export default function TestimonialCard({ quote, author, company, delay }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white p-8 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true }}
    >
      <div className="text-[#333333] mb-6">
        <Quote size={24} />
      </div>
      <p className="font-sans text-[#555555] italic mb-6">{quote}</p>
      <div>
        <h4 className="font-serif text-lg text-[#333333]">{author}</h4>
        <p className="font-sans text-sm text-[#888888]">{company}</p>
      </div>
    </motion.div>
  )
}
