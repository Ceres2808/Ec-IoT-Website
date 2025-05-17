import type { ReactNode } from "react"

interface StatsCardProps {
  icon: ReactNode
  value: string
  label: string
}

export default function StatsCard({ icon, value, label }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 transition-all duration-200 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-3xl font-bold mb-2">{value}</h3>
        <p className="text-gray-500 dark:text-gray-400">{label}</p>
      </div>
    </div>
  )
}
