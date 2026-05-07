"use client";

import { useState } from "react";

export default function ProfitLossCalculator() {
  const [cp, setCp] = useState<string>("");
  const [sp, setSp] = useState<string>("");

  const calculate = () => {
    const cost = parseFloat(cp);
    const selling = parseFloat(sp);
    
    if (isNaN(cost) || isNaN(selling)) return null;

    if (selling > cost) {
      const profit = selling - cost;
      const profitPercent = (profit / cost) * 100;
      return { type: "Profit", amount: profit, percent: profitPercent };
    } else if (cost > selling) {
      const loss = cost - selling;
      const lossPercent = (loss / cost) * 100;
      return { type: "Loss", amount: loss, percent: lossPercent };
    } else {
      return { type: "No Profit No Loss", amount: 0, percent: 0 };
    }
  };

  const result = calculate();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cost Price (CP)</label>
          <input
            type="number"
            value={cp}
            onChange={(e) => setCp(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 1000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Selling Price (SP)</label>
          <input
            type="number"
            value={sp}
            onChange={(e) => setSp(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-all outline-none"
            placeholder="e.g. 1200"
          />
        </div>
      </div>

      {result && cp !== "" && sp !== "" && (
        <div className={`mt-8 p-6 rounded-xl border ${result.type === "Profit" ? "bg-green-50 border-green-100" : result.type === "Loss" ? "bg-red-50 border-red-100" : "bg-gray-50 border-gray-100"}`}>
          <h3 className={`font-syne font-bold text-lg mb-4 ${result.type === "Profit" ? "text-green-900" : result.type === "Loss" ? "text-red-900" : "text-gray-900"}`}>
            Results
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-600 font-medium">Result Type</span>
              <span className={`font-bold text-lg ${result.type === "Profit" ? "text-green-600" : result.type === "Loss" ? "text-red-600" : "text-gray-600"}`}>
                {result.type}
              </span>
            </div>
            {result.type !== "No Profit No Loss" && (
              <>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="text-gray-600 font-medium">{result.type} Amount</span>
                  <span className="font-bold text-gray-900 text-lg">{result.amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="text-gray-600 font-medium">{result.type} Percentage</span>
                  <span className="font-bold text-gray-900 text-lg">{result.percent.toFixed(2)}%</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
