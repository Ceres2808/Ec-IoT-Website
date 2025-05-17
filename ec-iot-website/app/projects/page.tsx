import ProjectCard from "@/components/project-card"
import SectionHeading from "@/components/section-heading"
import HeaderEffect from "@/components/header-effect"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Projects
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore our innovative projects in electronics and Internet of Things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Ongoing Projects" subtitle="What We're Working On" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Portable EMI/EMC Meter"
              description="A portable EMI/EMC meter that will send alert signals if the EM interference due to nearby transmission systems exceeds the safety limit."
              technologies={["EASYEDA", "ARDUINO IDE", "RASPBERRY PI PICO"]}
              image="placeholder-logo.png"
              ongoing={true}
            />
            <ProjectCard
              title="RFID Security System"
              description="A security system that uses RFID technology to control access to restricted areas."
              technologies={["ESP32", "RFID", "LTSPICE"]}
              image="placeholder-logo.png"
              demoLink="video.mp4"
              ongoing={true}
            />
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Project Ideas" subtitle="Get Involved" />
          <div className="space-y-6">
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              We're always looking for new project ideas and team members. If you have an idea for a project or want to
              join an existing project team, reach out to us!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
