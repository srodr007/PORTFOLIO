"use client"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "./ui/section-heading"
import { Timeline, TimelineItem } from "./ui/timeline"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <div className="mt-12">
          <Timeline>
            <TimelineItem
              date="January 2025 - Present"
              title="Generative AI Engineer"
              company="MissioIA"
              location="Madrid, Spain"
            >
              <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>
                  Design and implementation of customized SaaS solutions for clients, focused on process optimization
                  through advanced technological solutions.
                </li>
                <li>
                  Development of full-stack web applications, integrating technologies such as artificial intelligence
                  and databases.
                </li>
                <li>
                  Workflow automation through programming, enabling better decision-making and improving efficiency.
                </li>
                <li>
                  Integration of generative AI models and intelligent agents in real-world applications to enhance user
                  interaction and decision support.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Software as a Service (SaaS)
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Generative AI
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Google Cloud</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Microsoft Azure
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Firebase</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Agentic Systems
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Prompt Engineering
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  UI Development
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Process Automation
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">RAG</Badge>
              </div>
            </TimelineItem>

            <TimelineItem
              date="September 2024 - March 2025"
              title="Data Analyst I"
              company="PRGX"
              location="Madrid, Spain"
            >
              <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Process automation with Python and DBT.</li>
                <li>ETL tasks and financial data analysis using SQL and Microsoft SQL Server.</li>
                <li>Business intelligence tools such as Power BI for data validation.</li>
                <li>
                  Collaboration with international teams of analysts and auditors to ensure data integrity in financial
                  recovery operations.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Python</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">SQL</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Process Automation
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Selenium</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">DBT</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Data Analysis
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Git</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">ETL</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Databases</Badge>
              </div>
            </TimelineItem>

            <TimelineItem
              date="June 2024 - August 2024"
              title="Machine Learning Intern"
              company="Hito 1"
              location="Asturias, Spain"
            >
              <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>
                  Development of a machine learning model to predict spillway overflow events and their
                  characterization.
                </li>
                <li>Feature engineering on hydrological data and time series.</li>
                <li>Model validation and evaluation, using Random Forest and XGBoost.</li>
                <li>Data visualization for analysis and interpretation.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Machine Learning
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Random Forest
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">XGBoost</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Time Series</Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Visualization
                </Badge>
              </div>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </section>
  )
}
