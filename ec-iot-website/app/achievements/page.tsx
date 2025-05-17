import AchievementCard from "@/components/achievement-card"
import SectionHeading from "@/components/section-heading"
import HeaderEffect from "@/components/header-effect"

export default function AchievementsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Achievements
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Celebrating our successes and recognitions in competitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Achievements */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Competition Achievements" subtitle="Our Best Moments" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AchievementCard
              title="Eyantra 2023-24"
              description="Among the top 50 teams who qualified for stage 2 of the competition. Developed Matlab Models of Rotary Inverted Pendulum and used LQR Control Strategy."
              year="2023"
              image="/images/eyantra1.png"
            />
            <AchievementCard
              title="Eyantra 2024-25"
              description="Participated with problem statement Ecomender Bot. Developed Verilog modules for UART Communication, Color Detection, RISC-V Compiler and Path Planning Algorithm."
              year="2024"
              image="/images/eyantra2.png"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Noteworthy Projects" subtitle="Innovation in Action" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Portable EMI/EMC Meter</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                A 2nd year club member and a first year group are developing a portable EMI/EMC meter that will send
                alert signals if the electromagnetic interference due to nearby transmission systems exceeds the safety
                limit.
              </p>
              <div className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">•</div>
                <p className="text-gray-500 dark:text-gray-400">Monitors electromagnetic interference in real-time</p>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">•</div>
                <p className="text-gray-500 dark:text-gray-400">Portable design for field measurements</p>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">•</div>
                <p className="text-gray-500 dark:text-gray-400">Alert system for safety compliance</p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">RFID Security System</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                First-year students are working under the guidance of Professor Manodipan Sahoo on the development of an RFID-based security system.
              </p>
              <div className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">•</div>
                <p className="text-gray-500 dark:text-gray-400">Access control using RFID technology</p>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">•</div>
                <p className="text-gray-500 dark:text-gray-400">Integration with digital systems</p>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-1 text-blue-600 dark:text-blue-400">•</div>
                <p className="text-gray-500 dark:text-gray-400">Mentored by faculty for real-world applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
