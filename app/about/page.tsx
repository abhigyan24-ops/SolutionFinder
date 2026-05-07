"use client";

import { motion } from "framer-motion";
import { PlaySquare, ExternalLink, Calendar, Code2, GraduationCap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            The Story Behind Solution Finder
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed italic">
            "I always wished to make a Mathematical site which will help students learn in a joyful method."
          </p>
          <p className="text-gray-400 mt-4">— Abhigyan, 2020</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Video Embed */}
        <div className="mb-20">
          <h2 className="font-syne text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <PlaySquare className="text-red-600" />
            Original Trailer (2020)
          </h2>
          <div className="relative pt-[56.25%] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/yRVEQxmUp4c"
              title="Solution Finder Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="font-syne text-3xl font-bold text-gray-900 mb-12 text-center">The Journey</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            
            {/* 2020 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Calendar size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg font-syne">Inception in Class 8</h3>
                  <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">2020</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Launched on Google Sites with vanilla JavaScript answer checkers, Google Forms quizzes, and MyLiveChat for live help. Even had an Android APK version!
                </p>
                <div className="flex gap-3">
                  <a href="https://solutionfinder24.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <ExternalLink size={14} /> Blog
                  </a>
                  <a href="https://www.youtube.com/@solutionfinder7245" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <ExternalLink size={14} /> YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* 2024 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-purple-100 text-purple-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <GraduationCap size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg font-syne">College Years</h3>
                  <span className="text-purple-600 font-bold text-sm bg-purple-50 px-3 py-1 rounded-full">2024</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Joined BMS Institute of Technology and Management (BMSIT) to pursue a degree in Computer Science Engineering.
                </p>
              </div>
            </div>

            {/* 2025 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-green-100 text-green-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Code2 size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-lg font-syne">The Rebuild</h3>
                  <span className="text-green-600 font-bold text-sm bg-green-50 px-3 py-1 rounded-full">2025</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Rebuilt Solution Finder from the ground up as a portfolio project using modern web technologies: Next.js, TypeScript, and Tailwind CSS.
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
