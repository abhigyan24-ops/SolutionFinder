"use client";

import { useState } from "react";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<string>("");
  const [rate, setRate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("1"); // 1 for annual, 2 for half-yearly, 4 for quarterly

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    const n = parseFloat(frequency);
    
    if (isNaN(p) || isNaN(r) || isNaN(t)) return null;

    // A = P(1 + r/n)^(nt) where r is decimal
    const amount = p * Math.pow((1 + (r / 100) / n), n * t);
    const ci = amount - p;

    return {
      amount: amount.toLocaleString(undefined, { maximumFractionDigits: 2 }),
      ci: ci.toLocaleString(undefined, { maximumFractionDigits: 2 })
    };
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Principal (P)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 10000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Rate of Interest (R) % p.a.</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 5"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time (T) in years</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Compounded</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none bg-white"
          >
            <option value="1">Annually</option>
            <option value="2">Half-Yearly</option>
            <option value="4">Quarterly</option>
          </select>
        </div>
      </div>

      {result && principal !== "" && rate !== "" && time !== "" && (
        <div className="mt-8 p-6 bg-yellow-50 rounded-xl border border-yellow-100">
          <h3 className="font-syne font-bold text-lg text-yellow-900 mb-4">Results</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Total Amount (A)</span>
              <span className="font-bold text-yellow-700 text-lg">₹ {result.amount}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Compound Interest (CI)</span>
              <span className="font-bold text-yellow-700 text-lg">₹ {result.ci}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
