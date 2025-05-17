import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface EventCardProps {
  title: string
  description: string
  date: string
  location?: string
  image: string
  link?: string
  upcoming?: boolean
}

export default function EventCard({
  title,
  description,
  date,
  location,
  image,
  link,
  upcoming = false,
}: EventCardProps) {
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
        {upcoming && <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700">Upcoming</Badge>}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            {date}
          </div>
          {location && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <MapPin className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
              {location}
            </div>
          )}
        </div>
        {link && (
          <Button asChild variant="outline" className="w-full">
            <Link href={link}>Learn More</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
