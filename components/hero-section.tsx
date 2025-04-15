"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "./navbar"
import { useTheme } from "next-themes"
import { TypewriterEffect } from "./ui/typewriter-effect"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  // Efecto para las partículas de fondo
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse position
    let mouseX = -100
    let mouseY = -100

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Particle system
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      isTrail: boolean

      constructor(x: number, y: number, isTrail = false) {
        this.x = x
        this.y = y
        this.size = isTrail ? 2.5 : Math.random() * 2.5 + 1
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = isTrail
          ? theme === "dark"
            ? "rgba(96, 165, 250, 0.8)"
            : "rgba(59, 130, 246, 0.8)"
          : theme === "dark"
            ? "rgba(59, 130, 246, 0.6)"
            : "rgba(59, 130, 246, 0.5)"
        this.isTrail = isTrail
      }

      update() {
        // Solo las partículas de fondo se mueven por sí mismas
        if (!this.isTrail) {
          this.x += this.speedX
          this.y += this.speedY

          // Rebote en los bordes
          if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1
          if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const backgroundParticles: Particle[] = []
    const trailParticles: Particle[] = []
    const numberOfBackgroundParticles = 80
    const maxTrailLength = 20 // Número máximo de partículas en el rastro

    const createBackgroundParticles = () => {
      for (let i = 0; i < numberOfBackgroundParticles; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        backgroundParticles.push(new Particle(x, y))
      }
    }

    // Actualizar el rastro del cursor
    const updateTrail = () => {
      // Añadir una nueva partícula al inicio del rastro si el cursor se ha movido
      if (mouseX > 0 && mouseY > 0) {
        trailParticles.unshift(new Particle(mouseX, mouseY, true))
      }

      // Limitar el tamaño del rastro
      if (trailParticles.length > maxTrailLength) {
        trailParticles.pop()
      }
    }

    const handleParticles = () => {
      // Actualizar y dibujar partículas de fondo
      for (let i = 0; i < backgroundParticles.length; i++) {
        backgroundParticles[i].update()
        backgroundParticles[i].draw()

        // Connect background particles
        for (let j = i; j < backgroundParticles.length; j++) {
          const dx = backgroundParticles[i].x - backgroundParticles[j].x
          const dy = backgroundParticles[i].y - backgroundParticles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxLineDistance = 120

          if (distance < maxLineDistance) {
            if (!ctx) return
            ctx.beginPath()
            const opacity = 1 - distance / maxLineDistance
            ctx.strokeStyle =
              theme === "dark" ? `rgba(59, 130, 246, ${opacity * 0.2})` : `rgba(59, 130, 246, ${opacity * 0.35})`
            ctx.lineWidth = theme === "dark" ? 0.8 : 1.2
            ctx.moveTo(backgroundParticles[i].x, backgroundParticles[i].y)
            ctx.lineTo(backgroundParticles[j].x, backgroundParticles[j].y)
            ctx.stroke()
          }
        }
      }

      // Dibujar partículas del rastro y conectarlas
      for (let i = 0; i < trailParticles.length; i++) {
        // Dibujar cada partícula del rastro
        trailParticles[i].draw()

        // Conectar con la siguiente partícula del rastro
        if (i < trailParticles.length - 1) {
          if (!ctx) return
          ctx.beginPath()

          // Calcular opacidad basada en la posición en el rastro
          const opacity = 1 - i / trailParticles.length

          // Color más brillante para las líneas del rastro
          ctx.strokeStyle =
            theme === "dark" ? `rgba(96, 165, 250, ${opacity * 0.6})` : `rgba(59, 130, 246, ${opacity * 0.8})`

          ctx.lineWidth = theme === "dark" ? 1.2 : 1.5
          ctx.moveTo(trailParticles[i].x, trailParticles[i].y)
          ctx.lineTo(trailParticles[i + 1].x, trailParticles[i + 1].y)
          ctx.stroke()
        }

        // Reducir gradualmente el tamaño de las partículas más antiguas
        if (i > 0) {
          trailParticles[i].size = Math.max(0.5, 2.5 * (1 - i / maxTrailLength))
        }
      }
    }

    createBackgroundParticles()

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Actualizar el rastro del cursor
      updateTrail()

      // Actualizar y dibujar todas las partículas
      handleParticles()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [theme])

  // Palabras para el efecto de typewriter
  const words = [
    { text: "Data" },
    { text: "&" },
    { text: "AI" },
    { text: "Engineer", className: "text-blue-500 dark:text-blue-400" },
  ]

  return (
    <>
      <Navbar />
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900"
      >
        {/* Particle background */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Futuristic elements - completamente estáticos */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-300/10 to-purple-300/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-300/10 to-blue-300/10 blur-3xl" />
        </div>

        {/* Hero Content - Side by Side Layout - Ajustado para mejor centrado */}
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Left Side - Profile Image con efecto de caída y rebote mejorado */}
            <div className="flex justify-center md:justify-end w-full md:w-5/12">
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80"
                initial={{ y: -300, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    y: {
                      type: "spring",
                      bounce: 0.6,
                      duration: 1.5,
                      times: [0, 0.4, 0.6, 0.8, 0.9, 1],
                      easings: ["easeOut", "easeIn", "easeOut", "easeIn", "easeOut"],
                    },
                    opacity: { duration: 0.3 },
                  },
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/40 to-blue-600/40 blur-xl animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-04-13%20a%20las%2022.59.25_edc4f92e.jpg-Pbt3d7FeDEYDC8X8sqEYseS9LEj8Hm.jpeg"
                    alt="Sergio Rodriguez Valbuena"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-7/12"
            >
              {/* Name with text shadow - Tamaño reducido para que quepa en una línea */}
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4"
                style={{
                  textShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                }}
              >
                Sergio Rodriguez Valbuena
              </motion.h1>

              {/* Description with typewriter effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="mb-2"
              >
                <TypewriterEffect words={words} className="text-xl md:text-2xl" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.0 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              >
                Final year Data Science and Engineering student at Universidad Carlos III de Madrid, with one year
                abroad at University of California.
              </motion.p>

              {/* Contact Buttons with hover effects - Cambiados a estilo de la imagen */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 }}
                className="flex flex-wrap gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-md border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-md hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:sergiorodriguezvalbuena@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Contact</span>
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-md border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-md hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/sergio-rodriguez-valbuena/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
