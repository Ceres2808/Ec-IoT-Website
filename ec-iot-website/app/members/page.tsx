import TeamMemberCard from "@/components/team-member-card"
import SectionHeading from "@/components/section-heading"
import HeaderEffect from "@/components/header-effect"

export default function MembersPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Our Members
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Meet the talented individuals who make up our Electronics and IoT Club.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Faculty Advisor" subtitle="Our Mentor" />
          <div className="grid gap-6 max-w-md mx-auto">
            <TeamMemberCard
              name="Prof. Manodipan Sahoo"
              role="Faculty Advisor"
              department="Electronics and Communication Engineering"
              email="manodipan@iitism.ac.in"
              image="/images/FIC.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Coordinators */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Coordinators" subtitle="Club Leadership" />
          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
            <TeamMemberCard
              name="Ashutosh Rath"
              role="Coordinator"
              department="Electrical Engineering"
              year="3rd Year, UG"
              email="23je0178@iitism.ac.in"
              linkedin="https://www.linkedin.com/in/ashutosh-rath-a6438928b/"
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
      </section>

      {/* Active Members */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <SectionHeading title="Active Members" subtitle="Our Talented Team" />
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">

            {/* UG Members (4th Year) */}
            <TeamMemberCard
              name="Ayushi Kumari"
              role="Member"
              department="Electrical Engineering"
              year="4th Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Soumya Ranjan Das"
              role="Member"
              department="Electrical Engineering"
              year="4th Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Harshit Raghuvanshi"
              role="Member"
              department="Electrical Engineering"
              year="4th Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Sona Kumari"
              role="Member"
              department="Electronics and Communication Engineering"
              year="4th Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Shreya Shradha"
              role="Member"
              department="Electronics and Communication Engineering"
              year="4th Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Rohit Srivastava"
              role="Member"
              department="Electronics and Communication Engineering"
              year="4th Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Shreyashi Chakraborty"
              role="Member"
              department="Electronics and Communication Engineering"
              year="4th Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Dhuruv Goel"
              role="Member"
              department="Electronics and Communication Engineering"
              year="4th Year, UG"
              compact={true}
            />

            {/* UG Members (3rd Year) */}
            <TeamMemberCard
              name="Gorantla Mokshgna"
              role="Member"
              department="Computer Science"
              year="3rd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Pathan Gulamgaush"
              role="Member"
              department="Computer Science & Engineering"
              year="3rd Year, UG"
              compact={true}
            />            
            <TeamMemberCard
              name="Ryali Sriram"
              role="Member"
              department="Electrical Engineering"
              year="3rd Year, UG"
              compact={true}
            />  
            <TeamMemberCard
              name="Arush Srivastava"
              role="Member"
              department="Electrical Engineering"
              year="3rd Year, UG"
              compact={true}
            /> 
            <TeamMemberCard
              name="Aritra Bera"
              role="Member"
              department="Electrical Engineering"
              year="3rd Year, UG"
              compact={true}
            />         
            <TeamMemberCard
              name="Swasti Mishra"
              role="Member"
              department="Electronics and Communication Engineering"
              year="3rd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Kanishk Gupta"
              role="Member"
              department="Electronics and Communication Engineering"
              year="3rd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Jami Narendra"
              role="Member"
              department="Electronics and Communication Engineering"
              year="3rd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Mudapalli Mounika"
              role="Member"
              department="Mathematics and Computing"
              year="3rd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Aditya Pratap Singh"
              role="Member"
              department="Mathematics and Computing"
              year="3rd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Abhijeet Singh Rajput"
              role="Member"
              department="Mechanical Engineering"
              year="3rd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Rachit Raj"
              role="Member"
              department="Electronics and Communication Engineering"
              year="3rd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Tupakulu Harshavardhan"
              role="Member"
              department="Electronics and Communication"
              year="3rd Year, UG"
              compact={true}
            />

            {/* UG Members (2nd Year) */}
            <TeamMemberCard
              name="Pradyumn Agrawal"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Baswaraju Ruthvika"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Poladi Hamsini"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Nichemetla Sai Vishnu Vardhan"
              role="Member"
              department="Electrical Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Chirag Rangwani"
              role="Member"
              department="Electrical Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Bhavesh Jat"
              role="Member"
              department="Electrical Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Challa Satya Harshitha"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="T.V.Saravanesh"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Killi Praveen Kumar"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Sirasani Avinash Reddy"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="K Venkatesh"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Bhuvan Kunchum R"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Sukanya"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Piyush Singh"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Dhananjay Jha"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Shivang Sharma"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Yagyesh Agarwal"
              role="Member"
              department="Electronics and Communication Engineering"
              year="2nd Year, UG"
              compact={true}
            />
            <TeamMemberCard
              name="Dipak Gupta"
              role="Member"
              department="Mining Engineering"
              year="2nd Year, UG"
              compact={true}
            />

            {/* PG Members (2nd Year) */}
            <TeamMemberCard
              name="Abir Roy"
              role="Member"
              department="Electronics and Communication Engineering (VLSI Design)"
              year="2nd Year, PG"
              compact={true}
            />
            <TeamMemberCard
              name="Ishita Visen"
              role="Member"
              department="Electronics and Communication Engineering (VLSI Design)"
              year="2nd Year, PG"
              compact={true}
            />
            </div>
          <div className="mt-8 text-center">
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="w-full py-12 md:py-24 bg-blue-50 dark:bg-blue-950 relative overflow-hidden">
        <HeaderEffect />
        <div className="container px-4 md:px-6 relative z-20">
          <SectionHeading title="Join Our Club" subtitle="Become a Member" />
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400 md:text-lg">
                We're always looking for passionate students to join our club. Membership is open to all students
                interested in electronics and IoT, regardless of their major or experience level.
              </p>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">Benefits of Joining</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Access to our fully equipped electronics lab and components</li>
                <li>Opportunity to work on real-world projects and competitions</li>
                <li>Workshops and training sessions on various technologies</li>
                <li>Networking with experienced seniors</li>
                <li>Potential for internship and job opportunities</li>
              </ul>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mt-6">How to Apply</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Fill out the membership application form (available after recruitment is announced)</li>
                <li>Attend the club orientation sessions</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
