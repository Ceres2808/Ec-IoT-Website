import { Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface TeamMemberCardProps {
  name: string
  role: string
  department?: string
  year?: string
  image?: string
  email?: string
  linkedin?: string
  compact?: boolean
}

export default function TeamMemberCard({
  name,
  role,
  department,
  year,
  image,
  email,
  linkedin,
  compact = false,
}: TeamMemberCardProps) {
  if (compact) {
    return (
      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-blue-600 dark:text-blue-400">{role}</p>
        {department && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{department}</p>}
        {year && <p className="text-xs text-gray-500 dark:text-gray-400">{year}</p>}
      </div>
    )
  }

  return (
    <div className="group bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          {image && (
            <div className="relative w-24 h-24 flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {name}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{role}</p>
            {department && <p className="text-gray-500 dark:text-gray-400 text-sm">{department}</p>}
            {year && <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{year}</p>}
            <div className="flex justify-center sm:justify-start gap-3">
              {email && (
                <Link
                  href={`mailto:${email}`}
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email {name}</span>
                </Link>
              )}
              {linkedin && (
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn profile for {name}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
