"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const memberData = [
  { year: "First Year (B.TECH)", count: 26, color: "#3b82f6" },
  { year: "Second Year (B.TECH)", count: 22, color: "#60a5fa" },
  { year: "Third Year (B.TECH)", count: 12, color: "#93c5fd" },
  { year: "Fourth Year (B.TECH)", count: 8, color: "#bfdbfe" },
  { year: "MTech & PHD", count: 5, color: "#dbeafe" },
]

export default function MemberDistribution() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const total = memberData.reduce((acc, item) => acc + item.count, 0)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const darkMode = resolvedTheme === "dark"

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="h-8 w-full flex rounded-md overflow-hidden">
            {memberData.map((item, index) => (
              <div
                key={index}
                style={{
                  width: `${(item.count / total) * 100}%`,
                  backgroundColor: item.color,
                }}
                className="h-full transition-all duration-300"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {memberData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} />
                <div className="flex-1 flex justify-between">
                  <span className="text-sm font-medium">{item.year}</span>
                  <span className="text-sm font-bold">{item.count}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-gray-500 dark:text-gray-400">Total Members: {total}</div>
        </div>
      </CardContent>
    </Card>
  )
}
