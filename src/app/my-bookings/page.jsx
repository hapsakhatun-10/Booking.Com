import { BookingCancelAlert } from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa6";

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`);
    const bookings = await res.json();

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-white">My Bookings</h1>
                    <p className="mt-2 text-lg text-gray-400">
                        View and manage your travel reservations
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {bookings.length === 0 ? (
                    <div className="text-center py-20 bg-gray-800 rounded-xl shadow-sm border border-gray-700">
                        <FaRegCalendar size={48} className="mx-auto text-gray-500 mb-4" />
                        <p className="text-gray-500 text-lg mb-2">No bookings yet</p>
                        <p className="text-gray-500">Start exploring destinations and book your next adventure</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {bookings.map((booking) => (
                            <div key={booking._id} className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-md">
                                <div className="flex flex-col sm:flex-row">
                                    <div className="sm:w-64 h-48 sm:h-auto flex-shrink-0">
                                        <img
                                            src={booking.imageUrl}
                                            alt={booking.destinationName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-start justify-between mb-2">
                                                <h2 className="text-2xl font-bold text-white">{booking.destinationName}</h2>
                                                <span className="text-3xl font-bold text-teal-400">${booking.price}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400 mb-4">
                                                <FaRegCalendar size={14} />
                                                <p>
                                                    {new Date(booking.departureDate).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </p>
                                            </div>
                                            <p className="text-sm text-gray-500 font-mono">
                                                Booking ID: {booking._id}
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-gray-700 flex justify-end">
                                            <BookingCancelAlert bookingId={booking._id} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyBookingPage;