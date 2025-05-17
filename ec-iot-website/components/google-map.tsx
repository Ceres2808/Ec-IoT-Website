"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { MapPin } from "lucide-react"

export default function GoogleMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    if (!mapRef.current) return

    // Create a placeholder map with styling
    const createPlaceholderMap = () => {
      if (!mapRef.current) return

      const mapElement = mapRef.current
      mapElement.innerHTML = ""

      const mapContainer = document.createElement("div")
      mapContainer.style.width = "100%"
      mapContainer.style.height = "100%"
      mapContainer.style.backgroundColor = isDarkMode ? "#1f2937" : "#e5e7eb"
      mapContainer.style.position = "relative"
      mapContainer.style.overflow = "hidden"
      mapContainer.style.borderRadius = "0.5rem"

      // Create grid lines
      for (let i = 0; i < 10; i++) {
        const horizontalLine = document.createElement("div")
        horizontalLine.style.position = "absolute"
        horizontalLine.style.left = "0"
        horizontalLine.style.right = "0"
        horizontalLine.style.top = `${i * 10}%`
        horizontalLine.style.height = "1px"
        horizontalLine.style.backgroundColor = isDarkMode ? "#374151" : "#d1d5db"
        mapContainer.appendChild(horizontalLine)

        const verticalLine = document.createElement("div")
        verticalLine.style.position = "absolute"
        verticalLine.style.top = "0"
        verticalLine.style.bottom = "0"
        verticalLine.style.left = `${i * 10}%`
        verticalLine.style.width = "1px"
        verticalLine.style.backgroundColor = isDarkMode ? "#374151" : "#d1d5db"
        mapContainer.appendChild(verticalLine)
      }

      // Create location info
      const infoBox = document.createElement("div")
      infoBox.style.position = "absolute"
      infoBox.style.left = "50%"
      infoBox.style.top = "50%"
      infoBox.style.transform = "translate(-50%, -50%)"
      infoBox.style.backgroundColor = isDarkMode ? "#111827" : "#ffffff"
      infoBox.style.padding = "1rem"
      infoBox.style.borderRadius = "0.5rem"
      infoBox.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      infoBox.style.maxWidth = "80%"
      infoBox.style.textAlign = "center"

      const locationIcon = document.createElement("div")
      locationIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${isDarkMode ? "#3b82f6" : "#2563eb"}" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
      locationIcon.style.display = "flex"
      locationIcon.style.justifyContent = "center"
      locationIcon.style.marginBottom = "0.5rem"

      const title = document.createElement("h3")
      title.textContent = "Naresh Vashisht Centre for Tinkering and Innovation (NVCTI)"
      title.style.fontSize = "1rem"
      title.style.fontWeight = "600"
      title.style.marginBottom = "0.5rem"
      title.style.color = isDarkMode ? "#ffffff" : "#111827"

      const address = document.createElement("p")
      address.textContent = "2nd floor, IIT (ISM) Dhanbad, Dhanbad, Jharkhand, India"
      address.style.fontSize = "0.875rem"
      address.style.color = isDarkMode ? "#9ca3af" : "#4b5563"

      infoBox.appendChild(locationIcon)
      infoBox.appendChild(title)
      infoBox.appendChild(address)
      mapContainer.appendChild(infoBox)

      // Create marker
      const marker = document.createElement("div")
      marker.style.position = "absolute"
      marker.style.left = "50%"
      marker.style.top = "50%"
      marker.style.transform = "translate(-50%, -50%)"
      marker.style.width = "20px"
      marker.style.height = "20px"
      marker.style.backgroundColor = "#3b82f6"
      marker.style.borderRadius = "50%"
      marker.style.boxShadow = "0 0 0 5px rgba(59, 130, 246, 0.3)"

      // Create pulse effect
      const pulse = document.createElement("div")
      pulse.style.position = "absolute"
      pulse.style.left = "50%"
      pulse.style.top = "50%"
      pulse.style.transform = "translate(-50%, -50%)"
      pulse.style.width = "50px"
      pulse.style.height = "50px"
      pulse.style.backgroundColor = "rgba(59, 130, 246, 0.2)"
      pulse.style.borderRadius = "50%"
      pulse.style.animation = "pulse 2s infinite"

      const style = document.createElement("style")
      style.textContent = `
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
      `

      document.head.appendChild(style)
      mapContainer.appendChild(pulse)
      mapContainer.appendChild(marker)

      // Add "Map View" text
      const attribution = document.createElement("div")
      attribution.style.position = "absolute"
      attribution.style.bottom = "10px"
      attribution.style.right = "10px"
      attribution.style.backgroundColor = isDarkMode ? "rgba(31, 41, 55, 0.8)" : "rgba(255, 255, 255, 0.8)"
      attribution.style.color = isDarkMode ? "#d1d5db" : "#4b5563"
      attribution.style.padding = "2px 5px"
      attribution.style.borderRadius = "2px"
      attribution.style.fontSize = "10px"
      attribution.textContent = "Map View"

      mapContainer.appendChild(attribution)
      mapElement.appendChild(mapContainer)

      setMapLoaded(true)
    }

    createPlaceholderMap()

    // Update map when theme changes
    return () => {
      // Cleanup if needed
    }
  }, [isDarkMode])

  return (
    <div className="relative w-full h-full">
      <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden" />
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="flex flex-col items-center">
            <MapPin className="h-8 w-8 text-blue-600 dark:text-blue-400 animate-bounce" />
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  )
}
