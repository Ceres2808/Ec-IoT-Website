import Image from "next/image"
import SectionHeading from "@/components/section-heading"
import HeaderEffect from "@/components/header-effect"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                About Our Club
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Learn more about our mission and the passionate team behind the Electronics and IoT Club.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <SectionHeading title="Our Mission" subtitle="Why We Exist" centered={false} />
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
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                We focus on core areas including electronics and electrical systems, embedded programming, IoT
                protocols, and sensor technologies. Our goal is to create a collaborative environment where ideas can
                flourish and where students can develop both technical and soft skills.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video">
                <Image
                  src="/images/logo.png"
                  alt="Our Mission"
                  width={500}
                  height={280}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Our History" subtitle="How We Started" />
          <div className="space-y-6">
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              The Electronics and IoT Club at IIT ISM Dhanbad was founded by a group of passionate students who wanted
              to create a community for those interested in electronics and emerging IoT technologies. What started as
              informal meetups has grown into one of the most active technical clubs on campus.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Over the years, we have organized numerous workshops, hackathons, and competitions. Our members have gone
              on to participate in national competitions like Eyantra, secure internships at leading tech companies, and
              pursue advanced degrees in related fields.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Today, the club continues to grow and evolve, adapting to the rapidly changing technological landscape
              while staying true to our core mission of fostering innovation and technical excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
