"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteAlert({ destination }) {
    const { _id, destinationName } = destination;


    const handleDelete = async () => {

        const res = await fetch(`http://localhost:5000/destination/${_id}`, {

            method: "DELETE",
            headers: {
                "content-type": "applicatiom/json",
            }

        })

        const data = res.json
        redirect('/destinations')
        console.log(data)

    }


    return (
        <AlertDialog>
            <Button className="text-red-400 border border-red-800 hover:bg-red-900/30 rounded-lg px-4 py-2 transition-all duration-200" variant="outline">
                <TrashBin size={16} /> Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px] rounded-xl">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-lg font-bold text-white">
                                Delete destination permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-gray-400">
                                This will permanently delete <strong>{destinationName}</strong>{" "}
                                and all of its data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" className="rounded-lg">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger" className="rounded-lg">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}