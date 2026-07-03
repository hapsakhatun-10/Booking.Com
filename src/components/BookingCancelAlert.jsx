"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

export function BookingCancelAlert({ bookingId }) {

    const handleCancelBooking = async () => {

        const { data: tokenData } = await authClient.token()

        const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            }
        })

        const data = await res.json();

        window.location.reload();


    }


    return (
        <AlertDialog>
            <Button
                className="border border-red-800 text-red-400 hover:bg-red-900/30 rounded-lg px-4 py-2 text-sm transition-all duration-200"
                variant="outline"
            >
                <TrashBin size={14} /> Cancel Booking
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] rounded-xl">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-lg font-bold text-white">
                                Cancel Booking permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-gray-400">
                                Are you sure you want to cancel this booking? This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" className="rounded-lg">
                                Keep Booking
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger" className="rounded-lg">
                                Yes, Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}