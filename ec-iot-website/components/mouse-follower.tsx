"use client"

import { useEffect, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === "BUTTON" ||
          e.target.tagName === "A" ||
          e.target.closest("button") ||
          e.target.closest("a"))
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <div
      className="mouse-follower"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? "40px" : "20px",
        height: isHovering ? "40px" : "20px",
        backgroundColor: isHovering ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.5)",
      }}
    />
  )
}
