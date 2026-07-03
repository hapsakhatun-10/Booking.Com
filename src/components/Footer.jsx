import { Envelope } from "@gravity-ui/icons";

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-auto text-gray-400 px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                        BookingZone
                    </h1>
                    <p className="mt-4 max-w-xl text-gray-500">
                        Your gateway to extraordinary travel experiences around the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Newsletter</h3>
                        <p className="mb-4 text-sm text-gray-500">
                            Subscribe for exclusive travel deals and inspiration.
                        </p>
                        <div className="flex items-center bg-gray-800 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500 transition-all">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-transparent outline-none flex-1 text-sm text-white placeholder-gray-500"
                            />
                            <Envelope className="size-4 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {["Home", "Destinations", "My Bookings", "My Profile"].map((item) => (
                                <li key={item} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Support</h3>
                        <ul className="space-y-3">
                            {["Help Center", "Terms of Service", "Privacy Policy"].map((item) => (
                                <li key={item} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200 text-sm">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400 text-sm">786 901 1622</li>
                            <li className="text-gray-400 text-sm hover:text-white cursor-pointer transition-colors duration-200">info@BookingZone.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © 2026 BookingZone. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {["Twitter", "LinkedIn", "Instagram"].map((item) => (
                            <span key={item} className="text-gray-500 hover:text-white cursor-pointer text-sm transition-colors duration-200">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;