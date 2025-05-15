import React from "react";



function Card(params) {
    return(<>
       <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="/path-to-event-image.jpg"
                            alt="Event Name"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                Event Title
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Brief description of the event goes here. It can be a few lines
                                long.
                            </p>
                            <button className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
    </>)
}
export default Card