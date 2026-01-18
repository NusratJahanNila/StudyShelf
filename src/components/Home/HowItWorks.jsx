import {
  Search,
  BookOpen,
  Target,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Resources",
    description: "Discover curated study materials across multiple topics.",
  },
  {
    icon: BookOpen,
    title: "Learn & Study",
    description: "Follow structured content designed for clarity and depth.",
  },
  {
    icon: Target,
    title: "Practice Skills",
    description: "Apply what you learn with exercises and real examples.",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    description: "Measure improvement and refine your learning path.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-linear-to-br from-[#0A5C36]/10 via-white to-[#ff7400]/10 mb-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-[#ff7400]">StudyShelf</span> Works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            A simple and focused process designed to support your learning journey
          </p>
        </div>

        {/* Steps Wrapper */}
         {/* Steps */}
        <div className="relative">
          {/* Dotted Connector */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px border-t-2 border-dashed border-[#0a5c21]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative  ">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center shadow-sm hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:p-2 border-none p-2 rounded-2xl "
                >
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <div className="w-12 h-12 rounded-lg bg-[#0A5C36] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white " />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 max-w-xs">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <span className="mt-4 text-xs font-semibold tracking-wide text-[#0A5C36]">
                    STEP {index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
};

export default HowItWorks;
