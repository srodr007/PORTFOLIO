"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TimelineItemProps {
  date: string
  title: string
  company: string
  location: string
  children: ReactNode
}

export function TimelineItem({ date, title, company, location, children }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 ml-6"
    >
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-8 ring-gray-50 dark:ring-gray-800">
        <svg
          className="w-2.5 h-2.5 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <div className="p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
          <time className="text-xs font-normal text-blue-600 dark:text-blue-400 sm:order-last">{date}</time>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
        </div>
        <div className="mb-4 text-sm font-normal text-gray-700 dark:text-gray-300">
          {company} · {location}
        </div>
        {children}
      </div>
    </motion.div>
  )
}

export function Timeline({ children }: { children: ReactNode }) {
  return <div className="relative border-l border-gray-300 dark:border-gray-600 ml-3">{children}</div>
}
