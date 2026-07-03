"use client";

import React, { useState } from "react";
import {
    Button,
    Card,
    FieldError,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";

const AddDestinationPage = () => {
    const [isPending, setIsPending] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const destination = Object.fromEntries(formData.entries());

        console.log(destination);

        const response = await fetch("http://localhost:5000/destination", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(destination),
        });

        const data = await response.json();

        console.log(data);

    };



    return (
        <div className="min-h-screen bg-gray-900 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">Add Destination</h1>
                    <p className="mt-2 text-lg text-gray-400">
                        Create a new travel package for your customers
                    </p>
                </div>

                <Card className="bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                    <form onSubmit={onSubmit}
                        className="p-8 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <TextField name="destinationName" isRequired>
                                    <Label className="text-white">Destination Name</Label>
                                    <Input className="text-white" placeholder="Bali Paradise" />
                                    <FieldError />
                                </TextField>
                            </div>

                            <TextField name="country" isRequired>
                                <Label className="text-white">Country</Label>
                                <Input className="text-white" placeholder="Indonesia" />
                                <FieldError />
                            </TextField>

                            <div>
                                <Label className="text-white">Category</Label>
                                            <select
                                                    name="category"
                                                    required
                                                    className="w-full rounded-lg border border-gray-600 p-3 text-gray-100 bg-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all mt-2"
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

                            <TextField name="price" isRequired>
                                <Label className="text-white">Price (USD)</Label>
                                <Input className="text-white" type="number" placeholder="1299" />
                                <FieldError />
                            </TextField>

                            <TextField name="duration" isRequired>
                                <Label className="text-white">Duration</Label>
                                <Input className="text-white" placeholder="7 Days / 6 Nights" />
                                <FieldError />
                            </TextField>

                            <TextField name="departureDate" isRequired>
                                <Label className="text-white">Departure Date</Label>
                                <Input className="text-white" type="date" />
                                <FieldError />
                            </TextField>

                            <div className="md:col-span-2">
                                <TextField name="imageUrl" isRequired>
                                    <Label className="text-white">Image URL</Label>
                                    <Input
                                        className="text-white"
                                        type="url"
                                        placeholder="https://example.com/bali.jpg"
                                    />
                                    <FieldError />
                                </TextField>
                            </div>

                            <div className="md:col-span-2">
                                <Label className="text-white block mb-2">Description</Label>
                                <TextArea
                                    className="text-white"
                                    name="description"
                                    placeholder="Describe the travel experience..."
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            isLoading={isPending}
                            className="w-full h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-base font-semibold transition-all duration-200"
                        >
                            {isPending ? "Adding Package..." : "Add Travel Package"}
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddDestinationPage;