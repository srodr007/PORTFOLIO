"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "./ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { Brain, ExternalLink, Maximize2, ChevronRight, ChevronLeft } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsSection() {
  const [open, setOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projectImages = [
    {
      src: "/imagen_movilidad.png",
      alt: "Patient mobility dashboard showing location clusters",
      caption: "Patient mobility dashboard visualizing daily location clusters and movements",
    },
    {
      src: "/imagen_casa.png",
      alt: "Home and work location detection dashboard",
      caption: "Dashboard showing detected home and work locations based on time patterns",
    },
    {
      src: "/index_mobility.png",
      alt: "Mobility index visualization",
      caption: "Time series visualization of user mobility index over time",
    },
    {
      src: "/entropia.png",
      alt: "Location entropy analysis",
      caption: "Heat map showing location entropy and most probable clusters by day and hour",
    },
    {
      src: "/grafo.png",
      alt: "Cluster graph showing routes between locations",
      caption: "Graph visualization of routes between detected location clusters",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length)
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading title="Projects" subtitle="My featured work" />

        <div className="mt-12 grid grid-cols-1 gap-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-60 md:h-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800">
                    <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                      <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="h-24 w-24 text-white/30" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 md:w-2/3">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      Mobility and Routine Analysis for Mental Health Assessment
                    </h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                          <Maximize2 className="h-5 w-5" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[900px] bg-white dark:bg-gray-800 max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-gray-800 dark:text-gray-100">
                            Mobility and Daily Routine Analysis: A Geolocation-Based Approach to Psychological
                            Assessment
                          </DialogTitle>
                          <DialogDescription className="text-gray-600 dark:text-gray-400">
                            Data Science Project in collaboration with eB2 (Evidence-Based Behaviour)
                          </DialogDescription>
                        </DialogHeader>

                        <Tabs defaultValue="overview" className="mt-6">
                          <TabsList className="grid w-full grid-cols-5">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="methodology">Methodology</TabsTrigger>
                            <TabsTrigger value="results">Results</TabsTrigger>
                            <TabsTrigger value="gallery">Gallery</TabsTrigger>
                            <TabsTrigger value="tech">Technologies</TabsTrigger>
                          </TabsList>

                          <TabsContent value="overview" className="mt-4 space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Project Overview</h4>
                              <p className="text-gray-700 dark:text-gray-300 mb-4">
                                This project was developed in collaboration with eB2 (Evidence-Based Behaviour), a
                                company dedicated to clinical and scientific research. The goal was to analyze
                                large-scale geolocation data from mobile devices to identify mobility patterns and daily
                                routines that could provide insights into mental health assessment.
                              </p>
                              <p className="text-gray-700 dark:text-gray-300">
                                By analyzing millions of geolocation records collected via a mobile application, we
                                extracted valuable information to support healthcare professionals in caring for
                                patients with mental health issues.
                              </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Problem Statement</h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                The primary challenge was identifying significant mobility patterns in large datasets of
                                user localization data. Due to the size and complexity of the data, it was essential to
                                filter out noise and focus on key locations where users spend the most time, which may
                                indicate crucial aspects of their daily routine and mental health.
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Dealing with large datasets containing significant noise in raw data</li>
                                <li>Handling computationally expensive operations for processing large datasets</li>
                                <li>Identifying and correcting empty or incorrect data</li>
                                <li>
                                  Extracting relevant metrics from raw location data to discover mobility patterns
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Objectives</h4>
                              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Detecting unique daily locations where users spend significant amounts of time</li>
                                <li>
                                  Identifying patterns in the data that could provide insights into users' daily
                                  routines
                                </li>
                                <li>
                                  Developing models that can be applied across a broad dataset to capture these patterns
                                  efficiently
                                </li>
                                <li>Creating a dashboard to visualize and analyze user mobility patterns</li>
                                <li>Predicting clinical study groups based on mobility patterns</li>
                              </ul>
                            </div>
                          </TabsContent>

                          <TabsContent value="methodology" className="mt-4 space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Geolocation Clustering
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We used the DBSCAN (Density-Based Spatial Clustering of Applications with Noise)
                                algorithm to identify unique locations that users visit throughout the day. This
                                algorithm is particularly useful for geospatial data as it allows for density-based
                                grouping without specifying a fixed number of locations and filters out transitional
                                points.
                              </p>
                              <p className="text-gray-700 dark:text-gray-300 mt-2">Key hyperparameters:</p>
                              <ul className="list-disc pl-5 mt-1 text-gray-700 dark:text-gray-300">
                                <li>
                                  <span className="font-medium">Epsilon (eps):</span> ~100 meters - maximum allowable
                                  distance between points to be considered part of the same location
                                </li>
                                <li>
                                  <span className="font-medium">Minimum samples:</span> 2 - minimum number of points
                                  required to form a cluster
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Home and Work Identification
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                To identify home and work locations, we analyzed time patterns in the clustered data:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>
                                  <span className="font-medium">Home detection:</span> Locations with time slots of 5+
                                  hours starting between 12:00 AM and 3:00 AM
                                </li>
                                <li>
                                  <span className="font-medium">Work detection:</span> Locations with 5-9 consecutive
                                  daytime hours
                                </li>
                                <li>Applied a second DBSCAN clustering to group recurring locations across days</li>
                                <li>
                                  Used majority voting (75% threshold) to classify clusters as home, work, or both
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Daily Routine Analysis
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We employed two approaches to detect user routines:
                              </p>
                              <ol className="list-decimal pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
                                <li>
                                  <span className="font-medium">Relative Frequency Analysis:</span>
                                  <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>Grouped data by hour and day of the week</li>
                                    <li>Calculated relative frequency of each cluster at specific times</li>
                                    <li>
                                      Identified routines when a location had {">"}50% frequency at a specific time
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="font-medium">Entropy Analysis:</span>
                                  <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>Applied Shannon Entropy to measure predictability of locations</li>
                                    <li>Lower entropy indicated more stable routines</li>
                                    <li>
                                      Combined with probability matrix to identify most likely locations by day and hour
                                    </li>
                                  </ul>
                                </li>
                              </ol>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Mobility Metrics</h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We developed several metrics to quantify user mobility:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>
                                  <span className="font-medium">Mobility Index:</span> Combined normalized metrics of
                                  distance traveled, time spent traveling, average speed, unique locations visited, and
                                  frequency of location changes
                                </li>
                                <li>
                                  <span className="font-medium">Transportation Methods:</span> Classified movement types
                                  based on calculated speeds (walking, running, car, etc.)
                                </li>
                                <li>
                                  <span className="font-medium">Route Analysis:</span> Identified most common routes
                                  between clusters using directional weighted graphs
                                </li>
                                <li>
                                  <span className="font-medium">Coverage Area:</span> Calculated the geographic area
                                  covered by each user
                                </li>
                              </ul>
                            </div>
                          </TabsContent>

                          <TabsContent value="results" className="mt-4 space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Key Findings</h4>
                              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Successfully identified home locations for approximately 77% of users</li>
                                <li>
                                  Work locations were detected for only about 20% of patients, suggesting a high
                                  percentage of unemployed individuals or those working from home
                                </li>
                                <li>Approximately 20% of patients spent most of their time at home without leaving</li>
                                <li>Weekend mobility was significantly lower than weekday mobility across users</li>
                                <li>Developed a mobility index that effectively quantified user movement patterns</li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Prediction Results
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We developed a machine learning model to predict the clinical study group (service) of
                                users based on their mobility metrics:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Used Random Forest classifier with PCA for dimensionality reduction</li>
                                <li>Applied SMOTE to handle class imbalance</li>
                                <li>
                                  Achieved 96% overall accuracy in classifying users into their correct clinical study
                                  groups
                                </li>
                                <li>Precision ranged from 0.85 to 1.00 across different classes</li>
                                <li>Recall ranged from 0.87 to 1.00 across different classes</li>
                              </ul>
                              <p className="text-gray-700 dark:text-gray-300 mt-2">
                                These results demonstrate that mobility patterns can be highly predictive of a user's
                                clinical profile, suggesting potential applications in mental health assessment and
                                monitoring.
                              </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Dashboard Development
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We created an interactive dashboard using Streamlit to visualize and analyze user
                                mobility data:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>
                                  User-specific analysis showing routines, mobility index, and cluster distributions
                                </li>
                                <li>
                                  Date-specific analysis displaying daily movements and time spent at each location
                                </li>
                                <li>Visualization of entropy and most probable locations by day and hour</li>
                                <li>Graph representation of routes between clusters</li>
                                <li>Transportation method analysis</li>
                              </ul>
                              <p className="text-gray-700 dark:text-gray-300 mt-2">
                                The dashboard provides healthcare professionals with an intuitive tool to monitor
                                patient mobility patterns and identify potential changes that might indicate shifts in
                                mental health status.
                              </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Applications and Impact
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                The findings from this project have several potential applications in healthcare:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>
                                  Early detection of changes in mental health status through mobility pattern shifts
                                </li>
                                <li>Personalized care strategies based on individual mobility profiles</li>
                                <li>Objective monitoring of treatment effectiveness</li>
                                <li>
                                  Identification of social isolation patterns that may indicate psychological distress
                                </li>
                                <li>Support for elderly patients by monitoring declining mobility or energy levels</li>
                              </ul>
                            </div>
                          </TabsContent>

                          <TabsContent value="gallery" className="mt-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <div className="relative w-full h-auto overflow-hidden rounded-md flex justify-center">
                                <div className="relative w-full max-w-4xl">
                                  <img
                                    src={projectImages[currentImageIndex].src}
                                    alt={projectImages[currentImageIndex].alt}
                                    className="w-full h-auto max-h-[600px] object-contain mx-auto"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
                                    <button
                                      onClick={prevImage}
                                      className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                    >
                                      <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                                    </button>
                                    <button
                                      onClick={nextImage}
                                      className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                    >
                                      <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <p className="text-sm text-center mt-2 text-gray-600 dark:text-gray-400">
                                {projectImages[currentImageIndex].caption}
                              </p>
                              <div className="flex justify-center mt-4">
                                {projectImages.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 mx-1 rounded-full ${
                                      currentImageIndex === index ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="tech" className="mt-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Technologies & Methods Used
                              </h4>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    Programming & Data Analysis
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Python
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Pandas
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      NumPy
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Scikit-learn
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Matplotlib
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Seaborn
                                    </Badge>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    Machine Learning
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      DBSCAN
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Random Forest
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      PCA
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      SMOTE
                                    </Badge>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    Visualization & Dashboard
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Streamlit
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Plotly
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      NetworkX
                                    </Badge>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    Geospatial Analysis
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Haversine Formula
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Coordinate Reference Systems
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      EPSG:3857
                                    </Badge>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-6">
                                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                  Key Algorithms & Techniques
                                </h5>
                                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                                  <li>Density-Based Spatial Clustering (DBSCAN)</li>
                                  <li>Shannon Entropy for routine stability analysis</li>
                                  <li>Mobility Index calculation with weighted z-scores</li>
                                  <li>Transportation mode classification based on speed thresholds</li>
                                  <li>Graph-based route analysis</li>
                                  <li>Home and work location identification through temporal patterns</li>
                                </ul>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Collaboration with eB2 (Evidence-Based Behaviour) to analyze large-scale geolocation data from
                    mobile devices, identifying mobility patterns and daily routines of users. Clustering algorithms
                    (DBSCAN), entropy analysis, and a mobility index were applied to extract behavioral insights. An
                    interactive dashboard was built, and machine learning models were implemented to predict clinical
                    study groups based on movement patterns and routines.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Python</Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">DBSCAN</Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      Machine Learning
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      Data Analysis
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      Geolocation
                    </Badge>
                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      Dashboard
                    </Badge>
                  </div>

                  <div className="flex justify-end">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center">
                          View more details
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[900px] bg-white dark:bg-gray-800 max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-gray-800 dark:text-gray-100">
                            Mobility and Daily Routine Analysis: A Geolocation-Based Approach to Psychological
                            Assessment
                          </DialogTitle>
                          <DialogDescription className="text-gray-600 dark:text-gray-400">
                            Data Science Project in collaboration with eB2 (Evidence-Based Behaviour)
                          </DialogDescription>
                        </DialogHeader>

                        <Tabs defaultValue="overview" className="mt-6">
                          <TabsList className="grid w-full grid-cols-5">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="methodology">Methodology</TabsTrigger>
                            <TabsTrigger value="results">Results</TabsTrigger>
                            <TabsTrigger value="gallery">Gallery</TabsTrigger>
                            <TabsTrigger value="tech">Technologies</TabsTrigger>
                          </TabsList>

                          <TabsContent value="overview" className="mt-4 space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Project Overview</h4>
                              <p className="text-gray-700 dark:text-gray-300 mb-4">
                                This project was developed in collaboration with eB2 (Evidence-Based Behaviour), a
                                company dedicated to clinical and scientific research. The goal was to analyze
                                large-scale geolocation data from mobile devices to identify mobility patterns and daily
                                routines that could provide insights into mental health assessment.
                              </p>
                              <p className="text-gray-700 dark:text-gray-300">
                                By analyzing millions of geolocation records collected via a mobile application, we
                                extracted valuable information to support healthcare professionals in caring for
                                patients with mental health issues.
                              </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Problem Statement</h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                The primary challenge was identifying significant mobility patterns in large datasets of
                                user localization data. Due to the size and complexity of the data, it was essential to
                                filter out noise and focus on key locations where users spend the most time, which may
                                indicate crucial aspects of their daily routine and mental health.
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Dealing with large datasets containing significant noise in raw data</li>
                                <li>Handling computationally expensive operations for processing large datasets</li>
                                <li>Identifying and correcting empty or incorrect data</li>
                                <li>
                                  Extracting relevant metrics from raw location data to discover mobility patterns
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Objectives</h4>
                              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Detecting unique daily locations where users spend significant amounts of time</li>
                                <li>
                                  Identifying patterns in the data that could provide insights into users' daily
                                  routines
                                </li>
                                <li>
                                  Developing models that can be applied across a broad dataset to capture these patterns
                                  efficiently
                                </li>
                                <li>Creating a dashboard to visualize and analyze user mobility patterns</li>
                                <li>Predicting clinical study groups based on mobility patterns</li>
                              </ul>
                            </div>
                          </TabsContent>

                          <TabsContent value="methodology" className="mt-4 space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Geolocation Clustering
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We used the DBSCAN (Density-Based Spatial Clustering of Applications with Noise)
                                algorithm to identify unique locations that users visit throughout the day. This
                                algorithm is particularly useful for geospatial data as it allows for density-based
                                grouping without specifying a fixed number of locations and filters out transitional
                                points.
                              </p>
                              <p className="text-gray-700 dark:text-gray-300 mt-2">Key hyperparameters:</p>
                              <ul className="list-disc pl-5 mt-1 text-gray-700 dark:text-gray-300">
                                <li>
                                  <span className="font-medium">Epsilon (eps):</span> ~100 meters - maximum allowable
                                  distance between points to be considered part of the same location
                                </li>
                                <li>
                                  <span className="font-medium">Minimum samples:</span> 2 - minimum number of points
                                  required to form a cluster
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Home and Work Identification
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                To identify home and work locations, we analyzed time patterns in the clustered data:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>
                                  <span className="font-medium">Home detection:</span> Locations with time slots of 5+
                                  hours starting between 12:00 AM and 3:00 AM
                                </li>
                                <li>
                                  <span className="font-medium">Work detection:</span> Locations with 5-9 consecutive
                                  daytime hours
                                </li>
                                <li>Applied a second DBSCAN clustering to group recurring locations across days</li>
                                <li>
                                  Used majority voting (75% threshold) to classify clusters as home, work, or both
                                </li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Daily Routine Analysis
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We employed two approaches to detect user routines:
                              </p>
                              <ol className="list-decimal pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-2">
                                <li>
                                  <span className="font-medium">Relative Frequency Analysis:</span>
                                  <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>Grouped data by hour and day of the week</li>
                                    <li>Calculated relative frequency of each cluster at specific times</li>
                                    <li>
                                      Identified routines when a location had {">"}50% frequency at a specific time
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="font-medium">Entropy Analysis:</span>
                                  <ul className="list-disc pl-5 mt-1 space-y-1">
                                    <li>Applied Shannon Entropy to measure predictability of locations</li>
                                    <li>Lower entropy indicated more stable routines</li>
                                    <li>
                                      Combined with probability matrix to identify most likely locations by day and hour
                                    </li>
                                  </ul>
                                </li>
                              </ol>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Mobility Metrics</h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We developed several metrics to quantify user mobility:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>
                                  <span className="font-medium">Mobility Index:</span> Combined normalized metrics of
                                  distance traveled, time spent traveling, average speed, unique locations visited, and
                                  frequency of location changes
                                </li>
                                <li>
                                  <span className="font-medium">Transportation Methods:</span> Classified movement types
                                  based on calculated speeds (walking, running, car, etc.)
                                </li>
                                <li>
                                  <span className="font-medium">Route Analysis:</span> Identified most common routes
                                  between clusters using directional weighted graphs
                                </li>
                                <li>
                                  <span className="font-medium">Coverage Area:</span> Calculated the geographic area
                                  covered by each user
                                </li>
                              </ul>
                            </div>
                          </TabsContent>

                          <TabsContent value="results" className="mt-4 space-y-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Key Findings</h4>
                              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Successfully identified home locations for approximately 77% of users</li>
                                <li>
                                  Work locations were detected for only about 20% of patients, suggesting a high
                                  percentage of unemployed individuals or those working from home
                                </li>
                                <li>Approximately 20% of patients spent most of their time at home without leaving</li>
                                <li>Weekend mobility was significantly lower than weekday mobility across users</li>
                                <li>Developed a mobility index that effectively quantified user movement patterns</li>
                              </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Prediction Results
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We developed a machine learning model to predict the clinical study group (service) of
                                users based on their mobility metrics:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Used Random Forest classifier with PCA for dimensionality reduction</li>
                                <li>Applied SMOTE to handle class imbalance</li>
                                <li>
                                  Achieved 96% overall accuracy in classifying users into their correct clinical study
                                  groups
                                </li>
                                <li>Precision ranged from 0.85 to 1.00 across different classes</li>
                                <li>Recall ranged from 0.87 to 1.00 across different classes</li>
                              </ul>
                              <p className="text-gray-700 dark:text-gray-300 mt-2">
                                These results demonstrate that mobility patterns can be highly predictive of a user's
                                clinical profile, suggesting potential applications in mental health assessment and
                                monitoring.
                              </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Dashboard Development
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                We created an interactive dashboard using Streamlit to visualize and analyze user
                                mobility data:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>
                                  User-specific analysis showing routines, mobility index, and cluster distributions
                                </li>
                                <li>
                                  Date-specific analysis displaying daily movements and time spent at each location
                                </li>
                                <li>Visualization of entropy and most probable locations by day and hour</li>
                                <li>Graph representation of routes between clusters</li>
                                <li>Transportation method analysis</li>
                              </ul>
                              <p className="text-gray-700 dark:text-gray-300 mt-2">
                                The dashboard provides healthcare professionals with an intuitive tool to monitor
                                patient mobility patterns and identify potential changes that might indicate shifts in
                                mental health status.
                              </p>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Applications and Impact
                              </h4>
                              <p className="text-gray-700 dark:text-gray-300">
                                The findings from this project have several potential applications in healthcare:
                              </p>
                              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                                <li>
                                  Early detection of changes in mental health status through mobility pattern shifts
                                </li>
                                <li>Personalized care strategies based on individual mobility profiles</li>
                                <li>Objective monitoring of treatment effectiveness</li>
                                <li>
                                  Identification of social isolation patterns that may indicate psychological distress
                                </li>
                                <li>Support for elderly patients by monitoring declining mobility or energy levels</li>
                              </ul>
                            </div>
                          </TabsContent>

                          <TabsContent value="gallery" className="mt-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <div className="relative w-full h-auto overflow-hidden rounded-md flex justify-center">
                                <div className="relative w-full max-w-4xl">
                                  <img
                                    src={projectImages[currentImageIndex].src}
                                    alt={projectImages[currentImageIndex].alt}
                                    className="w-full h-auto max-h-[600px] object-contain mx-auto"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
                                    <button
                                      onClick={prevImage}
                                      className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                    >
                                      <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                                    </button>
                                    <button
                                      onClick={nextImage}
                                      className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                    >
                                      <ChevronRight className="h-6 w-6 text-gray-800 dark:text-gray-200" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <p className="text-sm text-center mt-2 text-gray-600 dark:text-gray-400">
                                {projectImages[currentImageIndex].caption}
                              </p>
                              <div className="flex justify-center mt-4">
                                {projectImages.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 mx-1 rounded-full ${
                                      currentImageIndex === index ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent value="tech" className="mt-4">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                Technologies & Methods Used
                              </h4>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    Programming & Data Analysis
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Python
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Pandas
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      NumPy
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Scikit-learn
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Matplotlib
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Seaborn
                                    </Badge>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    Machine Learning
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      DBSCAN
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Random Forest
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      PCA
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      SMOTE
                                    </Badge>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    Visualization & Dashboard
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Streamlit
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Plotly
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      NetworkX
                                    </Badge>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                    Geospatial Analysis
                                  </h5>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Haversine Formula
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      Coordinate Reference Systems
                                    </Badge>
                                    <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                                      EPSG:3857
                                    </Badge>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-6">
                                <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                                  Key Algorithms & Techniques
                                </h5>
                                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                                  <li>Density-Based Spatial Clustering (DBSCAN)</li>
                                  <li>Shannon Entropy for routine stability analysis</li>
                                  <li>Mobility Index calculation with weighted z-scores</li>
                                  <li>Transportation mode classification based on speed thresholds</li>
                                  <li>Graph-based route analysis</li>
                                  <li>Home and work location identification through temporal patterns</li>
                                </ul>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
