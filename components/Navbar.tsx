import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1a73e8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-syne">SF</span>
              </div>
              <span className="font-syne font-bold text-xl text-gray-900">
                Solution Finder
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/chapters" className="text-gray-600 hover:text-[#1a73e8] font-medium transition-colors">
              Chapters
            </Link>
            <Link href="/answer-checker" className="text-gray-600 hover:text-[#1a73e8] font-medium transition-colors">
              Answer Checker
            </Link>
            <Link href="/leaderboard" className="text-gray-600 hover:text-[#1a73e8] font-medium transition-colors">
              Leaderboard
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#1a73e8] font-medium transition-colors">
              About
            </Link>
            <Link href="/chapters" className="bg-[#1a73e8] text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
