"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type React from "react"

interface QuestionnaireTabContentProps {
  children: React.ReactNode
  title: string
  description: string
}

export function QuestionnaireTabContent({ children, title, description }: QuestionnaireTabContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        <h2 className="text-2xl font-semibold tracking-tight text-gray-200">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </motion.div>
      <Card className="form-card overflow-hidden border-2 border-gray-700 shadow-xl">
        <div className="absolute inset-0 animated-gradient opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative p-6 space-y-6"
        >
          {children}
        </motion.div>
      </Card>
    </motion.div>
  )
}

