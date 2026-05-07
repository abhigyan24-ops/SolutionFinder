import { chapters } from "@/lib/data";
import ChapterCard from "@/components/ChapterCard";

export default function ChaptersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-syne text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Class 8 Mathematics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a chapter below to watch videos, practice with the answer checker, or test your knowledge in the quiz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
