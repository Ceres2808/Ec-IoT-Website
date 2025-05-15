import Navbar from "../components/navbar";


export default function Homepage() {
    return (
        <div>
            <Navbar />

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
                    className="max-w-md w-3/4 h-auto rounded-lg shadow-lg hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300"
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
                                className="max-w-md w-3/4 h-[300px] rounded-lg shadow-lg hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

<section className="bg-gray-100 py-14">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12">Member Statistics</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">First Year(B.TECH)</h3>
        <p className="text-2xl font-semibold text-blue-600">26</p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Second Year(B.TECH)</h3>
        <p className="text-2xl font-semibold text-green-600">22</p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Third Year(B.TECH)</h3>
        <p className="text-2xl font-semibold text-purple-600">12</p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Fourth Year(B.TECH)</h3>
        <p className="text-2xl font-semibold text-red-600">8</p>
      </div>
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
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
                        <img src="Picture2.jpg" alt="Gallery 1" className="hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300 w-full h-[380px] object-cover rounded-lg shadow-md" />
                        <img src="Picture4.jpg" alt="Gallery 2" className="hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300 w-full h-[380px] object-cover rounded-lg shadow-md" />
                        <img src="Picture3.jpg" alt="Gallery 3" className="hover:shadow-xl hover:scale-105 focus:scale-105 transition duration-300 w-full h-[380px] object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </section>

           <section className="bg-white py-[75px]">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">FIC & COORDINATORS</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-64 md:w-72 flex flex-col items-center">
        <img
          src="FIC.jpg"
          alt="Prof. Manodipan Sahoo "
          className="w-40 h-40 rounded-3xl object-cover mb-4 border-2 "
        />
        <h3 className="text-xl font-bold text-gray-800 mb-1">Prof. Manodipan Sahoo </h3>
        <p className="text-md text-gray-500 mb-3">FIC</p>
        <div className="flex space-x-4">
                  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
   </a>
          <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
          </a>
          <a href="mailto:manodipan@iitism.ac.in ">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
          </a>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-64 md:w-72 flex flex-col items-center">
        <img
          src="coordinator.jpg"
          alt=" Soumya Ranjan Das "
          className="w-40 h-40 rounded-3xl object-cover mb-4 border-2"
        />
        <h3 className="text-xl font-bold text-gray-800 mb-1"> Soumya Ranjan Das </h3>
        <p className="text-md text-gray-500 mb-3">COORDINATOR</p>
        <div className="flex space-x-4">
                           <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
   </a>
          <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
          </a>
        <a href="mailto:">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
          </a>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-64 md:w-72 flex flex-col items-center">
        <img
          src="co-coordinator.jpg"
          alt="Harshit Raghuvanshi "
          className="w-40 h-40 rounded-3xl object-cover mb-4 border-2"
        />
        <h3 className="text-xl font-bold text-gray-800 mb-1">Harshit Raghuvanshi </h3>
        <p className="text-md text-gray-500 mb-3">CO-COORDINATOR</p>
        <div className="flex space-x-4">
                           <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
   </a>
          <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
          </a>
          <a href="mailto:electronics.club.iitism@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}
