import React from "react";

const Events = () => {
    return (
        <div className="min-h-screen bg-white py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 my-50">
                    EVENTS
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Event Card */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src="/path-to-event-image.jpg"
                            alt="Event Name"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Event Title
                            </h2>
                            <p className="text-gray-600 mt-2">
                                Brief description of the event goes here. It can be a few lines
                                long.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Learn More
                            </button>
                        </div>
                    </div>
                    {/* Add more event cards as needed */}
                </div>
            </div>
        </div>
    );
};

export default Events;