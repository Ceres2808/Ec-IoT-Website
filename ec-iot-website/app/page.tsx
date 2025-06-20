import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import EventCard from "@/components/event-card"
import TeamMemberCard from "@/components/team-member-card"
import AchievementCard from "@/components/achievement-card"
import SectionHeading from "@/components/section-heading"
import HeaderEffect from "@/components/header-effect"
import MemberDistribution from "@/components/member-distribution"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl mt-5">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter glitch-text">ELECTRONICS & IOT CLUB</h1>
              <p className="text-xl md:text-2xl font-medium">IIT ISM DHANBAD</p>
            </div>
            <div className="mt-6 max-w-2xl text-center">
              <p className="text-gray-600 dark:text-gray-300">
                Fostering innovation, hands-on learning, and collaboration among enthusiasts of electronics and IoT
                technologies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-600 hover:to-blue-600 dark:from-blue-600 dark:to-pink-600 dark:hover:from-pink-800 dark:hover:to-blue-800 text-white group"
              >
                <Link href="/projects">
                  Explore Projects{" "}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="About Us" subtitle="Who We Are" />
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                The Electronics and IoT Club aims to foster innovation, hands-on learning, and collaboration among
                enthusiasts of electronics and IoT technologies.
              </p>
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                Our mission is to empower students with practical skills in electronics, microcontrollers, and IoT
                applications, preparing them for real-world challenges. Through workshops, projects, and competitions,
                we provide a platform to explore and apply cutting-edge technologies in fields such as smart devices,
                automation, and connectivity.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video">
                <Image
                  src="/images/logo.png"
                  alt="Club Activities"
                  width={500}
                  height={280}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Member Statistics" subtitle="Our Growing Community" />
          <div className="mt-6">
            <MemberDistribution />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Competitions & Achievements" subtitle="Our Success Stories" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AchievementCard
              title="Eyantra 2023-24"
              description="Among the top 50 teams who qualified for stage 2 of the competition. Developed Matlab Models of Rotary Inverted Pendulum and used LQR Control Strategy."
              year="2023"
              image="/images/eyantra1.png"
            />
            <AchievementCard
              title="Eyantra 2024-25"
              description="Participated as a team with problem statement Ecomender Bot. Developed Verilog modules for UART Communication, Color Detection, RISC-V Compiler and Path Planning Algorithm."
              year="2024"
              image="/images/eyantra2.png"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
                <Link href="/achievements" className="group">
                View All Achievements{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Event Gallery" subtitle="Recent Activities" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <EventCard
              title="Workshop on Sensor Technology"
              description="Conducted by Prof. Kishore Nandapurkar and Prof. Manodipan Sahoo, covering both theory and practical aspects"
              date="September 2024"
              image="/images/event1.png"
            />
            <EventCard
              title="Internal Workshop on Arduino"
              description="Workshop on Motor and motor drivers with Arduino conducted by pre-final year BTech students"
              date="February 2024"
              image="/images/event2.png"
            />
            <EventCard
              title="Workshop on LTSPICE"
              description="Conducted by 4th year BTech club seniors with internship experience using the software"
              date="March 2024"
              image="/images/event3.png"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
                <Link href="/events" className="group">
                View All Events{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Faculty & Coordinators */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Our Team" subtitle="Faculty In-Charge & Coordinators" />
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Faculty In-Charge</h3>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-md mx-auto">
              <TeamMemberCard
                name="Prof. Manodipan Sahoo"
                role="Faculty Advisor"
                department="Electronics and Communication Engineering"
                email="manodipan@iitism.ac.in"
                image="/images/FIC.jpeg"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Student Coordinators</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-2xl mx-auto">
              <TeamMemberCard
                name="Ashutosh Rath"
                role="Coordinator"
                department="Electrical Engineering"
                year="3rd Year, UG"
                email="23je0178@iitism.ac.in"
                linkedin="https://www.linkedin.com/in/ashutosh-rath-a6438928b"
                image="/images/coordinator.jpg"
              />
              <TeamMemberCard
                name="Prantik Basu"
                role="Co-Coordinator"
                department="Electronics and Communication Engineering"
                year="3rd Year, UG"
                email="prantikbasu23@gmail.com"
                linkedin="https://www.linkedin.com/in/basuprantik/"
                image="/images/co-coordinator.png"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
                <Link href="/members" className="group">
                View All Members{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
