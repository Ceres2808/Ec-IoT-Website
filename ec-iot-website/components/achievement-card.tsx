import { Trophy } from "lucide-react"
import Image from "next/image"

interface AchievementCardProps {
  title: string
  description: string
  year: string
  image: string
}

export default function AchievementCard({ title, description, year, image }: AchievementCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white text-sm font-medium px-2 py-1 rounded">
          {year}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start mb-3">
          <Trophy className="h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
          <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </div>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}
