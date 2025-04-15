"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "./ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export default function ContactSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading title="Contact" subtitle="Let's connect" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 shadow-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Interested in working together?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                  I'm currently open to new opportunities and collaborations. Feel free to reach out through LinkedIn or
                  email me directly for any professional inquiries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">Email</h4>
                      <a
                        href="mailto:sergiorodriguezvalbuena@gmail.com"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        sergiorodriguezvalbuena@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">Phone</h4>
                      <a
                        href="tel:+34688980912"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        +34 688 980 912
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">Location</h4>
                      <p className="text-gray-700 dark:text-gray-300">Madrid, Spain</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                      <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/sergio-rodriguez-valbuena/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        sergio-rodriguez-valbuena
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
