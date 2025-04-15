import ProjectsSection from "@/components/projects-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
