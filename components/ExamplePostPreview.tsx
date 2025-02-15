"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share2, ChevronDown } from "lucide-react"
import Image from "next/image"

interface ExamplePostPreviewProps {
  brandColor: string
  textFontColor: string
  selectedFont: string
  selectedPaletteColor: string
  selectedPaletteColorName: string
  logoUrl?: string
}

export function ExamplePostPreview({
  brandColor,
  textFontColor,
  selectedFont,
  selectedPaletteColor,
  selectedPaletteColorName,
  logoUrl,
}: ExamplePostPreviewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Social Media Preview</h2>
          <p className="text-sm text-muted-foreground">
            Experience the power of our social media management tools across platforms.
          </p>
        </div>
        <Button variant="outline" size="icon" className="shrink-0">
          <ChevronDown className="h-4 w-4" />
          <span className="sr-only">Toggle preview</span>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Card className="social-preview-card overflow-hidden">
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  {logoUrl ? (
                    <Image
                      src={logoUrl || "/placeholder.svg"}
                      alt="Brand Logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-xs text-muted-foreground">Logo</span>
                  )}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <svg className="w-4 h-4 mr-1 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  LinkedIn
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                {logoUrl ? (
                  <Image
                    src={logoUrl || "/placeholder.svg"}
                    alt="Post Image"
                    width={600}
                    height={338}
                    className="object-cover w-full h-full rounded-md"
                  />
                ) : (
                  <span className="text-sm text-muted-foreground">Your Content Here</span>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-sm" style={{ color: textFontColor, fontFamily: selectedFont }}>
                  Revolutionize your social media management with cutting-edge automation solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${selectedPaletteColor}20`, color: selectedPaletteColor }}
                  >
                    #{selectedPaletteColorName.replace(/\s+/g, "")}
                  </span>
                  <span
                    className="inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${brandColor}20`, color: brandColor }}
                  >
                    #SocialMediaAutomation
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Heart className="h-4 w-4" />
                  <span>142</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>28</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>56</span>
                </button>
              </div>
              <Button variant="outline" size="sm" className="text-xs">
                Boost Post
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card className="social-preview-card overflow-hidden">
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  {logoUrl ? (
                    <Image
                      src={logoUrl || "/placeholder.svg"}
                      alt="Brand Logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-xs text-muted-foreground">Logo</span>
                  )}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <svg className="w-4 h-4 mr-1 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                {logoUrl ? (
                  <Image
                    src={logoUrl || "/placeholder.svg"}
                    alt="Post Image"
                    width={600}
                    height={338}
                    className="object-cover w-full h-full rounded-md"
                  />
                ) : (
                  <span className="text-sm text-muted-foreground">Your Content Here</span>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-sm" style={{ color: textFontColor, fontFamily: selectedFont }}>
                  Unlock the power of AI-driven social media strategies. Transform your online presence today! 🚀
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${selectedPaletteColor}20`, color: selectedPaletteColor }}
                  >
                    #{selectedPaletteColorName.replace(/\s+/g, "")}
                  </span>
                  <span
                    className="inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${brandColor}20`, color: brandColor }}
                  >
                    #AIpoweredMarketing
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Heart className="h-4 w-4" />
                  <span>328</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>47</span>
                </button>
                <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>89</span>
                </button>
              </div>
              <Button variant="outline" size="sm" className="text-xs">
                Boost Post
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

