"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircle, CheckCircle, Trophy, Award, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-36">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-syne text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8"
            >
              Learn Maths the <span className="text-[#1a73e8]">Joyful</span> Way
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Master CBSE Class 8 Mathematics. 16 chapters, 100+ questions, and instant answer checking.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/chapters" className="w-full sm:w-auto px-8 py-4 bg-[#1a73e8] text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Explore Chapters
                <ArrowRight size={20} />
              </Link>
              <a href="https://youtu.be/yRVEQxmUp4c" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-full font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <PlayCircle size={20} className="text-[#1a73e8]" />
                Watch Trailer
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-4">
              <p className="text-4xl font-extrabold text-[#1a73e8] font-syne mb-2">16</p>
              <p className="text-gray-500 font-medium">Chapters Covered</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-extrabold text-[#1a73e8] font-syne mb-2">100+</p>
              <p className="text-gray-500 font-medium">Practice Questions</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-extrabold text-[#1a73e8] font-syne mb-2">95%</p>
              <p className="text-gray-500 font-medium">Students Score 80%+</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-syne text-gray-900 mb-4">How Solution Finder Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A simple 4-step process to master your mathematics curriculum.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PlayCircle size={24} />
              </div>
              <h3 className="text-xl font-bold font-syne mb-3">1. Watch & Learn</h3>
              <p className="text-gray-600">Understand concepts deeply through engaging 2D/3D explanation videos.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold font-syne mb-3">2. Check Answers</h3>
              <p className="text-gray-600">Type your inputs and instantly verify your answers without waiting.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-bold font-syne mb-3">3. Take the Quiz</h3>
              <p className="text-gray-600">Test your knowledge with 10 challenging MCQs per chapter.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold font-syne mb-3">4. Get Certified</h3>
              <p className="text-gray-600">Score 80%+ and receive a beautiful e-certificate directly to your email.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Creator Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-2 bg-blue-50 text-blue-600 font-medium rounded-lg mb-6">About the Creator</div>
          <h2 className="text-3xl md:text-4xl font-bold font-syne text-gray-900 mb-6">Built by a student, for students.</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            "Solution Finder was built by Abhigyan in Class 8 (2020) as a passion project to make maths joyful for his classmates. Now reimagined with modern web technologies."
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/about" className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              Read the Full Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
