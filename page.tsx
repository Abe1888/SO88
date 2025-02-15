"use client"
import { useState } from "react"
import { ColorPalette } from "./components/ColorPalette"

export default function Page() {
  const [selectedColor, setSelectedColor] = useState("#2CC295")

  const handleColorSelect = (color: string, name: string) => {
    setSelectedColor(color)
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <ColorPalette 
        brandColor="#2CC295"
        secondaryBrandColor="#095544"
        textFontColor="#333333"
        selectedFont="Arial, sans-serif"
        onColorSelect={handleColorSelect}
      />
    </div>
  )
}

