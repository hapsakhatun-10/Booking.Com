import React from 'react';
import DestinationCard from '@/components/DestinationCard';
import { LuMapPin } from 'react-icons/lu';

const DestinationPage = async () => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-white">Explore Destinations</h1>
                    <p className="mt-2 text-lg text-gray-400">
                        Discover your next adventure from our curated collection of travel experiences
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {destinations.length === 0 ? (
                    <div className="text-center py-20">
                        <LuMapPin size={48} className="mx-auto text-gray-500 mb-4" />
                        <p className="text-gray-500 text-lg">No destinations available yet</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {destinations.map(destination => (
                            <DestinationCard key={destination._id} destination={destination} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DestinationPage;