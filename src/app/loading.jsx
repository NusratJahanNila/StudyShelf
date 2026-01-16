export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] to-[#112240] flex flex-col items-center justify-center p-6">
      {/* Animated Logo */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-[#decc05] to-[#0A192F] rounded-xl flex items-center justify-center animate-pulse">
              <div className="w-8 h-8 bg-[#0A192F] rounded-lg"></div>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#decc05] to-transparent rounded-xl opacity-20 blur-xl"></div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#CCD6F6] via-[#decc05] to-[#CCD6F6] bg-clip-text text-transparent">
            StudyShelf
          </h1>
        </div>
        <p className="text-[#8892B0] text-lg">Loading your study resources...</p>
      </div>

      {/* Animated Books */}
      <div className="flex justify-center items-end space-x-[-12px] mb-12">
        {[1, 2, 3, 4, 5].map((book) => (
          <div
            key={book}
            className={`w-8 h-${32 + book * 8} bg-gradient-to-b from-[#112240] via-[#233554] to-[#0A192F] rounded`}
            style={{
              animation: `pulse 1.5s ease-in-out ${book * 0.2}s infinite`,
            }}
          >
            <div className="w-full h-2 mt-4 bg-gradient-to-r from-transparent via-[#decc05] to-transparent opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="w-64 h-2 bg-[#233554] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#decc05] to-transparent animate-[progress_2s_ease-in-out_infinite]"></div>
      </div>

      <p className="mt-4 text-sm text-[#8892B0]">Organizing learning materials...</p>

      {/* Loading Tips */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl">
        {[
          "Curating quality resources...",
          "Preparing study notes...",
          "Optimizing learning paths..."
        ].map((tip, index) => (
          <div key={index} className="p-4 bg-[#112240] rounded-lg border border-[#233554]">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-[#decc05] animate-pulse"></div>
              <p className="text-sm text-[#CCD6F6]">{tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}