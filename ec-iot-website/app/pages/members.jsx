import React from "react";
import FaceCard from "../components/facecard";

const Members = () => {
    return (
        <div className="min-h-screen px-6 py-16 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-12 mt-12 ">OUR TEAM</h1>

            {/* FIC Section */}
            <section className="w-full max-w-6xl mb-16">
                <h2 className="text-2xl font-semibold mb-8">Faculty In-Charge (FIC)</h2>
                <div className="flex flex-wrap justify-center gap-8">
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
            <section className="w-full max-w-6xl mb-16">
                <h2 className="text-2xl font-semibold mb-8">Co-Coordinators</h2>
                <div className="flex flex-wrap justify-center gap-8">
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
            <section className="w-full max-w-6xl">
                <h2 className="text-2xl font-semibold mb-8">Members</h2>
                <div className="flex flex-wrap justify-center gap-8">
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

export default Members;
