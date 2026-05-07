import { chapters } from "@/lib/data";
import Link from "next/link";
import { Calculator, ArrowRight, Square, Hexagon, Layers, LineChart, Percent, BookOpen, ChartBar, Circle, PieChart, Triangle } from "lucide-react";

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

export default function AnswerCheckerLanding() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-6">
            <Calculator size={32} />
          </div>
          <h1 className="font-syne text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Instant Answer Checker
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a chapter to verify your calculations instantly. No steps shown, just the final answer to check your work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chapters.map((chapter) => {
            const Icon = iconMap[chapter.icon] || Square;
            return (
              <Link 
                href={`/answer-checker/${chapter.slug}`} 
                key={chapter.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${chapter.color}`}>
                    <Icon size={24} />
                  </div>
                  <ArrowRight className="text-gray-300 group-hover:text-[#1a73e8] transition-colors" size={20} />
                </div>
                <h3 className="font-syne font-bold text-lg text-gray-900">{chapter.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
