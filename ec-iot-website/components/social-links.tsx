import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link
        href="https://www.instagram.com/electronicsandiotclubiitism/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-600"
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://www.linkedin.com/company/electronics-club-iitism-dhanbad"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-600"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="mailto:electronics_iot_club@iitism.ac.in"
        className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-600"
      >
        <Mail className="h-5 w-5" />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  )
}
