import { FiExternalLink } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";
const DestinationCard = ({ destination }) => {
    const { _id, imageUrl, price, destinationName, duration, country } = destination;

    return (
        <Link href={`/destinations/${_id}`} className="group block">
            <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={destinationName}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5">
                    <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-2">
                        <LuMapPin size={14} />
                        <span>{country}</span>
                    </div>

                    <h2 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-200">
                        {destinationName}
                    </h2>

                    <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-1 mb-4">
                        <FaRegCalendar size={14} />
                        <span>{duration}</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                        <div>
                            <span className="text-2xl font-bold text-teal-400">${price}</span>
                            <span className="text-sm text-gray-500 ml-1">/person</span>
                        </div>
                            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-400 group-hover:text-teal-300 transition-colors">
                            Book Now
                            <FiExternalLink size={14} />
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default DestinationCard;