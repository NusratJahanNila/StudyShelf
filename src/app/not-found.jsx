import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
            <div className="text-center max-w-2xl">
                {/* 404 Number */}
                <div className="mb-8">
                    <div className="text-8xl font-bold text-[#B1FF42] opacity-20">404</div>
                    <h1 className="text-5xl font-bold text-[#0F1C18] -mt-16">
                        Page Not <span className="text-[#B1FF42]">Found</span>
                    </h1>
                </div>

                {/* Message */}
                <p className="text-xl text-[#054c28] mb-10">
                    This study resource seems to be missing from our shelves.
                </p>

                {/* Bookshelf illustration */}
                <div className="relative w-64 h-40 mx-auto mb-12">
                    {/* Shelf */}
                    <div className="absolute bottom-0 w-full h-4 bg-linear-to-r from-[#0F1C18] via-[#B1FF42] to-[#0F1C18]"></div>

                    {/* Books */}
                    <div className="absolute bottom-4 left-8 w-6 h-32 bg-[#1a2d27] rounded"></div>
                    <div className="absolute bottom-4 left-16 w-6 h-28 bg-linear-to-b from-[#B1FF42] to-[#1a2d27] rounded"></div>
                    <div className="absolute bottom-4 left-24 w-6 h-36 bg-[#1a2d27] rounded"></div>
                    <div className="absolute bottom-4 left-32 w-6 h-24 bg-linear-to-b from-[#D4F6E5] to-[#1a2d27] rounded"></div>

                    {/* Question mark */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                        <div className="text-6xl text-[#B1FF42]">?</div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-[#B1FF42] text-[#0F1C18] font-semibold rounded-lg hover:opacity-90 transition"
                    >
                        ← Back to Home
                    </Link>

                    <Link
                        href="/resources"
                        className="px-6 py-3 border-2 border-[#B1FF42] text-[#B1FF42] font-semibold rounded-lg hover:bg-[#B1FF42]/10 transition"
                    >
                        Browse Resources
                    </Link>
                </div>

                {/* Error info */}
                <div className="mt-12 p-4 bg-[#1a2d27] rounded-lg border border-[#B1FF42]/20">
                    <code className="text-sm text-[#D4F6E5]">
                        Error: The requested page could not be found.
                    </code>
                </div>
            </div>
        </div>
    );
}