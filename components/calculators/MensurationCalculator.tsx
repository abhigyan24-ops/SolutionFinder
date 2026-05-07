"use client";

import { useState } from "react";

export default function MensurationCalculator() {
  const [shape, setShape] = useState<"rectangle" | "circle" | "triangle">("rectangle");
  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [radius, setRadius] = useState<string>("");
  const [base, setBase] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  const calculate = () => {
    if (shape === "rectangle") {
      const l = parseFloat(length);
      const w = parseFloat(width);
      if (isNaN(l) || isNaN(w)) return null;
      return {
        area: (l * w).toLocaleString(undefined, { maximumFractionDigits: 2 }),
        perimeter: (2 * (l + w)).toLocaleString(undefined, { maximumFractionDigits: 2 })
      };
    } else if (shape === "circle") {
      const r = parseFloat(radius);
      if (isNaN(r)) return null;
      return {
        area: (Math.PI * r * r).toLocaleString(undefined, { maximumFractionDigits: 2 }),
        perimeter: (2 * Math.PI * r).toLocaleString(undefined, { maximumFractionDigits: 2 })
      };
    } else if (shape === "triangle") {
      const b = parseFloat(base);
      const h = parseFloat(height);
      if (isNaN(b) || isNaN(h)) return null;
      return {
        area: (0.5 * b * h).toLocaleString(undefined, { maximumFractionDigits: 2 }),
        perimeter: "Need all 3 sides for perimeter"
      };
    }
    return null;
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Shape</label>
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value as any)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none bg-white"
        >
          <option value="rectangle">Rectangle</option>
          <option value="circle">Circle</option>
          <option value="triangle">Triangle</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shape === "rectangle" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Length</label>
              <input type="number" value={length} onChange={(e) => setLength(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none" placeholder="e.g. 10" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Width</label>
              <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none" placeholder="e.g. 5" />
            </div>
          </>
        )}
        {shape === "circle" && (
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">Radius</label>
             <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none" placeholder="e.g. 7" />
           </div>
        )}
        {shape === "triangle" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Base</label>
              <input type="number" value={base} onChange={(e) => setBase(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none" placeholder="e.g. 8" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none" placeholder="e.g. 6" />
            </div>
          </>
        )}
      </div>

      {result && (
        <div className="mt-8 p-6 bg-fuchsia-50 rounded-xl border border-fuchsia-100">
          <h3 className="font-syne font-bold text-lg text-fuchsia-900 mb-4">Results</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Area</span>
              <span className="font-bold text-fuchsia-700 text-lg">{result.area}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Perimeter / Circumference</span>
              <span className="font-bold text-fuchsia-700 text-lg">{result.perimeter}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
