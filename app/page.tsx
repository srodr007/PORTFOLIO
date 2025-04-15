import type { Metadata } from "next"
import HeroSection from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Sergio Rodriguez Valbuena | Portfolio",
  description: "Data Science and AI Engineer Portfolio",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
    </main>
  )
}
