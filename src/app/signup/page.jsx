"use client";
import { FcGoogle } from "react-icons/fc";
import { Card, Separator } from "@heroui/react";

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
        });

        console.log(data, error);

        if (data) {
            redirect("/");
        }

        if (error) {
            alert("Error");
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
            <Card className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Create Account</h1>
                    <p className="text-gray-400 mt-2">Join us and start your journey</p>
                </div>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5">
                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField name="image" type="url">
                        <Label>Image URL</Label>
                        <Input placeholder="https://example.com/avatar.jpg" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    value
                                )
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <Button
                        type="submit"
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-6 rounded-lg text-base transition-all duration-200"
                    >
                        Create Account
                    </Button>
                </Form>

                <div className="flex items-center gap-3 my-6">
                    <Separator className="flex-1" />
                    <span className="text-sm text-gray-400 whitespace-nowrap">
                        Or sign up with
                    </span>
                    <Separator className="flex-1" />
                </div>

                <Button onClick={handleGoogleSignin}
                    variant="outline"
                    className="w-full rounded-lg h-12 text-base font-medium"
                >
                    <FcGoogle className="text-xl mr-2" />
                    Sign up with Google
                </Button>
            </Card>
        </div>
    );
};

export default SignUpPage;