"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { BiEdit } from "react-icons/bi";

export function EditModal({ destination }) {

    const {
        _id,
        imageUrl,
        price,
        destinationName,
        duration,
        country,
        description,
        category,
        departureDate,
    } = destination;



    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const destination = Object.fromEntries(formData.entries());


        const res = await fetch(
            `http://localhost:5000/destination/${_id}`,
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(destination),
            }
        );

        const data = await res.json();

        console.log(data);

    };




    return (
        <Modal>
            <Button
                variant="bordered"
                className="border border-gray-600 px-4 py-2 text-teal-400 flex items-center gap-2 rounded-lg hover:bg-teal-600/20 transition-all duration-200"
            >
                <BiEdit size={16} />
                Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-teal-600/20 text-teal-400">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className="text-xl font-bold text-white">Edit Destination</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="md:col-span-2">
                                            <TextField name="destinationName" defaultValue={destinationName}>
                                                <Label>Destination Name</Label>
                                                <Input />
                                            </TextField>
                                        </div>

                                        <TextField name="country" isRequired defaultValue={country}>
                                            <Label>Country</Label>
                                            <Input placeholder="Indonesia" />
                                            <FieldError />
                                        </TextField>

                                        <div>
                                            <Label className="block mb-2">Category</Label>
                                            <select
                                                defaultValue={category}
                                                name="category"
                                                required
                                                className="w-full rounded-lg border border-gray-600 p-3 text-gray-100 bg-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                                            >
                                                <option value="">Select Category</option>
                                                <option value="Beach">Beach</option>
                                                <option value="Mountain">Mountain</option>
                                                <option value="City">City</option>
                                                <option value="Adventure">Adventure</option>
                                                <option value="Cultural">Cultural</option>
                                                <option value="Luxury">Luxury</option>
                                            </select>
                                        </div>

                                        <TextField name="price" defaultValue={price} isRequired>
                                            <Label>Price (USD)</Label>
                                            <Input type="number" placeholder="1299" />
                                            <FieldError />
                                        </TextField>

                                        <TextField name="duration" defaultValue={duration} isRequired>
                                            <Label>Duration</Label>
                                            <Input placeholder="7 Days / 6 Nights" />
                                            <FieldError />
                                        </TextField>

                                        <div className="md:col-span-2">
                                            <TextField defaultValue={departureDate} name="departureDate" isRequired>
                                                <Label>Departure Date</Label>
                                                <Input type="date" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div className="md:col-span-2">
                                            <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                                                <Label>Image URL</Label>
                                                <Input
                                                    type="url"
                                                    placeholder="https://example.com/bali.jpg"
                                                />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        <div className="md:col-span-2">
                                            <Label className="block mb-2">Description</Label>
                                            <TextArea
                                                name="description"
                                                defaultValue={description}
                                                placeholder="Describe the travel experience..."
                                            />
                                        </div>
                                    </div>

                                    <Button type="submit" className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-base font-semibold transition-all duration-200">
                                        Save Changes
                                    </Button>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal >
    );
}