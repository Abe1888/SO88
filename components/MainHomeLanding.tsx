"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useState, useRef } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle2,
  TrendingUp,
  Play,
  MessageSquare,
  Phone,
} from "lucide-react"
import { quickFeatures, detailedFeatures } from "./features-data"


import { ThemeToggle } from "./ThemeToggle"
import { WhyChooseUs } from "./WhyChooseUs"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { SplineSceneBasic } from "./SplineSceneBasic"
import { SocialMediaPosts } from "./SocialMediaPosts"



export function MainHomeLanding() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
  }


  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-purple-500/10 dark:from-gray-900 dark:via-primary/10 dark:to-purple-800/20">
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left" style={{ scaleX }} />
        <ThemeToggle />


        <section 
          ref={heroRef}
          className="relative min-h-[calc(100vh-4rem)] py-16 sm:py-24 lg:py-32 overflow-hidden"
          onMouseMove={handleMouseMove}
        >
            <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(29,78,216,0.4), transparent 20%)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            />




        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
            className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 dark:bg-gray-900/50 shadow-lg"
        >
          <div className="flex -space-x-1 sm:-space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center animate-pulse">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-yellow-500/20 border-2 border-yellow-500 flex items-center justify-center animate-pulse">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center animate-pulse">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
            </div>
          </div>
            <span className="text-xs sm:text-sm font-medium">Trusted</span>
        </motion.div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="grid gap-24 lg:grid-cols-2 lg:gap-32 items-start">
          <div className="space-y-16">
            <motion.div initial="initial" animate="animate" className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center rounded-lg bg-primary/10 dark:bg-primary/20 px-3 py-1 text-sm font-medium"
              >
                <Sparkles className="mr-2 h-4 w-4 text-primary dark:text-primary-foreground" />
                <span className="text-primary dark:text-primary-foreground">#1 Social Media Management Platform</span>
              </motion.div>

                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-shimmer"
                >
                <span className="inline-block bg-clip-text text-transparent bg-[linear-gradient(110deg,#1e40af,45%,#3b82f6,55%,#1e40af)] bg-[length:200%_100%]">
                  Transform Your Social Media
                </span>{" "}
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%] animate-shimmer">
                  into a Growth Engine
                </span>
                </motion.h1>


              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[1000px] text-base sm:text-lg text-muted-foreground dark:text-gray-300 sm:text-xl"
              >
                Join industry leaders who've achieved remarkable growth through our AI-powered social media management
                platform. Start your success story today and watch your online presence soar.
              </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start mt-8"
                >
                  <RainbowButton size="lg" asChild>
                    <Link href="/form" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Fill Out Form
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  </RainbowButton>
                  <RainbowButton variant="outline" size="lg" className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Watch Demo
                  </RainbowButton>
                </motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-2 text-lg text-primary"
              >
                <Phone className="h-5 w-5" />
                <span>+251-9098-24440</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6 mt-12"
                >
                <div className="flex flex-wrap gap-4">
                  {["30-Day Free Trial", "No Credit Card Required", "Cancel Anytime", "24/7 Support"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/5 dark:bg-primary/10 border border-primary/20 hover:bg-primary/10 transition-colors"
                    >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary dark:text-primary-foreground">{item}</span>
                  </div>
                  ))}
                </div>
                </motion.div>
                </motion.div>

                <motion.div className="space-y-12">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Everything You Need to Succeed
                  </h2>
                    <div className="grid grid-cols-1 gap-8">
                      {quickFeatures.map((feature: typeof quickFeatures[0], index: number) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex items-start gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg overflow-hidden"
                      >
                        {/* Rainbow border on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 animate-rainbow bg-[length:200%] bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]" />
                        <div className="absolute inset-[2px] rounded-xl bg-background/95 dark:bg-background/95" />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-start gap-6">
                        <div className={`p-3.5 rounded-xl ${feature.color} shadow-lg transition-all duration-300 group-hover:scale-110`}>
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-lg font-semibold">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                        </div>
                      </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {detailedFeatures.map((feature: typeof detailedFeatures[0], index: number) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex items-start gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg overflow-hidden"
                      >
                        {/* Rainbow border on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 animate-rainbow bg-[length:200%] bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]" />
                        <div className="absolute inset-[2px] rounded-xl bg-background/95 dark:bg-background/95" />
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 flex items-start gap-6">
                        <div className={`p-3.5 rounded-xl bg-gradient-to-br ${feature.color} ${feature.hoverColor} shadow-lg transition-all duration-300 group-hover:scale-110`}>
                          <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                        </div>
                        <div className="flex-1 space-y-2">
                          <h3 className="text-lg font-semibold">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                        </div>
                      </motion.div>
                      ))}
                    </div>
                </motion.div>
              </div>

                <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative hidden lg:block lg:sticky lg:top-24 h-full"
                >
                <SocialMediaPosts />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 dark:from-primary/5 dark:to-purple-500/5 rounded-3xl transform rotate-6 scale-95" />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-purple-500/10 dark:from-primary/5 dark:to-purple-500/5 rounded-3xl transform -rotate-3" />
                </motion.div>

          </div>



        </div>

        {/* Add robot at bottom center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px]">
          <SplineSceneBasic />
        </div>

        </section>



        <WhyChooseUs />

        <section className="py-32 sm:py-40 bg-gradient-to-b from-background to-primary/5 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden mt-16">
          <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-grid-white/10 dark:bg-grid-white/5 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          />
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[1000px] mx-auto space-y-8"
          >



            <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium">
              <TrendingUp className="mr-2 h-4 w-4 text-primary" />
              <span className="text-primary">Start Growing Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Ready to Transform Your Social Media Strategy?
            </h2>
            
            <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300">
              Join thousands of successful businesses who've already transformed their social media presence. Let's
              create your success story together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RainbowButton size="lg" asChild>
                <Link href="/form" className="flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5" />
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              </RainbowButton>
              <RainbowButton variant="outline" size="lg" className="flex items-center gap-2">
              Schedule a Post
              <MessageSquare className="h-5 w-5" />
              </RainbowButton>
            </div>
            </div>
          </motion.div>
          </div>
        </section>


        </div>
      )
    }