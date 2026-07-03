import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function SupportSecPage() {
    const testimonials = [
        {
            text: "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.",
            name: "Michael Chen",
            location: "Singapore",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        },
        {
            text: "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!",
            name: "Sarah Johnson",
            location: "New York, USA",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        },
    ];

    return (
        <section className="bg-gray-900 py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            What Travelers Say
                        </h2>
                        <div className="w-16 h-1 bg-teal-500 rounded-full mt-4 mb-4" />
                        <p className="text-gray-400 text-lg">
                            Real experiences from our happy travelers
                        </p>
                    </div>

                    <div className="flex gap-3 mt-4 md:mt-0">
                        <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 hover:border-gray-500 transition-all duration-200">
                            <ChevronLeft size={20} className="text-gray-400" />
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:bg-gray-700 hover:border-gray-500 transition-all duration-200">
                            <ChevronRight size={20} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl p-8 flex items-center justify-between gap-6 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex-1">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    {'\u201C'}{item.text}{'\u201D'}
                                </p>
                                <div>
                                    <h4 className="text-teal-600 font-semibold">
                                        — {item.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">{item.location}</p>
                                </div>
                            </div>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover flex-shrink-0"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}