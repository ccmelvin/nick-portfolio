"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface PortfolioItemProps {
  title: string
  category: string
  imageSrc: string
  delay: number
}

export default function PortfolioItem({ title, category, imageSrc, delay }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-[400px] overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={800}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <motion.div
        className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="text-center text-white p-6">
          <motion.span
            className="block font-sans text-sm uppercase tracking-wider mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {category}
          </motion.span>
          <motion.h3
            className="font-serif text-2xl mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.div
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
