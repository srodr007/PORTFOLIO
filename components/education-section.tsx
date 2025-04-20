"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "./ui/section-heading"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function EducationSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading title="Education" subtitle="My academic background" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm h-full overflow-hidden group">
              <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-700 dark:to-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-gray-800/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Universidad Carlos III Madrid</h3>
                  <p className="text-blue-700 dark:text-blue-300">Madrid, Spain</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Data Science and Engineering
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">2021 - 2025</p>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">GPA: 7.71/10</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Data Structures & Algorithms
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Computer Networks
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Statistical Learning
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Databases
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Discrete Mathematics
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Signals & Systems
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Automata Theory & Compilers
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Machine Learning
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Numerical Methods
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Predictive Modeling
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Data Protection & Cybersecurity
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Statistical Signal Processing
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Mobile Applications
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Web Analytics
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://www.uc3m.es/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center"
                    >
                      Visit website
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm h-full overflow-hidden group">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-gray-800/80 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100">University of California</h3>
                  <p className="text-blue-700 dark:text-blue-300">California, United States</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    Computer Science (Exchange Program)
                  </h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <BookOpen className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">2023 - 2024</p>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300">GPA: 3.58/4</p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Neural Networks
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">NLP</Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Web Development
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Big Data
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Artificial Intelligence (AI)
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Image Processing
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Bayesian Data Analysis
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        Audio, Video & Computer Vision
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href="https://www.universityofcalifornia.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center"
                    >
                      Visit website
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
