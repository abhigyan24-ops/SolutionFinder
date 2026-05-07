"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircle, Calculator, Square, Hexagon, Layers, LineChart, Percent, BookOpen, ChartBar, Circle, PieChart, Triangle } from "lucide-react";

interface ChapterCardProps {
  chapter: {
    id: number;
    slug: string;
    name: string;
    icon: string;
    color: string;
  };
  index: number;
}

const iconMap: Record<string, any> = {
  Square,
  Hexagon,
  Layers,
  LineChart,
  Percent,
  Calculator,
  BookOpen,
  ChartBar,
  Circle,
  PieChart,
  Triangle
};

export default function ChapterCard({ chapter, index }: ChapterCardProps) {
  const Icon = iconMap[chapter.icon] || Square;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${chapter.color}`}>
          <Icon size={24} />
        </div>
        <span className="text-sm font-bold text-gray-400 font-syne">Ch {chapter.id}</span>
      </div>
      
      <h3 className="font-syne font-bold text-xl text-gray-900 mb-2 flex-grow">{chapter.name}</h3>
      
      <div className="flex flex-col gap-2 mt-6">
        <a 
          href="https://www.youtube.com/@solutionfinder7245" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-medium transition-colors text-sm"
        >
          <PlayCircle size={18} />
          Watch Video
        </a>
        <Link 
          href={`/answer-checker/${chapter.slug}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#1a73e8] text-white hover:bg-blue-700 font-medium transition-colors text-sm"
        >
          <Calculator size={18} />
          Practice Answers
        </Link>
        <Link 
          href={`/quiz/${chapter.slug}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 font-medium transition-colors text-sm mt-1"
        >
          Take Quiz
        </Link>
      </div>
    </motion.div>
  );
}
