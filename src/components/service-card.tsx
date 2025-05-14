"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Palette, Globe, BarChart, Layers, PenTool, Zap } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  delay: number
}

export default function ServiceCard({ title, description, icon, delay }: ServiceCardProps) {
  const icons: Record<string, React.ReactNode> = {
    Palette: <Palette size={24} />,
    Globe: <Globe size={24} />,
    BarChart: <BarChart size={24} />,
    Layers: <Layers size={24} />,
    PenTool: <PenTool size={24} />,
    Zap: <Zap size={24} />,
  }

  return (
    <motion.div
      className="bg-white p-8 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-[#f8f5f2] rounded-full mb-6 text-[#333333]">
        {icons[icon]}
      </div>
      <h3 className="font-serif text-xl text-[#333333] mb-4">{title}</h3>
      <p className="font-sans text-[#555555]">{description}</p>
    </motion.div>
  )
}
