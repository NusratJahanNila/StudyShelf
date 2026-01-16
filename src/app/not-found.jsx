
export default function NotFound() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center p-6 text-white">
      <div className="max-w-2xl text-center">
        {/* 404 Graphic */}
        <div className="relative mb-12">
          <div className="text-9xl font-bold text-[#0A192F] opacity-30">404</div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-[#CCD6F6]">
              Resource Not Found
            </h1>
          </div>
        </div>

        {/* Message */}
        <p className="text-xl text-[#8892B0] mb-10 max-w-lg mx-auto">
          This study material seems to have been shelved elsewhere. 
          Don&apos;t worry—we have plenty of other resources waiting for you!
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-gradient-to-br from-[#112240] to-[#0A192F] rounded-xl border border-[#233554]">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-lg font-semibold text-[#CCD6F6] mb-2">Browse All Resources</h3>
            <p className="text-sm text-[#8892B0]">
              Explore our curated collection of study materials, cheat sheets, and roadmaps.
            </p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-[#112240] to-[#0A192F] rounded-xl border border-[#decc05]/20">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-[#CCD6F6] mb-2">Search Again</h3>
            <p className="text-sm text-[#8892B0]">
              Try searching with different keywords or browse by category.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}