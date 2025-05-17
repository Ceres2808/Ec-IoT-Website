import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link
        href="https://instagram.com/electronics_iot_club"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://linkedin.com/company/electronics-iot-club"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="mailto:electronics.club.iitism@gmail.com"
        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
      >
        <Mail className="h-5 w-5" />
        <span className="sr-only">Email</span>
      </Link>
    </div>
  )
}
