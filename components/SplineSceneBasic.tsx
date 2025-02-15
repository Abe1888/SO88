"use client"

import { useState, useCallback } from "react"
import { SplineScene } from "@/components/ui/spline"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { motion, AnimatePresence } from "framer-motion"

export function SplineSceneBasic() {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }, [])

  return (
    <Card 
      className="w-[1000px] h-[500px] relative overflow-hidden bg-transparent border-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Soft glowing spots */}
      <AnimatePresence>
        {isHovered && (
          <>
            {/* Large background glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(var(--primary), 0.15), transparent 70%)`,
              }}
            />
            
            {/* Soft following spots */}
            <motion.div
              className="absolute w-64 h-64 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.6,
                x: mousePosition.x + "%",
                y: mousePosition.y + "%",
              }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                mass: 0.8,
              }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
                background: "radial-gradient(circle, rgba(var(--primary), 0.1) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            
            <motion.div
              className="absolute w-48 h-48 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.4,
                x: mousePosition.x + "%",
                y: mousePosition.y + "%",
              }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 25,
                mass: 0.9,
                delay: 0.1,
              }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
                background: "radial-gradient(circle, rgba(var(--secondary), 0.1) 0%, transparent 70%)",
                filter: "blur(15px)",
              }}
            />
            
            <motion.div
              className="absolute w-32 h-32 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.3,
                x: mousePosition.x + "%",
                y: mousePosition.y + "%",
              }}
              exit={{ opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 30,
                mass: 1,
                delay: 0.2,
              }}
              style={{
                translateX: "-50%",
                translateY: "-50%",
                background: "radial-gradient(circle, rgba(var(--accent), 0.1) 0%, transparent 70%)",
                filter: "blur(10px)",
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Spline Scene with enhanced zoom effect */}
      <motion.div 
        className="w-full h-full"
        animate={{
          scale: isHovered ? 1.15 : 1,
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? -5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 1.2,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          className="w-full h-full"
          animate={{
            filter: isHovered ? "brightness(1.1) contrast(1.1)" : "brightness(1) contrast(1)",
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </motion.div>
    </Card>
  )
}