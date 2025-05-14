import Navbar from "../components/navbar";
import FaceCard from "../components/facecard";

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
                            className="w-3/4 h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            <section className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>
                    <ul className="list-disc list-inside text-lg text-gray-500 text-left mx-auto max-w-4xl">
                        <li>The Electronics and IoT Club aims to foster innovation, hands-on learning, and collaboration among enthusiasts of electronics and IoT technologies.</li>
                        <li>Our mission is to empower students with practical skills in electronics, microcontrollers, and IoT applications, preparing them for real-world challenges.</li>
                        <li>Through workshops, projects, and competitions, we provide a platform to explore and apply cutting-edge technologies in fields such as smart devices, automation, and connectivity.</li>
                        <li>Core Focus Areas: Electronics and Electrical systems</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">COMPETITIONS & ACHIEVEMENTS</h2>
                    <h3 className="text-xl font-bold mb-4">COMPETITIONS</h3>
                    <ul className="list-disc list-inside text-lg text-gray-500 mx-auto max-w-4xl">
                        <li>Participated in Eyantra 2023-24 as a team. Problem Statement was Lunar Scout Bot. Developed Matlab Models of Rotary Inverted Pendulum, used LQR Control Strategy, Worked with hardware in Stage 2 to Establish Radio Communication using RF modules and Arduino, Building a self Balancing Bot.</li>
                        <li>Participated in Eyantra 2024-25 as a team. Problem statement was Ecomender Bot. Developed Verilog modules for UART Communication, Color Detection, RISC-V Compiler and Path Planning Algorithm.</li>
                    </ul>
                    <h3 className="text-xl font-bold my-4">ACHIEVEMENTS</h3>
                    <ul className="list-disc list-inside text-lg text-gray-500">
                        <li>Among the top 50 teams (criteria for getting certificate) in Eyantra 2023-24 who qualified for stage 2 of the competition. Stage 1 was running for 4 months.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Event Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4">
                            <img
                                src="workshoppic1.png"
                                alt="Project 1"
                                className="w-full h-40 object-cover mb-4"
                            />
                        </div>
                        <div className="bg-white p-4">
                            <img
                                src="/images/project2.jpg"
                                alt="Project 2"
                                className="w-full h-40 object-cover mb-4"
                            />
                        </div>
                        <div className="bg-white p-4">
                            <img
                                src="/images/project3.jpg"
                                alt="Project 3"
                                className="w-full h-40 object-cover mb-4"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">FIC & COORDINATORS</h2>
                    <FaceCard
                        image="..."
                        name="John Doe"
                        designation="FIC"
                        github=""
                        linkedin="https://www.linkedin.com/in/"
                        email="mailto:"
                    />                    
                </div>
            </section>
        </div>
    );
}