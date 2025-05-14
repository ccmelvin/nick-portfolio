"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  subtitle: string
  title: string
  centered?: boolean
}

export default function SectionHeading({ subtitle, title, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <motion.span
        className="inline-block font-sans text-sm uppercase tracking-wider text-[#888888] mb-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        className="font-serif text-3xl md:text-4xl font-light text-[#333333]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
    </div>
  )
}
