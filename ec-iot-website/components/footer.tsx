import Link from "next/link"
import Image from "next/image"
import SocialLinks from "@/components/social-links"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Electronics & IoT Club Logo"
                width={32}
                height={32}
                className="h-16 w-16"
              />
              <span className="font-bold text-2xl">Electronics & IoT Club</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Innovating the future through electronics and Internet of Things. Join us to explore, learn, and create
              cutting-edge technology solutions.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Projects
              </Link>
              <Link
                href="/events"
                className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Events
              </Link>
              <Link
                href="/achievements"
                className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Achievements
              </Link>
              <Link
                href="/members"
                className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Members
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="mt-4">
                <SocialLinks />
              </div>
              <div className="pt-2 text-sm text-gray-500 dark:text-gray-400">
              Website issues? Mail to:{" "}
              <a
              href="mailto:23je0145@iitism.ac.in"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
              >
              23je0145@iitism.ac.in
              </a>
            </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Electronics & IoT Club, IIT (ISM) Dhanbad.
          </p>
            <div className="flex gap-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">Made By: Aritra Bera (Technical Lead)</p>
              <a
                href="https://github.com/Ceres2808/Ec-IoT-Website"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              >
                <span>Source Code</span>
                <Github className="w-4 h-4" />
              </a>
            </div>
        </div>
      </div>
    </footer>
  )
}
