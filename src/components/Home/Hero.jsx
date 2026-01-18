import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" flex items-center overflow-hidden bg-linear-to-br from-[#0A5C36]/10 via-white to-[#ff7400]/10">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <Image 
              src={"https://i.ibb.co.com/bgdMdHLK/student-pupil-in-learning-process-online-education-home-schooling-students-sit-at-the-table-and-stud.jpg"}
              alt="study image"
              width={600}
              height={600}
              className="rounded-2xl p-2 " />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-[#0A5C36]/10 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-[#0A5C36] mr-2" />
              <span className="text-sm font-medium text-[#0A5C36]">
                Trusted by 50,000+ learners
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Elevate Your{" "}
              <span className="relative text-[#ff7400]">
                Learning Journey
              </span>
              
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Access curated study resources, interview packs, and learning materials
              designed to accelerate your growth as a student or developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources"
                className="group inline-flex items-center justify-center bg-[#0A5C36] text-white px-8 py-4 rounded-tl-xl rounded-br-xl hover:bg-[#0a7c46] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="font-semibold">Explore Resources</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-tl-xl rounded-br-xl hover:border-[#0A5C36] hover:text-[#0A5C36] transition-all duration-300"
              >
                <span className="font-semibold">How It Works</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;