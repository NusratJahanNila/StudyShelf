import { GraduationCap, Briefcase, Users, Code2, UserCheck, Rocket } from "lucide-react";

const WhoItsFor = () => {
  const personas = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "University students seeking structured study materials and exam preparation resources",
      features: ["Course supplements", "Exam guides", "Research materials"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Code2,
      title: "Developers",
      description: "Programmers looking to upskill, learn new technologies, or prepare for technical interviews",
      features: ["Coding challenges", "Framework guides", "System design"],
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Briefcase,
      title: "Professionals",
      description: "Working professionals aiming to advance their careers or transition into tech roles",
      features: ["Career growth", "Skill enhancement", "Industry trends"],
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: Users,
      title: "Bootcamp Grads",
      description: "Coding bootcamp graduates seeking additional practice and real-world project guidance",
      features: ["Portfolio projects", "Interview prep", "Networking tips"],
      color: "from-orange-400 to-red-400",
    },
    {
      icon: UserCheck,
      title: "Self-Learners",
      description: "Independent learners building skills through structured, self-paced resources",
      features: ["Flexible pacing", "Diverse topics", "Progress tracking"],
      color: "from-indigo-400 to-blue-400",
    },
    {
      icon: Rocket,
      title: "Career Changers",
      description: "Individuals transitioning into tech from other fields, needing comprehensive guidance",
      features: ["Foundational concepts", "Pathway planning", "Mentorship resources"],
      color: "from-rose-400 to-pink-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Who Is <span className="text-[#ff7400]">StudyShelf</span> For?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Designed for learners at every stage of their journey
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <div
                key={persona.title}
                className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />

                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-gray-100 to-white border border-gray-200 group-hover:border-transparent group-hover:shadow-lg mb-6 transition-all duration-300">
                  <Icon className="h-8 w-8 text-gray-700 group-hover:text-[#0A5C36] transition-colors duration-300" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0A5C36] transition-colors duration-300">
                  {persona.title}
                </h3>
                <p className="text-gray-600 mb-6">{persona.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {persona.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#ff7400] mr-3" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#0A5C36] flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;