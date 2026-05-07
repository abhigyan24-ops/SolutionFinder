"use client";

import { useState } from "react";

export default function CubesCalculator() {
  const [num, setNum] = useState<string>("");

  const calculate = () => {
    const n = parseFloat(num);
    if (isNaN(n)) return null;
    return {
      cube: (n * n * n).toLocaleString(undefined, { maximumFractionDigits: 4 }),
      cubeRoot: Math.cbrt(n).toLocaleString(undefined, { maximumFractionDigits: 4 }),
    };
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Enter a number</label>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
          placeholder="e.g. 125"
        />
      </div>

      {result && num !== "" && (
        <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
          <h3 className="font-syne font-bold text-lg text-purple-900 mb-4">Results</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Cube (x³)</span>
              <span className="font-bold text-purple-700 text-lg">{result.cube}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Cube Root (∛x)</span>
              <span className="font-bold text-purple-700 text-lg">{result.cubeRoot}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
