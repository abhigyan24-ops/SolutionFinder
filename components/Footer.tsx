import Link from 'next/link';
import { PlaySquare, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1a73e8] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold font-syne">SF</span>
              </div>
              <span className="font-syne font-bold text-xl">
                Solution Finder
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Learn Maths the Joyful Way. A passion project built to help Class 8 students excel in CBSE Mathematics.
            </p>
          </div>
          
          <div>
            <h3 className="font-syne font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/chapters" className="hover:text-[#1a73e8] transition-colors">All Chapters</Link></li>
              <li><Link href="/answer-checker" className="hover:text-[#1a73e8] transition-colors">Answer Checkers</Link></li>
              <li><Link href="/leaderboard" className="hover:text-[#1a73e8] transition-colors">Leaderboard</Link></li>
              <li><Link href="/about" className="hover:text-[#1a73e8] transition-colors">About the Creator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-syne font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@solutionfinder7245" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all text-gray-400">
                <PlaySquare size={20} />
              </a>
              <a href="https://solutionfinder24.blogspot.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#1a73e8] hover:text-white transition-all text-gray-400">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© Solution Finder 2020. Rebuilt 2025 by Abhigyan.</p>
        </div>
      </div>
    </footer>
  );
}
