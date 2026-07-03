"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const pathname = usePathname();

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/destinations", label: "Destinations" },
        { href: "/my-bookings", label: "My Bookings" },
        { href: "/add-destination", label: "Add Destination" },
    ];

    return (
        <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="primary-gradient text-3xl font-extrabold tracking-tight"
                    >
                        BookingZone
                    </Link>

                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                            isActive
                                                ? "bg-teal-600 text-white"
                                                : "text-gray-300 hover:text-white hover:bg-gray-700"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {user ? (
                    <div className="flex items-center gap-4">
                        <Link href="/profile" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Profile
                        </Link>
                        <Avatar>
                            <Avatar.Image
                                referrerPolicy="no-referrer"
                                alt={user?.name || "User"}
                                src={user?.image}
                            />
                            <Avatar.Fallback>
                                {user?.name?.charAt(0)}
                            </Avatar.Fallback>
                        </Avatar>
                        <Button
                            size="sm"
                            onClick={handleSignOut}
                            variant="danger"
                            className="rounded-lg text-sm"
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="px-4 py-2 text-sm font-medium bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-200"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;