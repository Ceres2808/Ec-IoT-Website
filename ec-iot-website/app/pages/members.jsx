import React from "react";
import FaceCard from "../components/facecard";

const members = () => {
    return (
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
            <h1 className="text-4xl my-50 font-bold">OUR TEAM</h1>

            {/* FIC Section */}
            <section className="my-10 w-full">
                <h2 className="text-2xl font-semibold mb-6">Faculty In-Charge (FIC)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
                    <FaceCard
                        image="FIC.jpg"
                        name="FIC Name"
                        designation="Designation"
                        github="https://github.com/fic-profile"
                        linkedin="https://linkedin.com/in/fic-profile"
                        email="fic@example.com"
                    />
                </div>
            </section>

            {/* Co-Coordinators Section */}
            <section className="my-10 w-full">
                <h2 className="text-2xl font-semibold mb-6">Co-Coordinators</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
                    <FaceCard
                        image="coordinator.jpg"
                        name="Coordinator Name"
                        designation="Role"
                        github="https://github.com/coordinator-profile"
                        linkedin="https://linkedin.com/in/coordinator-profile"
                        email="coordinator@example.com"
                    />
                </div>
            </section>

            {/* Members Section */}
            <section className="my-10 w-full">
                <h2 className="text-2xl font-semibold mb-6">Members</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
                    <FaceCard
                        image="co-coordinator.jpg"
                        name="Member Name"
                        designation="Role"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="member@example.com"
                    />
                </div>
            </section>
        </div>
    );
};

export default members;
