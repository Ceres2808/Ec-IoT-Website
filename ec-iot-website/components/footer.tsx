import Link from "next/link"
import Image from "next/image"
import SocialLinks from "@/components/social-links"

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
                className="h-8 w-8"
              />
              <span className="font-bold text-lg">Electronics & IoT Club</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Innovating the future through electronics and Internet of Things. Join us to explore, learn, and create
              cutting-edge technology solutions.
            </p>
            <SocialLinks />
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
              <p>Electronics and IoT Club</p>
              <p>IIT ISM Dhanbad</p>
              <p>Dhanbad, Jharkhand 826004</p>
              <p>Email: electronics.club.iitism@gmail.com</p>
              <div className="mt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Electronics & IoT Club, IIT ISM Dhanbad. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
