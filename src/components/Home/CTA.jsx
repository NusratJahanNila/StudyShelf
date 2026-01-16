import { ArrowRight, Sparkles, CheckCircle, Star } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0A5C36] via-[#0a7c46] to-[#0A5C36] p-1">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
            
            <div className="relative bg-white rounded-3xl p-8 md:p-12">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-[#0A5C36]/10 to-[#ff7400]/10 mb-6">
                <Sparkles className="h-4 w-4 text-[#0A5C36] mr-2" />
                <span className="text-sm font-semibold text-[#0A5C36]">Limited Time Offer</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Start Your <span className="text-[#ff7400]">Free</span> Learning Journey Today
              </h2>

              {/* Subtitle */}
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Join thousands of successful learners. No credit card required. Get instant access to 50+ premium resources.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  "Access to 500+ study resources",
                  "Structured learning paths",
                  "Progress tracking dashboard",
                  "Community support access",
                  "Weekly updated content",
                  "No hidden fees, ever",
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0A5C36] mr-3 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="group flex-1 bg-[#0A5C36] text-white px-8 py-4 rounded-tl-xl rounded-br-xl hover:bg-[#0a7c46] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  <div className="flex items-center justify-center">
                    <span className="font-semibold text-lg">Get Started Free</span>
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm text-white/80 mt-1">No credit card required</p>
                </Link>
                <Link
                  href="/resources"
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-tl-xl rounded-br-xl hover:border-[#0A5C36] hover:text-[#0A5C36] transition-all duration-300 text-center"
                >
                  <span className="font-semibold">Browse Resources First</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold">4.9/5</span> from 2,500+ reviews
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {/* Trusted by companies - would be logos in production */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">100+</div>
                      <div className="text-gray-500 text-sm">Companies</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-gray-500 text-sm">Universities</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">10K+</div>
                      <div className="text-gray-500 text-sm">Success Stories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-linear-to-br from-[#ff7400] to-orange-500 opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-linear-to-br from-[#0A5C36] to-green-500 opacity-10" />
          </div>

          {/* Final Note */}
          <div className="text-center mt-12">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-[#0A5C36] font-semibold hover:text-[#0a7c46] transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;