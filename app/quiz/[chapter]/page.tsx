import { chapters } from "@/lib/data";
import { quizData } from "@/lib/quiz-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import QuizClient from "@/components/QuizClient";

export function generateStaticParams() {
  return chapters.map((chapter) => ({
    chapter: chapter.slug,
  }));
}

export default async function QuizPage({ params }: { params: Promise<{ chapter: string }> }) {
  const resolvedParams = await params;
  const chapter = chapters.find((c) => c.slug === resolvedParams.chapter);

  if (!chapter) {
    notFound();
  }

  const questions = quizData[chapter.slug] || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/chapters" className="inline-flex items-center text-gray-500 hover:text-[#1a73e8] transition-colors mb-8 font-medium">
          <ArrowLeft size={20} className="mr-2" />
          Back to Chapters
        </Link>
        
        <QuizClient chapterName={chapter.name} questions={questions} />
      </div>
    </div>
  );
}
