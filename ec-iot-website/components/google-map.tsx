"use client"

import { useTheme } from "next-themes"

export default function GoogleMap() {
  const { resolvedTheme } = useTheme()

  return (
<<<<<<< HEAD
<<<<<<< Updated upstream
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
=======
    <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden">
      <iframe
        src="https://storage.googleapis.com/maps-solutions-7y5n3nm3au/locator-plus/uldv/locator-plus.html"
=======
    <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden">
      <iframe
        src="https://storage.googleapis.com/maps-solutions-7y5n3nm3au/locator-plus/tfqw/locator-plus.html"
>>>>>>> a9b9f27cbc6c112a0134f9bc7c724b2781a0a8f8
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 300, borderRadius: "0.5rem" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> a9b9f27cbc6c112a0134f9bc7c724b2781a0a8f8
    </div>
  )
}
