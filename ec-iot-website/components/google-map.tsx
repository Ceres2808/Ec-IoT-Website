"use client"

import { useTheme } from "next-themes"

export default function GoogleMap() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden">
      <iframe
        src="https://storage.googleapis.com/maps-solutions-7y5n3nm3au/locator-plus/tfqw/locator-plus.html"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 300, borderRadius: "0.5rem" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
  )
}
