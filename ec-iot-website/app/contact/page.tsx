import { Mail, MapPin, Instagram } from "lucide-react"
import SectionHeading from "@/components/section-heading"
import SocialLinks from "@/components/social-links"
import GoogleMap from "@/components/google-map"
import HeaderEffect from "@/components/header-effect"

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Get in touch with the Electronics and IoT Club. We'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <SectionHeading title="Get In Touch" subtitle="Our Contact Information" />
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Electronics and IoT Club
                    <br />
                    IIT ISM Dhanbad
                    <br />
                    Dhanbad, Jharkhand 826004
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Club Email: electronics_iot_club@iitism.ac.in
                    <br />
                    Coordinator: 23je0178@iitism.ac.in
                    <br />
                    Co-coordinator: prantikbasu23@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Instagram className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Social Media</h3>
                  <p className="text-gray-500 dark:text-gray-400">Follow us on Instagram and LinkedIn for updates</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Find Us" subtitle="Our Location" />
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 h-[500px] w-full">
            <GoogleMap />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Frequently Asked Questions" subtitle="Common Inquiries" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  How can I join the club?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Membership applications open near the end of monsoon semester or the beginning of the winter semester. You will be notified through whatsapp groups and instagram posts.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  Do I need prior experience to join?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  No prior experience is required! We welcome students of all skill levels and provide training and
                  mentorship for beginners. All you need is enthusiasm and willingness to learn.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  What activities does the club organize?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We organize workshops, competitions, project showcases, and guest lectures throughout the academic
                  year. Check our events page for upcoming activities.
                </p>
              </div>
            </div>
            <div className="space-y-4">              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
                  How can I propose a new project idea?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We encourage members to propose new project ideas! Submit your proposal to your seniors. If approved, you'll receive resources and team
                  members to help bring your idea to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
