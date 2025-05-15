import Image from 'next/image';
const events = [
    {
        title: 'Internal workshop on Motor and motor drivers with arduino',
        details: 'Conducted by Pre final year btech.',
        date: 'February’ 24',
        attendance: '30 participants',
        imageUrl: '/images/smart-home.jpg',
    },
    {
        title: 'Internal workshop on using LCD display and sensors using Arduino',
        details: 'Conducted by final year Btech.',
        date: 'March’24',
        attendance: '30 participants',
        imageUrl: '/images/lcd-sensors.jpg',
    },
    {
        title: 'Workshop on using LTSPICE',
        details: 'Conducted by 4th year btech club seniors who had internship experience of using it',
        date: 'March’24',
        attendance: '30 participants',
        imageUrl: '/images/ltspice.jpg',
    },
    {
        title: 'Workshop on sensor technology and application',
        details: 'Conducted by prof. Kishore Nandapurkar and prof. Manodipan Sahoo , Theory and practical both were covered',
        date: 'September’24',
        attendance: '35 participants',
        imageUrl: '/images/sensor-tech.jpg',
    },
    {
        title: 'Electrodesign battle 2.0',
        details: 'Conducted as a circuit design competition using LTSPICE in concetto',
        date: 'October’24',
        attendance: '25 teams ( team size 1-3)',
        imageUrl: '/images/sensor-tech.jpg',
    },
];

export default function Events() {
    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-4xl font-bold my-20 text-center">OUR EVENTS</h1>
            <div className="w-full flex flex-col gap-8 items-center">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-6 rounded-lg w-full md:w-3/4 shadow"
                    >
                        <Image
                            src={event.imageUrl}
                            alt={event.title}
                            width={250}
                            height={180}
                            className="rounded-lg mb-4 md:mb-0 md:mr-6"
                        />
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                            <p className="text-gray-700 mb-2">{event.details}</p>
                            <p className="text-gray-500 mb-1">Date: {event.date}</p>
                            <p className="text-gray-500">Attendance: {event.attendance}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
