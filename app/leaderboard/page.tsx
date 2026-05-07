"use client";

import { leaderboardData } from "@/lib/data";
import { Trophy, Medal, Search } from "lucide-react";
import { useState } from "react";

export default function LeaderboardPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = leaderboardData.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.chapter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 text-amber-600 rounded-full mb-6">
            <Trophy size={32} />
          </div>
          <h1 className="font-syne text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Wall of Fame
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Top performers across all chapters. Score 10/10 on quizzes to see your name here!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="font-syne font-bold text-xl text-gray-900">Current Rankings</h2>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search student or chapter..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent text-sm"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider font-medium">
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Student Name</th>
                  <th className="px-6 py-4">Chapter</th>
                  <th className="px-6 py-4 text-center">Score</th>
                  <th className="px-6 py-4 text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((student, index) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      {index === 0 ? <Medal className="text-yellow-500" size={24} /> :
                       index === 1 ? <Medal className="text-gray-400" size={24} /> :
                       index === 2 ? <Medal className="text-amber-700" size={24} /> :
                       <span className="font-bold text-gray-400 ml-2">{index + 1}</span>}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 text-gray-600">{student.chapter}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-bold bg-green-100 text-green-700">
                        {student.score} / 10
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-500 text-sm">
                      {new Date(student.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                  </tr>
                ))}
                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      No matching records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
