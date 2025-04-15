import EducationSection from "@/components/education-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <EducationSection />
      <Footer />
    </main>
  )
}
