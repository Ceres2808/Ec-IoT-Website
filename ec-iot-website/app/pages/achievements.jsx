import React from 'react';

const Achievements = () => {
    return (
  <> <section className="bg-white pt-20 pb-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start justify-between">
                        <div className="w-full md:w-1/2 md:pr-12 ml-4 md:ml-12">
                            <h2 className="text-4xl font-bold my-20 text-center md:text-left"> ACHIEVEMENTS & COMPETITIONS </h2>
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
                                className="max-w-md w-3/4"
                            />
                        </div>
                    </div>
                </div>
            </section></>
    );
};

export default Achievements;