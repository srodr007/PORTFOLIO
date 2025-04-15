import AboutSection from "@/components/about-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <AboutSection />
      <Footer />
    </main>
  )
}
