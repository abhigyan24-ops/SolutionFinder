"use client";

import { useState } from "react";

export default function PolynomialsCalculator() {
  const [aStr, setAStr] = useState<string>("");
  const [bStr, setBStr] = useState<string>("");
  const [cStr, setCStr] = useState<string>("");
  const [xStr, setXStr] = useState<string>("");

  const calculate = () => {
    const a = parseFloat(aStr) || 0; // default to 0 if empty, but we'll require x
    const b = parseFloat(bStr) || 0;
    const c = parseFloat(cStr) || 0;
    const x = parseFloat(xStr);
    
    if (isNaN(x)) return null;

    // Evaluate P(x) = ax^2 + bx + c
    const result = (a * x * x) + (b * x) + c;
    return result.toLocaleString(undefined, { maximumFractionDigits: 4 });
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div className="mb-4 text-gray-600 text-sm">
        Polynomial format: <span className="font-mono bg-gray-100 px-2 py-1 rounded">P(x) = ax² + bx + c</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">a (coeff of x²)</label>
          <input
            type="number"
            value={aStr}
            onChange={(e) => setAStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">b (coeff of x)</label>
          <input
            type="number"
            value={bStr}
            onChange={(e) => setBStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">c (constant)</label>
          <input
            type="number"
            value={cStr}
            onChange={(e) => setCStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Value of x</label>
          <input
            type="number"
            value={xStr}
            onChange={(e) => setXStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 2"
          />
        </div>
      </div>

      {result && xStr !== "" && (
        <div className="mt-8 p-6 bg-pink-50 rounded-xl border border-pink-100">
          <h3 className="font-syne font-bold text-lg text-pink-900 mb-4">Result</h3>
          <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
            <span className="text-gray-600 font-medium">P({xStr})</span>
            <span className="font-bold text-pink-700 text-lg">{result}</span>
          </div>
        </div>
      )}
    </div>
  );
}
