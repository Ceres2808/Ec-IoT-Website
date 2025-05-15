import Image from 'next/image';

const projects = [
    {
        title: 'Smart Home Automation',
        description: 'A project focused on automating home appliances using IoT technology.',
        imageUrl: '/images/smart-home.jpg',
    },
    {
        title: 'IoT Weather Station',
        description: 'A weather monitoring system that collects and displays real-time data.',
        imageUrl: '/images/weather-station.jpg',
    },
    {
        title: 'Connected Healthcare',
        description: 'An IoT solution for remote health monitoring and patient care.',
        imageUrl: '/images/connected-healthcare.jpg',
    },
];

export default function Projects() {
    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold my-20 text-center">OUR PROJECTS</h1>
            <div className="w-full flex flex-col gap-8 items-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-6 rounded-lg w-full md:w-3/4 shadow"
                    >
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={250}
                            height={180}
                            className="rounded-lg mb-4 md:mb-0 md:mr-6"
                        />
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-700">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
