import CVSection from "@/components/cv-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CVPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <CVSection />
      <Footer />
    </main>
  )
}
