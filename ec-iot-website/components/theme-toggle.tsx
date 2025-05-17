"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Force theme to be either light or dark (no system)
  useEffect(() => {
    if (mounted && (theme === "system" || !theme)) {
      // Default to dark if system or undefined
      setTheme("dark")
    }
  }, [mounted, theme, setTheme])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white border border-gray-200 dark:border-gray-800"
      style={{
        backgroundColor: theme === "dark" ? "rgb(59, 130, 246)" : "rgb(229, 231, 235)",
      }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ease-in-out"
        style={{
          transform: theme === "dark" ? "translateX(calc(100% - 0.25rem))" : "translateX(0.25rem)",
        }}
      >
        <Moon className={`h-3 w-3 text-blue-600 theme-toggle-icon ${theme === "dark" ? "active" : ""}`} />
        <Sun className={`h-3 w-3 text-amber-500 absolute theme-toggle-icon ${theme === "light" ? "active" : ""}`} />
      </span>
    </button>
  )
}
