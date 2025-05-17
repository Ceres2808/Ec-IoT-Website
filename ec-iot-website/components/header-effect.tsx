"use client"

import { useEffect, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function HeaderEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let mouseX = 0
    let mouseY = 0
    let particles: Particle[] = []
    const particleCount = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = `rgba(255, 105, 180, ${Math.random() * 0.5 + 0.3})`
      }

      update() {
        // Move towards mouse with slight attraction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          this.speedX += dx * 0.01
          this.speedY += dy * 0.01
        }

        // Apply speed limits
        this.speedX = Math.max(-2, Math.min(2, this.speedX))
        this.speedY = Math.max(-2, Math.min(2, this.speedY))

        this.x += this.speedX
        this.y += this.speedY

        // Boundary check
        if (this.x < 0 || this.x > width) this.speedX *= -1
        if (this.y < 0 || this.y > height) this.speedY *= -1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const resizeCanvas = () => {
      const header = canvas.parentElement
      if (!header) return

      width = header.offsetWidth
      height = header.offsetHeight
      canvas.width = width
      canvas.height = height

      // Reinitialize particles
      particles = []
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      ctx.strokeStyle = "rgba(255, 105, 180, 0.1)"
      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    // Initialize
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile])

  if (isMobile) return null

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
}
