import React from "react"
import ShaderBackground from "./shader-background"
import Header from "./header"
import HeroContent from "./hero-content"

export default function Hero() {
  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
    </ShaderBackground>
  )
}
