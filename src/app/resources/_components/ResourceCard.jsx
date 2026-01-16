// components/ResourceCard.tsx
"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ResourceCard = ({ resource }) => {
    const isFree = resource.price.toLowerCase() === "free";

    return (
        <div className="group relative bg-white rounded-2xl border border-gray-200 h-105 flex flex-col overflow-hidden hover:border-[#0A5C36] transition-all duration-300 hover:shadow-xl">

            {/* Image/Thumbnail Section */}
            <div className="relative h-48 overflow-hidden">
                {/* Image Container */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full border border-gray-200">
                            {resource.category}
                        </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4">
                        <div className={`px-4 py-2 rounded-tl-xl rounded-br-xl text-sm font-bold shadow-md ${isFree
                            ? 'bg-linear-to-r from-green-500 to-emerald-600 text-white'
                            : 'bg-linear-to-r from-[#0A5C36] to-[#0a7c46] text-white'
                            }`}>
                            {isFree ? 'FREE' : resource.price}
                        </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-[#0A5C36] transition-colors">
                    {resource.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                    {resource.shortDescription}
                </p>

                {/* View Details Button - Bottom */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                        href={`/resources/${resource.id}`}
                        className="group/btn inline-flex items-center justify-center w-full bg-[#0A5C36] text-white px-6 py-3 rounded-tl-xl rounded-br-xl hover:bg-[#0a7c46] transition-all duration-300 hover:shadow-md"
                    >
                        <span className="font-semibold">View Details</span>
                        <ChevronRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0A5C36] rounded-2xl transition-all duration-300 pointer-events-none" />
        </div>
    );
};

export default ResourceCard;