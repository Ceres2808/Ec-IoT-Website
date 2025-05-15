import React from "react";
import FaceCard from "../components/facecard";

const Members = () => {
    return (
        <div className="min-h-screen px-6 py-16 flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-12 mt-12 ">OUR TEAM</h1>

            {/* FIC Section */}
            <section className="w-full max-w-6xl mb-16">
                <h2 className="text-2xl font-semibold mb-8">FACULTY IN-CHARGE (FIC)</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <FaceCard
                        image="FIC.jpg"
                        name="Dr. Manodipan Sahoo"
                        role=" FACULTY IN-CHARGE"
                        githubLink="https://github.com/fic-profile"
                        linkedinLink="https://linkedin.com/in/fic-profile"
                        email="fic@example.com"
                    />
                </div>
            </section>

            {/* Coordinators Section */}
            <section className="w-full max-w-6xl mb-16">
                <h2 className="text-2xl font-semibold mb-8">COORDINATORS</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <FaceCard
                        image="coordinator.jpg"
                        name="Ashutosh Rath"
                        role="COORDINATOR"
                        githubLink="https://github.com/coordinator-profile"
                        linkedinLink="https://www.linkedin.com/in/ashutosh-rath-a6438928b/"
                        email="coordinator@example.com"
                    />
                    <FaceCard
                        image="co-coordinator.png"
                        name="Prantik Basu"
                        role=" CO-COORDINATOR"
                        githubLink="https://github.com/member-profile"
                        linkedinLink="https://www.linkedin.com/in/basuprantik/"
                        email="prantikbasu23@gmail.com"
                    />
                </div>
            </section>

            {/* Members Section */}
            <section className="w-full max-w-6xl">
                <h2 className="text-2xl font-semibold mb-8">MEMBERS</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                    <FaceCard
                        image="/pictures/example.jpeg"
                        name="Member Name"
                        role="MEMBER"
                        github="https://github.com/member-profile"
                        linkedin="https://linkedin.com/in/member-profile"
                        email="beraaritra28@gmail.com"
                    />
                </div>
            </section>
        </div>
    );
};

export default Members;
