"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Eye, EyeOff, FileText } from "lucide-react"

export default function CVSection() {
  const [showPreview, setShowPreview] = useState(true)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // URL del CV - Esta es la ruta correcta para cuando coloques el PDF en la carpeta public
  const cvUrl = "/Sergio_Rodriguez_Valbuena_CV.pdf"

  // Función para descargar el CV
  const handleDownloadCV = () => {
    // Crear un elemento <a> temporal para forzar la descarga
    const link = document.createElement("a")
    link.href = cvUrl
    link.setAttribute("download", "Sergio_Rodriguez_Valbuena_CV.pdf")
    link.setAttribute("target", "_blank")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="cv" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading title="Curriculum Vitae" subtitle="My professional resume" />

        <div className="mt-12 max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Download my complete resume</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="default"
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                      onClick={handleDownloadCV}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      onClick={() => setShowPreview(!showPreview)}
                    >
                      {showPreview ? (
                        <>
                          <EyeOff className="mr-2 h-4 w-4" />
                          Hide Preview
                        </>
                      ) : (
                        <>
                          <Eye className="mr-2 h-4 w-4" />
                          Show Preview
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {showPreview && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  >
                    <div className="relative w-full h-[800px]">
                      <iframe
                        src={cvUrl}
                        className="w-full h-full"
                        title="CV Preview"
                      />
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
