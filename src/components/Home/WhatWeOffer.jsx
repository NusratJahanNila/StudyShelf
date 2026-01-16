import { Clock, Target, Users, Zap, Award, Shield, TrendingUp, Sparkles } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Time-Efficient Learning",
      description: "Curated content saves hundreds of hours searching for quality resources",
      metric: "Save 40+ hours monthly",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Target,
      title: "Structured Pathways",
      description: "Follow proven learning paths designed by industry experts",
      metric: "10+ structured paths",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network of learners, share insights, and grow together",
      metric: "50K+ active members",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Zap,
      title: "Updated Content",
      description: "Regularly refreshed materials keeping pace with industry changes",
      metric: "Weekly updates",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every resource vetted by subject matter experts for accuracy",
      metric: "100% expert-reviewed",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: Shield,
      title: "Risk-Free Learning",
      description: "Try resources risk-free with our satisfaction guarantee",
      metric: "30-day guarantee",
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#ff7400]">StudyShelf</span>?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience the difference with our learner-centric approach
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative bg-white rounded-xl border border-gray-200 p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#ff7400] flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon & Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-lg ${benefit.color} transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-semibold px-3 py-1 bg-gray-100 rounded-full">
                    {benefit.metric}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>

                {/* Animated Bottom Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0A5C36] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-[#0A5C36]/80 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Active Learners", icon: Users },
              { value: "500+", label: "Resources", icon: Award },
              { value: "98%", label: "Satisfaction Rate", icon: TrendingUp },
              { value: "24/7", label: "Access", icon: Sparkles },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="h-8 w-8 text-white/80" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;