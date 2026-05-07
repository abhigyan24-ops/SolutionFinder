"use client";

import { useState } from "react";

export default function LinearEquationCalculator() {
  const [aStr, setAStr] = useState<string>("");
  const [bStr, setBStr] = useState<string>("");
  const [cStr, setCStr] = useState<string>("");
  const [dStr, setDStr] = useState<string>("");

  const calculate = () => {
    const a = parseFloat(aStr);
    const b = parseFloat(bStr);
    const c = parseFloat(cStr);
    const d = parseFloat(dStr);
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) return null;

    // ax + b = cx + d
    // ax - cx = d - b
    // x(a - c) = d - b
    // x = (d - b) / (a - c)

    if (a === c) {
      if (b === d) return "Infinite solutions (Identity)";
      return "No solution";
    }

    const x = (d - b) / (a - c);
    return `x = ${x.toLocaleString(undefined, { maximumFractionDigits: 4 })}`;
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div className="mb-4 text-gray-600 text-sm">
        Equation format: <span className="font-mono bg-gray-100 px-2 py-1 rounded">ax + b = cx + d</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">a</label>
          <input
            type="number"
            value={aStr}
            onChange={(e) => setAStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">b</label>
          <input
            type="number"
            value={bStr}
            onChange={(e) => setBStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">c</label>
          <input
            type="number"
            value={cStr}
            onChange={(e) => setCStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">d</label>
          <input
            type="number"
            value={dStr}
            onChange={(e) => setDStr(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
          />
        </div>
      </div>

      {result && aStr !== "" && bStr !== "" && cStr !== "" && dStr !== "" && (
        <div className="mt-8 p-6 bg-cyan-50 rounded-xl border border-cyan-100">
          <h3 className="font-syne font-bold text-lg text-cyan-900 mb-4">Results</h3>
          <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
            <span className="text-gray-600 font-medium">Solution</span>
            <span className="font-bold text-cyan-700 text-lg">{result}</span>
          </div>
        </div>
      )}
    </div>
  );
}
