"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label, } from "@heroui/react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
    const { price, _id, destinationName, imageUrl, country } = destination;

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [departureDate, setDepartureDate] = useState(null);

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate: new Date(departureDate)

        };



        const res = await fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        })

        const data = await res.json();
        console.log(data)


    };

    return (
        <Card className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-8">
            <div className="mb-6 pb-6 border-b border-gray-700">
                <p className="text-sm text-gray-400 mb-1">Starting from</p>
                <div className="flex items-baseline gap-1">
                    <h2 className="text-5xl font-bold text-teal-400">
                        ${price}
                    </h2>
                    <span className="text-gray-500 text-sm">/person</span>
                </div>
            </div>

            <div className="mb-6">
                <DateField className="w-full" name="date">
                    <Label className="text-sm font-medium text-gray-300 mb-2 block">Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>
                            {(segment) => (
                                <DateField.Segment segment={segment} />
                            )}
                        </DateField.Input>
                    </DateField.Group>
                </DateField>
            </div>

            <Button
                onClick={handleBooking}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-6 text-base font-semibold mb-6 transition-all duration-200"
            >
                Book Now →
            </Button>

            <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-green-500 text-xs" />
                    </div>
                    <span>Free cancellation up to 7 days</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-green-500 text-xs" />
                    </div>
                    <span>Travel insurance included</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-green-500 text-xs" />
                    </div>
                    <span>24/7 customer support</span>
                </div>
            </div>
        </Card>
    );
};

export default BookingCard;