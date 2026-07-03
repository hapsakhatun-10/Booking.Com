import { Separator } from "@heroui/react";

const Banner = () => {
    return (
        <div className="relative bg-[url('/assets/Banner.png')] bg-no-repeat bg-cover bg-center text-white min-h-[700px] flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

            <div className="relative flex-1 flex flex-col justify-center items-center px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                    Discover Your <br /> Next Adventure
                </h1>

                <p className="text-lg md:text-2xl text-white/90 max-w-2xl mb-8">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                <div className="flex gap-4">
                    <button className="uppercase bg-teal-600 hover:bg-teal-700 px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer">
                        Explore Now
                    </button>
                    <button className="uppercase px-8 py-3.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer">
                        View Destinations
                    </button>
                </div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-md border-t border-white/20">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
                    <div className="py-6 px-6 text-center">
                        <h3 className="text-lg font-semibold">Location</h3>
                        <p className="text-sm text-white/70 mt-1">Address, City or Zip</p>
                    </div>
                    <div className="py-6 px-6 text-center">
                        <h3 className="text-lg font-semibold">Date/Duration</h3>
                        <p className="text-sm text-white/70 mt-1">Anytime / 3 Days</p>
                    </div>
                    <div className="py-6 px-6 text-center">
                        <h3 className="text-lg font-semibold">Budget</h3>
                        <p className="text-sm text-white/70 mt-1">$0 - $3000</p>
                    </div>
                    <div className="py-6 px-6 text-center bg-teal-600/80">
                        <h3 className="text-lg font-semibold">Search</h3>
                        <p className="text-sm text-white/70 mt-1">Find your trip</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;