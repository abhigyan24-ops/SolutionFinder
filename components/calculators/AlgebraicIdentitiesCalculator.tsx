"use client";

import { useState } from "react";

export default function AlgebraicIdentitiesCalculator() {
  const [aStr, setAStr] = useState<string>("");
  const [bStr, setBStr] = useState<string>("");

  const calculate = () => {
    const a = parseFloat(aStr);
    const b = parseFloat(bStr);
    if (isNaN(a) || isNaN(b)) return null;

    return {
      plusSquared: Math.pow(a + b, 2).toLocaleString(undefined, { maximumFractionDigits: 4 }),
      minusSquared: Math.pow(a - b, 2).toLocaleString(undefined, { maximumFractionDigits: 4 }),
      differenceOfSquares: (Math.pow(a, 2) - Math.pow(b, 2)).toLocaleString(undefined, { maximumFractionDigits: 4 }),
    };
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Value of 'a'</label>
          <input
            type="number"
            value={aStr}
            onChange={(e) => setAStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 5"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Value of 'b'</label>
          <input
            type="number"
            value={bStr}
            onChange={(e) => setBStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 3"
          />
        </div>
      </div>

      {result && aStr !== "" && bStr !== "" && (
        <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
          <h3 className="font-syne font-bold text-lg text-indigo-900 mb-4">Results</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">(a + b)²</span>
              <span className="font-bold text-indigo-700 text-lg">{result.plusSquared}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">(a - b)²</span>
              <span className="font-bold text-indigo-700 text-lg">{result.minusSquared}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">a² - b²</span>
              <span className="font-bold text-indigo-700 text-lg">{result.differenceOfSquares}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
