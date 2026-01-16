import { Search, BookOpen, Target, BarChart3, ChevronRight, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Browse & Discover",
      description: "Explore our curated collection of study resources across multiple categories",
      features: ["Filter by skill level", "Search by topic", "Bookmark favorites"],
    },
    {
      number: "02",
      icon: BookOpen,
      title: "Study & Learn",
      description: "Access comprehensive materials with structured learning paths",
      features: ["Step-by-step guides", "Practice exercises", "Progress tracking"],
    },
    {
      number: "03",
      icon: Target,
      title: "Apply & Practice",
      description: "Reinforce knowledge with hands-on exercises and real-world scenarios",
      features: ["Code challenges", "Case studies", "Interview prep"],
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Track & Improve",
      description: "Monitor your progress and identify areas for improvement",
      features: ["Performance metrics", "Skill assessments", "Personalized recommendations"],
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-[#ff7400]">StudyShelf</span> Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A simple 4-step process to accelerate your learning journey
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#0A5C36] via-[#ff7400] to-[#0A5C36]" />

          {/* Steps Grid */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left Content */}
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                    <div className="max-w-md mx-auto">
                      <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#0A5C36]/10 text-[#0A5C36] text-sm font-medium mb-4">
                        <span>Step {step.number}</span>
                      </div>
                      <div className="flex items-center mb-4 lg:justify-start">
                        <div className={`p-3 rounded-xl bg-linear-to-br from-[#0A5C36] to-[#ff7400] ${isEven ? "lg:ml-auto" : ""}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className={`text-2xl font-bold text-gray-900 ml-4 ${isEven ? "lg:ml-4" : ""}`}>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-500">
                            <CheckCircle className="h-4 w-4 text-[#0A5C36] mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Number */}
                  <div className="relative my-8 lg:my-0">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center z-10 relative">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#0A5C36] to-[#ff7400] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Spacer */}
                  <div className="lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center bg-linear-to-r from-[#0A5C36]/10 to-[#ff7400]/10 p-1 rounded-full mb-6">
            <div className="flex items-center bg-white px-6 py-2 rounded-full">
              <Target className="h-5 w-5 text-[#0A5C36] mr-2" />
              <span className="font-semibold text-gray-900">Ready to Start?</span>
            </div>
          </div>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join thousands of learners who have accelerated their journey with StudyShelf
          </p>
          <button className="group bg-[#0A5C36] text-white px-8 py-4 rounded-tl-xl rounded-br-xl hover:bg-[#0a7c46] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
            <span className="font-semibold">Begin Your Journey</span>
            <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;