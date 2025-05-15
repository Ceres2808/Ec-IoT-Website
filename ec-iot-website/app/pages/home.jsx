import FaceCard from "../components/facecard";


export default function Homepage() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                    <div className="md:w-1/2 text-left">
                        <h1 className="text-7xl font-bold mb-4 mx-8 text-gray-700">ELECTRONICS & IOT CLUB</h1>
                        <p className="text-2xl font-bold text-gray-500 mb-8 mx-8">IIT (ISM) DHANBAD</p>
                        <button className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 transition duration-300 mx-8">
                            OUR PROJECTS
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="homepageimg.png"
                            alt="Homepage Illustration"
                            className="max-w-md w-3/4 h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
<section className="bg-white py-10" >
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 mt-[60px]">
                <img
                    src="electronics.jpeg"
                    alt="About Us"
                    className="max-w-md w-3/4 h-auto shadow-lg hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300"
                />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-12">
                <h2 className="text-3xl font-bold mb-12 text-center md:text-left">ABOUT US</h2>
                <ul className="list-disc list-inside text-lg text-gray-500">
                    <li>The Electronics and IoT Club aims to foster innovation, hands-on learning, and collaboration among enthusiasts of electronics and IoT technologies.</li>
                    <li>Our mission is to empower students with practical skills in electronics, microcontrollers, and IoT applications, preparing them for real-world challenges.</li>
                    <li>Through workshops, projects, and competitions, we provide a platform to explore and apply cutting-edge technologies in fields such as smart devices, automation, and connectivity.</li>
                    <li>Core Focus Areas: Electronics and Electrical systems</li>
                </ul>
            </div>
        </div>
    </div>
</section>
            <section className="bg-white pt-20 pb-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start justify-between">
                        <div className="w-full md:w-1/2 md:pr-12 ml-4 md:ml-12">
                            <h2 className="text-3xl font-bold mb-12 text-center md:text-left">COMPETITIONS & ACHIEVEMENTS</h2>
                            <h3 className="text-xl font-bold mb-4">COMPETITIONS</h3>
                            <ul className="list-disc list-inside text-lg text-gray-500">
                                <li>Participated in Eyantra 2023-24 as a team. Problem Statement was Lunar Scout Bot. Developed Matlab Models of Rotary Inverted Pendulum, used LQR Control Strategy, Worked with hardware in Stage 2 to Establish Radio Communication using RF modules and Arduino, Building a self Balancing Bot.</li>
                                <li>Participated in Eyantra 2024-25 as a team. Problem statement was Ecomender Bot. Developed Verilog modules for UART Communication, Color Detection, RISC-V Compiler and Path Planning Algorithm.</li>
                            </ul>
                            <h3 className="text-xl font-bold my-4">ACHIEVEMENTS</h3>
                            <ul className="list-disc list-inside text-lg text-gray-500">
                                <li>Among the top 50 teams (criteria for getting certificate) in Eyantra 2023-24 who qualified for stage 2 of the competition. Stage 1 was running for 4 months.</li>
                            </ul>
                             <h3 className="text-xl font-bold my-4">Noteworthy Projects:</h3>
                            <ul className="list-disc list-inside text-lg text-gray-500">
                                <li>A 2nd year club member + a first year group is doing a project of portable EMI/EMC meter that will send alert signal if the EM interference due to nearby transmission systems is greater than the limit.</li>
                                <li>1st years under the guidance of prof. Manodipan Sahoo working  on RFID Security system.</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center  mt-48">
                            <img
                                src="workshoppic1.png"
                                alt="Competition"
                                className="max-w-md w-3/4 h-[300px] shadow-lg hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

<section className="bg-gray-100 py-14">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12">Member Statistics</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div className="bg-white shadow-md p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">First Year(B.TECH)</h3>
        <p className="text-2xl font-semibold text-blue-600">26</p>
      </div>
      <div className="bg-white shadow-md p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Second Year(B.TECH)</h3>
        <p className="text-2xl font-semibold text-green-600">22</p>
      </div>
      <div className="bg-white shadow-md p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Third Year(B.TECH)</h3>
        <p className="text-2xl font-semibold text-purple-600">12</p>
      </div>
      <div className="bg-white shadow-md p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Fourth Year(B.TECH)</h3>
        <p className="text-2xl font-semibold text-red-600">8</p>
      </div>
      <div className="bg-white shadow-md p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">MTech & PHD</h3>
        <p className="text-2xl font-semibold text-yellow-600">5</p>
      </div>
    </div>
  </div>
</section>

      
            <section className="bg-white py-14">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-16">Event Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <img src="Picture2.jpg" alt="Gallery 1" className="hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300 w-full h-[380px] object-cover  -lg shadow-md" />
                        <img src="Picture4.jpg" alt="Gallery 2" className="hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300 w-full h-[380px] object-cover  -lg shadow-md" />
                        <img src="Picture3.jpg" alt="Gallery 3" className="hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300 w-full h-[380px] object-cover  -lg shadow-md" />
                    </div>
                </div>
            </section>


        <section className="bg-white py-[75px]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">FIC & COORDINATORS</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <FaceCard
                image="FIC.jpg"
                name="Prof. Manodipan Sahoo"
                role="FIC"
                githubLink="https://www.github.com"
                linkedinLink="https://www.linkedin.com/in/"
                email="manodipan@iitism.ac.in"
              />
              <FaceCard
                image="coordinator.jpg"
                name="Soumya Ranjan Das"
                role="COORDINATOR"
                githubLink="https://www.github.com"
                linkedinLink="https://www.linkedin.com/in/"
                email=""
              />
              <FaceCard
                image="co-coordinator.jpg"
                name="Harshit Raghuvanshi"
                role="CO-COORDINATOR"
                githubLink="https://www.github.com"
                linkedinLink="https://www.linkedin.com/in/"
                email="electronics.club.iitism@gmail.com"
              />
            </div>
          </div>
        </section>

        </div>
    );
}
