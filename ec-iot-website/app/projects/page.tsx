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
              title="Smart Traffic Management"
              description="AI-powered traffic management system using computer vision to optimize traffic flow and reduce congestion in urban areas."
              technologies={["Jetson Nano", "TensorFlow", "OpenCV", "MQTT"]}
              image="/placeholder.svg?height=200&width=300"
              repoLink="https://github.com/example/traffic-management"
              ongoing={true}
            />
            <ProjectCard
              title="Wearable Health Monitor"
              description="Compact wearable device that monitors vital signs and provides real-time health insights through a companion mobile app."
              technologies={["ESP32", "BLE", "React Native", "Machine Learning"]}
              image="/placeholder.svg?height=200&width=300"
              repoLink="https://github.com/example/health-monitor"
              ongoing={true}
            />
            <ProjectCard
              title="Smart Energy Grid"
              description="Distributed energy management system for optimizing power consumption in buildings using predictive analytics and IoT sensors."
              technologies={["Raspberry Pi", "Node.js", "TensorFlow", "MQTT"]}
              image="/placeholder.svg?height=200&width=300"
              repoLink="https://github.com/example/smart-grid"
              ongoing={true}
            />
            <ProjectCard
              title="Gesture Controlled Drone"
              description="Custom-built drone that can be controlled using hand gestures captured by a camera and processed using computer vision algorithms."
              technologies={["Arduino", "OpenCV", "Python", "3D Printing"]}
              image="/placeholder.svg?height=200&width=300"
              repoLink="https://github.com/example/gesture-drone"
            />
            <ProjectCard
              title="Smart Waste Management"
              description="IoT-based waste bin monitoring system that optimizes collection routes based on fill levels and historical data."
              technologies={["ESP8266", "LoRaWAN", "Node.js", "MongoDB"]}
              image="/placeholder.svg?height=200&width=300"
              repoLink="https://github.com/example/waste-management"
            />
            <ProjectCard
              title="Interactive LED Matrix"
              description="Programmable LED matrix display with web interface for creating custom animations and visualizations."
              technologies={["Arduino", "WS2812B LEDs", "React", "WebSockets"]}
              image="/placeholder.svg?height=200&width=300"
              repoLink="https://github.com/example/led-matrix"
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
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Current Project Needs</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Mobile app developers for the Wearable Health Monitor project</li>
                <li>Machine learning enthusiasts for the Smart Traffic Management project</li>
                <li>Hardware designers for upcoming robotics projects</li>
                <li>UI/UX designers for various project interfaces</li>
                <li>Documentation specialists for all projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
