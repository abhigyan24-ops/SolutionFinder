"use client";

import { useState } from "react";

export default function StatisticsCalculator() {
  const [data, setData] = useState<string>("");

  const calculate = () => {
    if (!data.trim()) return null;
    
    const numbers = data.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    if (numbers.length === 0) return null;

    // Mean
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;

    // Median
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

    // Mode
    const counts: Record<number, number> = {};
    let maxCount = 0;
    let mode: number[] = [];
    
    numbers.forEach(n => {
      counts[n] = (counts[n] || 0) + 1;
      if (counts[n] > maxCount) {
        maxCount = counts[n];
      }
    });

    Object.keys(counts).forEach(k => {
      if (counts[Number(k)] === maxCount) {
        mode.push(Number(k));
      }
    });

    return {
      mean: mean.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      median: median.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      mode: mode.join(", "),
      count: numbers.length
    };
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Enter numbers separated by commas</label>
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none resize-none"
          placeholder="e.g. 12, 15, 12, 18, 20, 15, 12"
        />
      </div>

      {result && (
        <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-100">
          <h3 className="font-syne font-bold text-lg text-amber-900 mb-4">Results (n = {result.count})</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Mean (Average)</span>
              <span className="font-bold text-amber-700 text-lg">{result.mean}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Median</span>
              <span className="font-bold text-amber-700 text-lg">{result.median}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Mode</span>
              <span className="font-bold text-amber-700 text-lg">{result.mode}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
