'use client'
const BookLoadingSpinner = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-white to-gray-50">
      <div className="relative">
        {/* Book animation */}
        <div className="relative w-32 h-40 mb-8">
          {/* Book cover */}
          <div className="absolute inset-0 bg-linear-to-br from-[#0A5C36] to-[#0a7c46] rounded-tl-lg rounded-br-lg shadow-2xl animate-pulse" />
          
          {/* Book spine */}
          <div className="absolute left-0 top-2 bottom-2 w-3 bg-linear-to-r from-[#084a2a] to-[#0A5C36] rounded-l-lg" />
          
          {/* Book pages effect */}
          <div className="absolute inset-2 bg-white/10 rounded-lg overflow-hidden">
            {/* Animated page lines */}
            <div className="absolute inset-2 overflow-hidden">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-px bg-white/20 mb-1 animate-slide-left"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '1.5s',
                    animationIterationCount: 'infinite'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Opening book animation */}
          <div className="absolute inset-0 origin-left animate-book-open">
            <div className="absolute inset-0 bg-linear-to-l from-gray-100 to-white rounded-lg opacity-30" />
          </div>
        </div>
        
        {/* Text with dots animation */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-gray-900 mr-2">
              Study
            </span>
            <span className="text-3xl font-bold text-[#ff7400]">
              Shelf
            </span>
          </div>
          
          <p className="text-gray-600 mb-6">Loading your resources</p>
          
          {/* Animated dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-[#0A5C36] rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 bg-[#0A5C36] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-[#0A5C36] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        @keyframes book-open {
          0%, 100% {
            transform: perspective(400px) rotateY(0deg);
          }
          50% {
            transform: perspective(400px) rotateY(-10deg);
          }
        }
        
        .animate-slide-left {
          animation: slide-left 1.5s infinite;
        }
        
        .animate-book-open {
          animation: book-open 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default BookLoadingSpinner;