"use client";

import { useState } from "react";

export default function DirectInverseCalculator() {
  const [type, setType] = useState<"direct" | "inverse">("direct");
  const [x1, setX1] = useState<string>("");
  const [y1, setY1] = useState<string>("");
  const [x2, setX2] = useState<string>("");

  const calculate = () => {
    const valX1 = parseFloat(x1);
    const valY1 = parseFloat(y1);
    const valX2 = parseFloat(x2);
    
    if (isNaN(valX1) || isNaN(valY1) || isNaN(valX2)) return null;

    if (type === "direct") {
      // x1 / y1 = x2 / y2  => y2 = (valY1 * valX2) / valX1
      return ((valY1 * valX2) / valX1).toLocaleString(undefined, { maximumFractionDigits: 4 });
    } else {
      // x1 * y1 = x2 * y2 => y2 = (valX1 * valY1) / valX2
      return ((valX1 * valY1) / valX2).toLocaleString(undefined, { maximumFractionDigits: 4 });
    }
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setType("direct")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${type === "direct" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          Direct Variation
        </button>
        <button
          onClick={() => setType("inverse")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${type === "inverse" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
        >
          Inverse Variation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">x₁</label>
          <input
            type="number"
            value={x1}
            onChange={(e) => setX1(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 5"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">y₁</label>
          <input
            type="number"
            value={y1}
            onChange={(e) => setY1(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 10"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">x₂</label>
          <input
            type="number"
            value={x2}
            onChange={(e) => setX2(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 15"
          />
        </div>
      </div>

      {result && x1 !== "" && y1 !== "" && x2 !== "" && (
        <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100">
          <h3 className="font-syne font-bold text-lg text-green-900 mb-4">Results</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">y₂</span>
              <span className="font-bold text-green-700 text-lg">{result}</span>
            </div>
            <p className="text-sm text-green-700 mt-2">
              Formula used: {type === "direct" ? "x₁ / y₁ = x₂ / y₂" : "x₁ × y₁ = x₂ × y₂"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
