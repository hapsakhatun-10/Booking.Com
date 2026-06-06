"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {

    return (
        <div className="bg-white py-3">
            <nav className="flex items-center justify-between px-6 p7-3 mx-auto">
                <ul className="flex gap-3 text-[16px] font-semibold">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/destinations"}>Destinations</Link>
                    </li>
                    <li>
                        <Link href={"/my-bookings"}>My Bookings</Link>
                    </li>

                    <li>
                        <Link href={"/add-destination"}>Add Destination</Link>
                    </li>
                </ul>
                <div>
                    <Link
                        href="/"
                        className="text-4xl font-extrabold bg-gradient-to-r from-teal-600 via-white-500 to-teal-500 bg-clip-text text-transparent"
                    >
                        BookingZone
                    </Link>
                </div>

                <ul className="flex items-center gap-3 font-semibold text-[16px]">
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>



                    <>
                        <li>
                            <Link href={"/login"}>Login</Link>
                        </li>
                        <li>
                            <Link href={"/signup"}>Sign Up</Link>
                        </li>
                    </>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;