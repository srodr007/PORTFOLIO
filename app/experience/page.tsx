import ExperienceSection from "@/components/experience-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <ExperienceSection />
      <Footer />
    </main>
  )
}
