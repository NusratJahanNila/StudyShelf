export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0F1C18] flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Study<span className="text-[#B1FF42]">Shelf</span>
        </h1>
        <p className="text-[#D4F6E5]">Loading your study resources...</p>
      </div>

      {/* Simple spinner */}
      <div className="relative">
        <div className="w-20 h-20 border-4 border-[#1a2d27] rounded-full"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-[#B1FF42] border-r-[#B1FF42] rounded-full animate-spin"></div>
      </div>

      {/* Simple book placeholders */}
      <div className="mt-12 flex space-x-4">
        {[1, 2, 3].map((item) => (
          <div 
            key={item}
            className="w-16 h-24 bg-linear-to-b from-[#1a2d27] to-[#0F1C18] rounded"
            style={{ transform: `translateY(${item * 5}px)` }}
          ></div>
        ))}
      </div>
    </div>
  );
}