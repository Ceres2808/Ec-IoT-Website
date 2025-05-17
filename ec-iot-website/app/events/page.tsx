import { Calendar } from "lucide-react"
import EventCard from "@/components/event-card"
import SectionHeading from "@/components/section-heading"
import HeaderEffect from "@/components/header-effect"
import Image from "next/image"

export default function EventsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">Events</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Stay updated with our upcoming events and revisit our past activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Recent Workshops" subtitle="Learning Opportunities" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Workshop on Sensor Technology"
              description="Conducted by Prof. Kishore Nandapurkar and Prof. Manodipan Sahoo, covering both theory and practical aspects"
              date="September 2024"
              location="IIT ISM Dhanbad"
              image="/images/event1.png"
            />
            <EventCard
              title="Internal Workshop on Arduino"
              description="Workshop on Motor and motor drivers with Arduino conducted by pre-final year BTech students"
              date="February 2024"
              location="IIT ISM Dhanbad"
              image="/images/event2.png"
            />
            <EventCard
              title="Workshop on LTSPICE"
              description="Conducted by 4th year BTech club seniors with internship experience using the software"
              date="March 2024"
              location="IIT ISM Dhanbad"
              image="/images/event3.png"
            />
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Event Calendar" subtitle="Recent Activities" />
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="h-6 w-6 mr-2 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">2024 Events</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-2">
                <p className="font-semibold">September 2024</p>
                <p className="text-gray-500 dark:text-gray-400">Workshop on Sensor Technology and Application</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Conducted by Prof. Kishore Nandapurkar and Prof. Manodipan Sahoo
                </p>
              </div>
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-2">
                <p className="font-semibold">March 2024</p>
                <p className="text-gray-500 dark:text-gray-400">Workshop on using LTSPICE</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">Conducted by 4th year BTech club seniors</p>
              </div>
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-2">
                <p className="font-semibold">March 2024</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Internal workshop on using LCD display and sensors using Arduino
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">Conducted by final year BTech students</p>
              </div>
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-2">
                <p className="font-semibold">February 2024</p>
                <p className="text-gray-500 dark:text-gray-400">
                  Internal workshop on Motor and motor drivers with Arduino
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">Conducted by pre-final year BTech students</p>
              </div>
              <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-2">
                <p className="font-semibold">October 2024</p>
                <p className="text-gray-500 dark:text-gray-400">Electrodesign Battle 2.0</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Circuit design competition using LTSPICE in Concetto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Competition Participation" subtitle="Our Teams in Action" />
          <div className="grid gap-6 md:grid-cols-2">
            <EventCard
              title="Eyantra 2023-24"
              description="Participated with problem statement Lunar Scout Bot. Developed Matlab Models of Rotary Inverted Pendulum and used LQR Control Strategy."
              date="2023-2024"
              location="National Competition"
              image="/images/eyantra1.png"
            />
            <EventCard
              title="Eyantra 2024-25"
              description="Participated with problem statement Ecomender Bot. Developed Verilog modules for UART Communication, Color Detection, RISC-V Compiler and Path Planning Algorithm."
              date="2024-2025"
              location="National Competition"
              image="/images/eyantra2.png"
            />
          </div>
        </div>
      </section>

      {/* Workshop Photos */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Workshop Photos" subtitle="Glimpses of Our Activities" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/event2.png"
                  alt="Workshop Photo 1"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                Arduino Workshop - February 2024
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/event3.png"
                  alt="Workshop Photo 2"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">LTSPICE Workshop - March 2024</p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/event1.png"
                  alt="Workshop Photo 3"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                Sensor Technology Workshop - September 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
