"use client";

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
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });


        if (data) {
            redirect('/')
        }

        if (error) {
            // toast
            alert("Error");

            console.log(error)
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen bg-teal-50 flex items-center justify-center px-4 py-12">
            <Card className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold primary-gradient">Welcome Back</h1>
                    <p className="text-gray-500 mt-2">Sign in to continue your adventures</p>
                </div>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
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

                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-6 text-base font-semibold transition-all duration-200" type="submit">
                        Sign In
                    </Button>
                </Form>

                <div className="flex items-center gap-3 my-6">
                    <Separator className="flex-1" />
                    <span className="text-sm text-gray-400 whitespace-nowrap">Or continue with</span>
                    <Separator className="flex-1" />
                </div>

                <Button
                    onClick={handleGoogleSignin}
                    variant="outline"
                    className="w-full rounded-lg h-12 text-base font-medium"
                >
                    <FcGoogle className="text-xl mr-2" />
                    Sign in with Google
                </Button>
            </Card>
        </div>
    );
};

export default LoginPage;