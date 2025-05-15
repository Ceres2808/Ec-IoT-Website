import React from "react";
import Card from "../components/eventcard";

const Events = () => {
    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 mt-12">
                    EVENTS
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Example Event Card */}

<Card/>
<Card/>
<Card/>
<Card/>
<Card/>



                    
                </div>
            </div>
        </div>
    );
};

export default Events;
