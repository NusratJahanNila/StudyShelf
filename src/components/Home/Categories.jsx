import { Code, Cpu, Layout, Wrench, Briefcase, Database, Server, Zap, Compass } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      icon: Code,
      title: "Programming",
      subtitle: "Languages & Frameworks",
      count: "120+ Resources",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cpu,
      title: "Computer Science",
      subtitle: "Algorithms & Theory",
      count: "85+ Resources",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Layout,
      title: "System Design",
      subtitle: "Architecture Patterns",
      count: "45+ Resources",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Wrench,
      title: "Web Design",
      subtitle: "UI/UX & Frontend",
      count: "75+ Resources",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Briefcase,
      title: "Tools",
      subtitle: "Development Tools",
      count: "60+ Resources",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Compass,
      title: "Career",
      subtitle: "Interview & Growth",
      count: "95+ Resources",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Database,
      title: "Database",
      subtitle: "SQL & NoSQL",
      count: "50+ Resources",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Server,
      title: "Backend",
      subtitle: "APIs & Services",
      count: "70+ Resources",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Productivity",
      subtitle: "Tools & Methods",
      count: "40+ Resources",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore <span className="text-[#ff7400]">Learning</span> Categories
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Curated collections organized by topic to help you focus on what matters most
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${category.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0A5C36] transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{category.subtitle}</p>

                {/* Count */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-600">{category.count}</span>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#0A5C36] transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#0A5C36] transition-colors duration-300" />
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#ff7400] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center text-[#0A5C36] font-semibold hover:text-[#0a7c46] transition-colors duration-300 group">
            View All Categories
            <svg
              className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;