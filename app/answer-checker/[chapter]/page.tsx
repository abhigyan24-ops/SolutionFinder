import { chapters } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Calculators
import SquaresCalculator from "@/components/calculators/SquaresCalculator";
import CubesCalculator from "@/components/calculators/CubesCalculator";
import ExponentsCalculator from "@/components/calculators/ExponentsCalculator";
import DirectInverseCalculator from "@/components/calculators/DirectInverseCalculator";
import ProfitLossCalculator from "@/components/calculators/ProfitLossCalculator";
import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import MensurationCalculator from "@/components/calculators/MensurationCalculator";
import StatisticsCalculator from "@/components/calculators/StatisticsCalculator";
import AlgebraicIdentitiesCalculator from "@/components/calculators/AlgebraicIdentitiesCalculator";
import LinearEquationCalculator from "@/components/calculators/LinearEquationCalculator";
import PolynomialsCalculator from "@/components/calculators/PolynomialsCalculator";
import QuadrilateralsCalculator from "@/components/calculators/QuadrilateralsCalculator";

export function generateStaticParams() {
  return chapters.map((chapter) => ({
    chapter: chapter.slug,
  }));
}

export default async function AnswerCheckerPage({ params }: { params: Promise<{ chapter: string }> }) {
  const resolvedParams = await params;
  const chapter = chapters.find((c) => c.slug === resolvedParams.chapter);

  if (!chapter) {
    notFound();
  }

  // Map slug to calculator component
  const renderCalculator = () => {
    switch (chapter.slug) {
      case "squares-and-square-roots":
        return <SquaresCalculator />;
      case "cubes-and-cube-roots":
        return <CubesCalculator />;
      case "exponents-and-radicals":
        return <ExponentsCalculator />;
      case "direct-and-inverse-variation":
        return <DirectInverseCalculator />;
      case "profit-loss-and-discount":
        return <ProfitLossCalculator />;
      case "compound-interest":
        return <CompoundInterestCalculator />;
      case "mensuration":
        return <MensurationCalculator />;
      case "statistics-and-probability":
        return <StatisticsCalculator />;
      case "algebraic-identities":
        return <AlgebraicIdentitiesCalculator />;
      case "linear-equation-in-one-variable":
        return <LinearEquationCalculator />;
      case "polynomials":
        return <PolynomialsCalculator />;
      case "understanding-quadrilaterals":
        return <QuadrilateralsCalculator />;
      default:
        return (
          <div className="bg-yellow-50 text-yellow-800 p-6 rounded-xl border border-yellow-200 text-center">
            <h3 className="font-bold text-lg mb-2">Calculator Coming Soon</h3>
            <p>The answer checker for {chapter.name} is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/answer-checker" className="inline-flex items-center text-gray-500 hover:text-[#1a73e8] transition-colors mb-8 font-medium">
          <ArrowLeft size={20} className="mr-2" />
          Back to Answer Checkers
        </Link>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className={`p-8 md:p-10 border-b border-gray-100 ${chapter.color.replace('text-', 'bg-').replace('50', '50/50')}`}>
            <h1 className="font-syne text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              {chapter.name}
            </h1>
            <p className="text-gray-600">Enter your values below to check your answer instantly.</p>
          </div>
          
          <div className="p-8 md:p-10">
            {renderCalculator()}
          </div>
        </div>
      </div>
    </div>
  );
}
