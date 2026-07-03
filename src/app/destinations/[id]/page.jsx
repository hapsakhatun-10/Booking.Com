import BookingCard from "@/components/BookingCard";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";
import { FaRegCalendar } from "react-icons/fa";
import { ImGift } from "react-icons/im";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        headers: { autorization: "logged in" }
    });
    const destination = await res.json();

    const {
        destinationName,
        imageUrl,
        country,
        duration,
        description,
    } = destination;

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-end items-center gap-2 mb-6">
                    <EditModal destination={destination} />
                    <DeleteAlert destination={destination} />
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-10">
                    <img
                        className="w-full h-[500px] object-cover"
                        alt={destinationName}
                        src={imageUrl}
                        width={1200}
                        height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-center gap-4 text-white/80 mb-2">
                            <div className="flex items-center gap-1.5">
                                <LuMapPin size={16} />
                                <span>{country}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <FaRegCalendar size={14} />
                                <span>{duration} Days</span>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white">
                            {destinationName}
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                        <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Overview
                            </h2>
                            <div className="w-12 h-1 bg-teal-500 rounded-full mb-6" />

                            <p className="text-gray-300 leading-relaxed text-lg">
                                {description}
                            </p>

                            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-700">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-teal-400">{duration}</div>
                                    <div className="text-sm text-gray-400 mt-1">Days</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-teal-400">{country}</div>
                                    <div className="text-sm text-gray-400 mt-1">Country</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-teal-400">${destination.price}</div>
                                    <div className="text-sm text-gray-400 mt-1">Per Person</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-[380px] flex-shrink-0">
                        <div className="lg:sticky lg:top-8">
                            <BookingCard destination={destination} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;