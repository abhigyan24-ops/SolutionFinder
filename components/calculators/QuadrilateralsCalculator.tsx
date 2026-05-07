"use client";

import { useState } from "react";

export default function QuadrilateralsCalculator() {
  const [nStr, setNStr] = useState<string>("");

  const calculate = () => {
    const n = parseInt(nStr);
    if (isNaN(n) || n < 3) return null;

    const sumOfInterior = (n - 2) * 180;
    const eachInterior = sumOfInterior / n;
    const eachExterior = 360 / n;

    return {
      sumOfInterior,
      eachInterior: eachInterior.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      eachExterior: eachExterior.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      diagonals: (n * (n - 3)) / 2
    };
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div className="mb-4 text-gray-600 text-sm">
        Calculations for Regular Polygons
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Number of Sides (n)</label>
        <input
          type="number"
          value={nStr}
          onChange={(e) => setNStr(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
          placeholder="e.g. 4 for Quadrilateral"
          min="3"
        />
      </div>

      {result && nStr !== "" && parseInt(nStr) >= 3 && (
        <div className="mt-8 p-6 bg-rose-50 rounded-xl border border-rose-100">
          <h3 className="font-syne font-bold text-lg text-rose-900 mb-4">Results</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Sum of Interior Angles</span>
              <span className="font-bold text-rose-700 text-lg">{result.sumOfInterior}°</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Each Interior Angle</span>
              <span className="font-bold text-rose-700 text-lg">{result.eachInterior}°</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Each Exterior Angle</span>
              <span className="font-bold text-rose-700 text-lg">{result.eachExterior}°</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Number of Diagonals</span>
              <span className="font-bold text-rose-700 text-lg">{result.diagonals}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
