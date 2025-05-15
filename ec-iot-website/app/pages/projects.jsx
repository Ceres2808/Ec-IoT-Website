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
        <div className="p-5 flex flex-col items-center">
            <h1 className="text-4xl font-bold my-50 text-center">OUR PROJECTS</h1>
            <div className="w-full flex flex-col items-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center mb-5 p-4 w-3/4"
                    >
                        <div className="mr-4">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                width={200}
                                height={150}
                                className="rounded-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">{project.title}</h2>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
