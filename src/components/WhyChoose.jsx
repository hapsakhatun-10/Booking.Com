import { ShieldCheck, Map, Headphones } from "lucide-react";

export default function WhyChoose() {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-teal-500" />,
            title: "Safe & Secure",
            description:
                "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
        },
        {
            icon: <Map className="w-8 h-8 text-teal-500" />,
            title: "Expert Guides",
            description:
                "Local experts who bring destinations to life with authentic cultural insights.",
        },
        {
            icon: <Headphones className="w-8 h-8 text-teal-500" />,
            title: "24/7 Support",
            description:
                "Round-the-clock customer service to assist you wherever your journey takes you.",
        },
    ];

    return (
        <section className="bg-gray-800 py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Why Choose BookingZone
                    </h2>
                    <div className="w-16 h-1 bg-teal-500 rounded-full mx-auto mt-4 mb-4" />
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Your trusted partner for exceptional travel experiences
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 rounded-xl shadow-sm border border-gray-600 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-teal-600/20 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

