"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Globe, Lightbulb, Rocket } from "lucide-react"
import { SectionHeading } from "./ui/section-heading"

export default function AboutSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300/10 to-purple-300/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-300/10 to-blue-300/10 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm h-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Throughout my career, I've developed expertise in{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Artificial Intelligence</span>,
                    <span className="font-semibold text-blue-600 dark:text-blue-400"> Data Analysis</span>, and
                    <span className="font-semibold text-blue-600 dark:text-blue-400"> Software Development</span>.
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    My technical toolkit includes advanced programming in
                    <span className="font-semibold text-blue-600 dark:text-blue-400"> Python</span> and
                    <span className="font-semibold text-blue-600 dark:text-blue-400"> JavaScript</span>, with hands-on
                    experience:
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-lg">
                    <li>
                      Building scalable <span className="font-semibold">SaaS solutions</span>
                    </li>
                    <li>
                      Developing <span className="font-semibold">workflow automation</span> systems
                    </li>
                    <li>
                      Optimizing <span className="font-semibold">machine learning models</span>
                    </li>
                    <li>
                      Designing <span className="font-semibold">ETL processes</span> and database solutions
                    </li>
                    <li>
                      Implementing <span className="font-semibold">generative AI</span> applications
                    </li>
                  </ul>
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
            <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Personal Attributes</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Rocket className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Proactive</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        I take initiative to solve problems and improve processes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Innovative</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        I constantly seek new ways to apply emerging technologies.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Brain className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">Analytical</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Ability to analyze complex data and extract valuable insights.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Globe className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">International Perspective</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Academic experience in the United States and ability to work in multicultural environments.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center mb-3">
                    <Code className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Programming Languages</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Python
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      JavaScript
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      TypeScript
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      R
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Matlab
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      SQL
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      T-SQL
                    </Badge>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-3">
                    <Database className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Frameworks & APIs</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      React
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Flask
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      TensorFlow
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      PyTorch
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Scikit-learn
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      XGBoost
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      OpenAI API
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Anthropic API
                    </Badge>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-3">
                    <Brain className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" />
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Tools & Cloud</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Git
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Firebase
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      GCP
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Azure
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      DBT
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Power BI
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      MongoDB
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                      Oracle
                    </Badge>
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
