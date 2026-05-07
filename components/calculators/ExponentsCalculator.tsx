"use client";

import { useState } from "react";

export default function ExponentsCalculator() {
  const [base, setBase] = useState<string>("");
  const [exponent, setExponent] = useState<string>("");

  const calculate = () => {
    const b = parseFloat(base);
    const e = parseFloat(exponent);
    if (isNaN(b) || isNaN(e)) return null;
    return {
      result: Math.pow(b, e).toLocaleString(undefined, { maximumFractionDigits: 6 }),
    };
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Base (x)</label>
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Exponent (y)</label>
          <input
            type="number"
            value={exponent}
            onChange={(e) => setExponent(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 5"
          />
        </div>
      </div>

      {result && base !== "" && exponent !== "" && (
        <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-100">
          <h3 className="font-syne font-bold text-lg text-orange-900 mb-4">Results</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Result (x^y)</span>
              <span className="font-bold text-orange-700 text-lg">{result.result}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
