"use client"

import { useTheme } from "next-themes"

export default function GoogleMap() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <iframe
        src="https://storage.googleapis.com/maps-solutions-7y5n3nm3au/locator-plus/gkp7/locator-plus.html"
        width="100%"
        height="100%"
        style={{
          border: 0,
          minHeight: 350,
          background: resolvedTheme === "dark" ? "#1f2937" : "#e5e7eb",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
  )
}
